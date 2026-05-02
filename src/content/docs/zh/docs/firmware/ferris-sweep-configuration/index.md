---
title: "Ferris Sweep 配置文件"
description: "整理 Ferris Sweep 中无法只靠 ZMK Studio 调整的细节固件配置。"
---

Ferris Sweep 的配置结构比 Sweep Pro 更简单。大多数用户可见的调整都在 `config/cradio.keymap` 和 `config/cradio.conf` 中。

能用 [ZMK Studio](/zh/docs/setup/keymap/how-to-update-keymaps/) 实时改的键位，优先用 Studio。这个页面记录需要改源码文件并重新构建固件的配置项。

## 文件位置

| 文件 | 控制内容 | 通常刷写 |
| :--- | :--- | :--- |
| `config/cradio.keymap` | 层、按键绑定、本位行修饰键、条件三层、鼠标层、软关机唤醒行为、电池上报行为连接、指针移动键和滚动键。 | 通常刷左手主控；如果改到分体或右手侧行为，也构建右手。 |
| `config/cradio.conf` | 蓝牙、USB、电池上报、空闲/睡眠、指针支持、ZMK Studio、behavior 队列和键盘名称。 | 使用该共享配置的左右两半。 |
| `config/behaviors/character_map.dtsi` | 文本输出和 report 类行为使用的字符映射。 | 修改后通常刷左手主控。 |
| `config/behaviors/report.dtsi` | 键位中使用的电池/report 行为。 | 修改后通常刷左手主控。 |
| `config/behaviors/send_string.dtsi` | 定义 send-string 行为的辅助宏。 | 如果 keymap 使用到修改后的行为，通常刷左手主控。 |
| `build.yaml` | GitHub Actions 中 `cradio_left`、`cradio_right` 和 `settings_reset` 的构建矩阵。 | 不直接刷写；它决定 Actions 产出哪些 UF2。 |

## 常见细节调整

| 目标 | 修改位置 | 备注 |
| :--- | :--- | :--- |
| 修改按键或层 | `config/cradio.keymap` | 如果改的是公开默认键位，记得重新生成 Ferris Sweep 键位图。 |
| 修改本位行修饰键时序 | `config/cradio.keymap` 中的 `ht` behavior | 当前是 `tapping-term-ms = <200>`、`quick-tap-ms = <150>`。 |
| 修改三层触发规则 | `config/cradio.keymap` 中的 `conditional_layers` | 当前是左右两个层同时激活时进入功能层。 |
| 修改鼠标层按键 | `config/cradio.keymap` 中的 `mouse` layer | 控制 `MB4`、`MB5`、`MCLK`、移动键和滚动键。 |
| 调整按键式指针移动或滚动 | `config/cradio.keymap` 中的 `mmv` 和 `msc` | 这是固件里的移动/滚动行为配置，不是操作系统设置。 |
| 修改蓝牙槽位或配对容量 | `config/cradio.conf` 中的 `CONFIG_BT_MAX_CONN` 和 `CONFIG_BT_MAX_PAIRED` | 当前值是 5。 |
| 修改电池上报 | `config/cradio.conf` 中的 `CONFIG_ZMK_BATTERY_REPORTING*` 和 `CONFIG_ZMK_BATTERY_REPORT_INTERVAL` | 当前上报间隔是 180 秒。 |
| 修改睡眠行为 | `config/cradio.conf` 中的 `CONFIG_ZMK_IDLE_TIMEOUT`、`CONFIG_ZMK_SLEEP`、`CONFIG_ZMK_IDLE_SLEEP_TIMEOUT` | 当前睡眠超时为 1 小时。 |
| 修改蓝牙键盘名称 | `config/cradio.conf` 中的 `CONFIG_ZMK_KEYBOARD_NAME` | 保持 16 个字符以内。 |
| 修改构建产物 | `build.yaml` | 默认 Actions 矩阵构建 `cradio_left`、`cradio_right` 和 `settings_reset`。 |

## 构建目标

Ferris Sweep 使用一个左手固件和一个右手固件：

| 固件 | Shield | 用途 |
| :--- | :--- | :--- |
| `cradio_left` | `cradio_left` | 左手主控；默认构建矩阵启用 ZMK Studio USB RPC。 |
| `cradio_right` | `cradio_right` | 右手侧。 |
| `settings_reset` | `settings_reset` | 清除蓝牙配对和 ZMK 已保存设置。 |

默认 `build.yaml` 矩阵是：

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

## 重新构建建议

- 如果只通过 ZMK Studio 改了实时键位，通常不需要重新构建固件。
- 如果改了 `config/cradio.keymap`，至少重新构建左手主控固件。
- 如果改了 `config/cradio.conf` 中的共享选项，重新构建左右两半。
- 如果改了 `build.yaml`，重新运行 GitHub Actions 构建，并下载新生成的 UF2。

具体 GitHub Actions 和本地构建命令见[自行构建固件](../build-your-own-firmware/)。
