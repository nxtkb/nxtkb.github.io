---
title: "自行构建固件"
description: "在本地或通过 GitHub Actions 构建 NXTKB Ferris Sweep Pro 和 Ferris Sweep 固件。"
---

NXTKB 键盘使用 [ZMK](https://zmk.dev/) 固件。当前我们维护两套配置仓库：

| 键盘 | 配置仓库 | 主要构建目标 |
| --- | --- | --- |
| Ferris Sweep Pro | [`nxtkb/Sweep-Pro`](https://github.com/nxtkb/Sweep-Pro) | `sweep_left`、`sweep_left_display`、`sweep_right`、`sweep_right_trackpad`、`settings_reset` |
| Ferris Sweep | [`nxtkb/zmk-config-4-ferris-sweep`](https://github.com/nxtkb/zmk-config-4-ferris-sweep) | `cradio_left`, `cradio_right`, `settings_reset` |

大多数键位修改只需要刷写主控左手侧。只有修改右手侧行为、分体通信设置或硬件配置时，才需要构建并刷写右手侧。`settings_reset` 用于清除蓝牙配对和 ZMK 已保存设置。

## 使用 GitHub Actions 构建

这是最适合大多数用户的方式，因为它和 NXTKB 公共固件仓库使用同一套构建流程。

### 1. Fork 对应仓库

- Ferris Sweep Pro：fork [`nxtkb/Sweep-Pro`](https://github.com/nxtkb/Sweep-Pro)。
- 原版 Ferris Sweep：fork [`nxtkb/zmk-config-4-ferris-sweep`](https://github.com/nxtkb/zmk-config-4-ferris-sweep)。

### 2. 修改配置

常见配置文件：

- Ferris Sweep Pro：`config/sweep.keymap`、`config/sweep.conf`，以及单侧 `config/*.conf` 文件。
- Ferris Sweep：`config/cradio.keymap`、`config/cradio.conf`，以及 `config/behaviors/` 下的行为文件。

如果要调整 Sweep Pro 的触控板模式、启动延迟、旋钮行为、屏幕硬件、电池上报或构建产物，见 [Sweep Pro 配置文件](../sweep-pro-configuration/)。

如果要调整 Ferris Sweep 的 hold-tap 时序、鼠标层按键、蓝牙容量、睡眠行为、键盘名称或构建产物，见 [Ferris Sweep 配置文件](../ferris-sweep-configuration/)。

构建矩阵在 `build.yaml` 中。当前 Ferris Sweep Pro 会构建：

```yaml
include:
  - board: nice_nano//zmk
    shield: sweep_left
    snippet: studio-rpc-usb-uart
    artifact-name: sweep_left
  - board: nice_nano//zmk
    shield: sweep_left sweep_left_display_hw sweep_display
    snippet: studio-rpc-usb-uart
    artifact-name: sweep_left_display
  - board: nice_nano//zmk
    shield: sweep_right
    artifact-name: sweep_right
  - board: nice_nano//zmk
    shield: sweep_right sweep_right_trackpad
    artifact-name: sweep_right_trackpad
  - board: nice_nano//zmk
    shield: settings_reset
```

当前 Ferris Sweep 会构建：

```yaml
include:
  - board: nice_nano//zmk
    shield: cradio_left
    snippet: studio-rpc-usb-uart
  - board: nice_nano//zmk
    shield: cradio_right
  - board: nice_nano//zmk
    shield: settings_reset
```

### 3. 运行工作流

两个仓库都包含 `.github/workflows/build.yml`，它会调用 ZMK 的可复用 `build-user-config.yml` 工作流。

- 向你的 fork 推送 commit，或在 **Actions** 页面手动运行 **Build ZMK firmware**。
- 打开完成的 workflow run。
- 下载 firmware artifact 压缩包。
- 解压得到 `.uf2` 文件。

然后选择对应文件刷写：

- 左手主控：文件名包含 `left`、`cradio_left`、`sweep_left` 或 `sweep_left_display`。
- 右手侧：文件名包含 `right`、`sweep_right` 或 `sweep_right_trackpad`。
- 重置固件：文件名包含 `settings_reset` 或 `reset`。

刷写步骤见[如何刷写固件](../how-to-flash-a-firmware/)。

## 本地构建

本地构建适合固件开发、模块调试，或者在推送到 GitHub 前快速迭代。

### 1. 准备工作区

下面示例假设你的目录结构为：

```sh
NXTKB_ROOT="$HOME/git-repo/nxtkb"
```

需要的仓库：

```text
$NXTKB_ROOT/zmkfirmware/zmk
$NXTKB_ROOT/Sweep-Pro
$NXTKB_ROOT/zmk-config-4-ferris-sweep
$NXTKB_ROOT/zmk-vfx-sweep-pro-display
$NXTKB_ROOT/cirque-input-module
$NXTKB_ROOT/zmk-behavior-report
$NXTKB_ROOT/zmk-behavior-send-string
```

构建命令应在 `$NXTKB_ROOT/zmkfirmware/zmk` 中运行，不是在键盘配置仓库中运行。

### 2. 安装依赖

Arch Linux：

```sh
sudo pacman -S git cmake ninja gperf ccache dfu-util dtc wget tk xz file make uv
paru -S zephyr-sdk
```

如果 shell 没有自动找到 Zephyr SDK，可以设置：

```sh
export ZEPHYR_TOOLCHAIN_VARIANT=zephyr
export ZEPHYR_SDK_INSTALL_DIR="$HOME/zephyr-sdk-0.17.0"
```

### 3. 初始化 ZMK

```sh
cd "$NXTKB_ROOT/zmkfirmware/zmk"
uv venv --python 3.13
source .venv/bin/activate
uv pip install west

west init -l app/
west update
west zephyr-export
uv pip install -r zephyr/scripts/requirements-base.txt protobuf
```

后续重新打开终端时，先进入工作区并激活虚拟环境：

```sh
cd "$NXTKB_ROOT/zmkfirmware/zmk"
source .venv/bin/activate
```

### 4. 构建 Ferris Sweep Pro

```sh
NXTKB_ROOT="$HOME/git-repo/nxtkb"
EXTRA_MODULES="$NXTKB_ROOT/Sweep-Pro;$NXTKB_ROOT/zmk-vfx-sweep-pro-display;$NXTKB_ROOT/cirque-input-module;$NXTKB_ROOT/zmk-behavior-report;$NXTKB_ROOT/zmk-behavior-send-string"
ZMK_CONFIG_DIR="$NXTKB_ROOT/Sweep-Pro/config"
```

构建带 ZMK Studio USB RPC 的左手基础版：

```sh
west build -s app -p -d build/sweep_left -b nice_nano//zmk \
  -S studio-rpc-usb-uart -- \
  -DSHIELD=sweep_left \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

构建带显示屏和 ZMK Studio USB RPC 的左手侧：

```sh
west build -s app -p -d build/sweep_left_display -b nice_nano//zmk \
  -S studio-rpc-usb-uart -- \
  -DSHIELD="sweep_left sweep_left_display_hw sweep_display" \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

构建右手侧：

```sh
west build -s app -p -d build/sweep_right -b nice_nano//zmk -- \
  -DSHIELD=sweep_right \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

构建带触控板的右手侧：

```sh
west build -s app -p -d build/sweep_right_trackpad -b nice_nano//zmk -- \
  -DSHIELD="sweep_right sweep_right_trackpad" \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

构建重置固件：

```sh
west build -s app -p -d build/sweep_reset -b nice_nano//zmk -- \
  -DSHIELD=settings_reset \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

输出文件在各自 build 目录的 `zephyr/zmk.uf2`，例如 `build/sweep_left/zephyr/zmk.uf2`。

按硬件版本选择 UF2：

| 版本 | 左手 UF2 | 右手 UF2 |
| --- | --- | --- |
| 基础版 | `sweep_left` | `sweep_right` |
| 墨水屏版 | `sweep_left_display` | `sweep_right` |
| 触控板版 | `sweep_left` | `sweep_right_trackpad` |
| 全功能版 | `sweep_left_display` | `sweep_right_trackpad` |

### 5. 构建 Ferris Sweep

```sh
NXTKB_ROOT="$HOME/git-repo/nxtkb"
EXTRA_MODULES="$NXTKB_ROOT/zmk-behavior-report;$NXTKB_ROOT/zmk-behavior-send-string"
ZMK_CONFIG_DIR="$NXTKB_ROOT/zmk-config-4-ferris-sweep/config"
```

构建带 ZMK Studio USB RPC 的左手侧：

```sh
west build -s app -p -d build/ferris_left -b nice_nano//zmk \
  -S studio-rpc-usb-uart -- \
  -DSHIELD=cradio_left \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

构建右手侧：

```sh
west build -s app -p -d build/ferris_right -b nice_nano//zmk -- \
  -DSHIELD=cradio_right \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

构建重置固件：

```sh
west build -s app -p -d build/ferris_reset -b nice_nano//zmk -- \
  -DSHIELD=settings_reset \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

### 6. 更快地重新构建

首次构建成功后，通常可以去掉 `-p` 来加快增量构建。修改模块、devicetree overlay、shield、snippet 或 CMake 相关配置后，再加回 `-p` 做干净构建。

## 常见问题

- `west: unknown command "build"`：确认你在 `$NXTKB_ROOT/zmkfirmware/zmk` 中，并且已经激活虚拟环境。
- `source directory "." does not contain a CMakeLists.txt`：构建时需要使用 `-s app`。
- 找不到 shield、behavior、binding 或 display 文件：检查 `ZMK_CONFIG`、`ZMK_EXTRA_MODULES`，以及模块列表是否用英文分号分隔。
- 右手侧构建可能出现一些只和左手功能相关的警告。只要构建完成并生成 `zmk.uf2`，该固件文件就可以使用。
