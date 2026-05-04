---
title: "Sweep Pro 配置文件"
description: "整理 Ferris Sweep Pro 中无法只靠 ZMK Studio 调整的细节固件配置。"
---

Ferris Sweep Pro 的自定义大致分两类：

- **按键级调整**：例如替换按键、修改层键、调整多数 tap/hold 绑定，主要在 `config/sweep.keymap`。
- **固件配置细节**：例如触控板支持、蓝牙、电池上报、显示屏支持和构建目标，分布在 `config/*.conf`、`config/sweep.keymap` 和 `build.yaml` 中。修改这些内容后需要重新构建并刷写固件。

能用 [ZMK Studio](/zh/docs/setup/keymap/how-to-update-keymaps/) 实时改的键位，优先用 Studio。这个页面记录 Studio 覆盖不到的配置文件。

## 文件位置

| 文件 | 控制内容 | 通常刷写 |
| :--- | :--- | :--- |
| `config/sweep.keymap` | 层、按键绑定、旋钮绑定、鼠标层绑定、指针处理器、`Z` 按住滚动、25 ms 鼠标点击 combo、`Mode` 模式切换。 | 通常刷左手主控；如果改到右手分体行为，也构建右手。 |
| `config/sweep.conf` | 共享 ZMK 选项：USB、蓝牙、鼠标支持、ZMK Studio、电池上报、软关机、behavior 队列、栈大小和睡眠策略。 | 使用该共享配置的左右两半。 |
| `config/sweep_left.conf` | 左手 central 的指针行为，目前主要是 smooth scrolling。 | 左手。 |
| `config/sweep_left_display_hw.conf` | 显示屏、LVGL、SSD16XX、e-ink 渲染相关配置。用户可见状态屏说明见 [Sweep Pro 墨水屏](../sweep-pro-display/)。 | 左手带屏幕固件。 |
| `config/sweep_right.conf` | 右手侧角色配置。 | 右手。 |
| `config/sweep_right_trackpad.conf` | 右手触控板需要的 I2C 和 input 栈配置。 | 右手触控板固件。 |
| `build.yaml` | GitHub Actions 构建矩阵，以及不同硬件版本的 artifact 名称。 | 不直接刷写；它决定 Actions 产出哪些 UF2。 |

## 常见细节调整

| 目标 | 修改位置 | 备注 |
| :--- | :--- | :--- |
| 修改按键或层 | `config/sweep.keymap` | 如果改的是公开默认键位，记得重新生成键位图。 |
| 修改旋钮行为 | `config/sweep.keymap` 每层的 `sensor-bindings` | 当前默认是左旋钮音量、右旋钮亮度。 |
| 调整指针或滚动速度曲线 | `config/sweep.keymap` 中的 `pointer_processor` 和 `drag_scroll_processor` | 鼠标层 `Ptr`、`Scroll` 是运行时调速；这里定义基础处理行为。 |
| 修改 `Z` 按住滚动行为 | `config/sweep.keymap` 中的 `ds_z` 和 `drag_scroll_processor` | `Z` 按住时启用 drag-scroll；当前 drag-scroll 处理器支持启用时的条件横向滚轮。 |
| 修改鼠标点击 combo | `config/sweep.keymap` 中的 `combo_er_right_click`、`combo_df_left_click` 和 `combo_cv_middle_click` | 当前 timeout 为 25 ms。`X` 在基础字符层中是普通字符键。 |
| 修改蓝牙或电池行为 | `config/sweep.conf` | 包含电池上报间隔、分体电池代理、蓝牙 2M PHY、发射功率和睡眠策略。 |
| 修改显示屏固件能力 | `config/sweep_left_display_hw.conf` | 是否启用显示、LVGL、显示线程、字体和内存池等编译配置在这里；自定义状态屏 UI 来自 `zmk-vfx-sweep-pro-display`。 |
| 修改右手触控板固件能力 | `config/sweep_right_trackpad.conf` | 是否启用 I2C 和 input 线程栈等编译配置在这里；日常触控板用法见[使用触控板](/zh/docs/setup/keymap/trackpad/)。 |
| 修改 GitHub Actions 产出的固件 | `build.yaml` | artifact 名称建议保持清晰：`sweep_left`、`sweep_left_display`、`sweep_right`、`sweep_right_trackpad`。 |

## 硬件版本和固件选择

同一份 keymap 支持四种 Sweep Pro 硬件版本。构建后按硬件选择对应 UF2：

| 版本 | 左手 UF2 | 右手 UF2 |
| :--- | :--- | :--- |
| 基础版 | `sweep_left` | `sweep_right` |
| 墨水屏版 | `sweep_left_display` | `sweep_right` |
| 触控板版 | `sweep_left` | `sweep_right_trackpad` |
| 全功能版 | `sweep_left_display` | `sweep_right_trackpad` |

在 `build.yaml` 中，这些版本来自以下 shield 组合：

```yaml
- shield: sweep_left
  artifact-name: sweep_left
- shield: sweep_left sweep_left_display_hw sweep_display
  artifact-name: sweep_left_display
- shield: sweep_right
  artifact-name: sweep_right
- shield: sweep_right sweep_right_trackpad
  artifact-name: sweep_right_trackpad
```

## 重新构建建议

- 如果只通过 ZMK Studio 改了实时键位，通常不需要重新构建固件。
- 如果改了 `config/sweep.keymap`，至少重新构建左手主控固件。
- 如果改了右手触控板相关配置，重新构建并刷写 `sweep_right_trackpad`。
- 如果改了屏幕相关配置，重新构建并刷写 `sweep_left_display`。
- 如果改了共享 `.conf`、模块或 shield 组合，建议带 `-p` 做干净构建。

具体 GitHub Actions 和本地构建命令见[自行构建固件](../build-your-own-firmware/)。
