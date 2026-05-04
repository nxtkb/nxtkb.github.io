---
title: "Sweep Pro 墨水屏"
description: "说明 Ferris Sweep Pro 可选墨水屏的实现方式、显示内容，以及带屏幕固件如何构建。"
---

Ferris Sweep Pro 可以在左手半边使用一块 152 x 152 的黑白墨水屏，把它作为常驻键盘状态屏。它不是独立输入功能，也不是动画屏幕；它显示当前键盘状态，并且在键盘空闲时继续保留最后一次渲染的内容。

实现上分成键盘仓库和显示模块两部分：

- Sweep-Pro 仓库里的 `sweep_left_display_hw` 定义 SSD1680 墨水屏硬件、SPI/MIPI DBI 连接、屏幕尺寸、旋转和波形参数。
- `zmk-vfx-sweep-pro-display` 模块里的 `sweep_display` 提供自定义 ZMK status screen UI、LVGL 布局、字体、logo 和各个 widget。

这个拆分是有意的。显示模块不定义物理屏幕节点，因此可以和键盘 shield 组合构建，而不会和键盘自己的硬件 overlay 冲突。

## 屏幕布局

`sweep_display` shield 会选择 ZMK 的 custom display status screen，并渲染一套针对墨水屏调整过的 1-bit LVGL 布局。Sweep Pro 默认屏幕包含这些区域：

| 区域 | Widget | 含义 |
| :--- | :--- | :--- |
| 左上角 | 输出状态 | USB 和蓝牙输出状态。下划线表示当前选中的输出。蓝牙标记会显示当前 profile 编号，`-` 表示该 profile 仍可配对，勾号表示已连接，叉号表示已绑定但未连接。 |
| 右上角 | 电池状态 | 主控半边电量；当能拿到数据时，也会显示右手从属半边电量。USB 供电时，主控电量后会带充电图标。 |
| 中部 | Logo | NXTKB logo 图片和 `NXTkb` 字样。 |
| Logo 下方 | 分体状态 | 左右键盘图标。右手半边会根据 split peripheral transport 状态显示为已连接或断开。 |
| 键盘名称 | 键盘名称 | 来自 `CONFIG_ZMK_KEYBOARD_NAME` 的值。 |
| 触控板行 | 触控板状态 | 运行时 Cirque 模式和速度档位，例如 `Trackpad: R P2 S1`。`R` 表示相对模式，`A` 表示绝对模式，`P` 是指针速度档位，`S` 是滚动速度档位。Sweep Pro 默认以相对模式启动触控板。 |
| 左下角 | 层状态 | 当前最高优先级的激活层。如果层有 `display-name`，显示该名称；否则显示层编号。过长名称会截断到 18 个字符。 |
| 右下角 | HID 指示状态 | 当前激活的修饰键和 Caps Lock 状态。该 widget 会跟踪 Alt、Ctrl、Command/GUI、Shift 和 Caps Lock，并用下划线标记当前激活项。 |

模块里还包含可选的 WPM widget（`CUSTOM_WIDGET_WPM_STATUS`），但 Sweep Pro 默认屏幕配置不会启用它。

## 状态来源

屏幕是事件驱动的。每个 widget 订阅对应的 ZMK 事件，只更新自己负责的区域：

| 状态 | 来源 |
| :--- | :--- |
| 输出 | `zmk_endpoint_changed`、USB 连接变化和 BLE active profile 变化。 |
| 电池 | 本机电池状态、USB 供电状态、分体从属电量上报，以及分体连接变化。 |
| 分体连接 | Split peripheral transport 状态；同时有一个短周期刷新，避免连接状态停留在旧值。 |
| 层 | `zmk_layer_state_changed` 和 ZMK keymap layer name。 |
| 触控板 | `zmk_trackpad_status_changed`，以及来自触控板/pointing 模块的 Cirque 模式、指针速度档位和滚动速度档位。该行跟随运行时模式变化，而不是固定显示启动时模式。 |
| HID 指示 | HID indicator 变化和修饰键 keycode 状态变化。 |

由于 display shield 设置了 `CONFIG_ZMK_DISPLAY_BLANK_ON_IDLE=n`，键盘空闲时墨水屏不会清空，而是保留最后一次显示的状态。

## 固件构建

墨水屏只在左手半边。带屏幕构建需要同时包含键盘硬件 shield 和屏幕 UI shield：

```sh
-DSHIELD="sweep_left sweep_left_display_hw sweep_display"
```

本地构建时还需要把 `zmk-vfx-sweep-pro-display` 放进 `ZMK_EXTRA_MODULES`。在标准 Sweep Pro workspace 里，带屏幕左手固件产物名是 `sweep_left_display`。

| 硬件版本 | 左手 UF2 | 右手 UF2 |
| :--- | :--- | :--- |
| 墨水屏版 | `sweep_left_display` | `sweep_right` |
| 全功能版 | `sweep_left_display` | `sweep_right_trackpad` |

基础版和只有触控板的版本应刷 `sweep_left`，不要刷 `sweep_left_display`。

`sweep_display` 会启用状态屏需要的组件，包括 ZMK display、MIPI DBI SPI、SSD16XX、LVGL、1-bit 色深、mono theme、图片支持、flex 布局、专用 display work queue 和 HID indicators。Sweep Pro 的 display 硬件配置还启用了 `CUSTOM_WIDGET_TRACKPAD_STATUS`，因此正常带屏幕固件会包含触控板状态行。

## 可调整内容

多数可见文字跟随现有键盘配置：

- 层名称来自 `config/sweep.keymap` 里的 `display-name`。
- 键盘名称来自 `CONFIG_ZMK_KEYBOARD_NAME`。
- 触控板模式、指针速度和滚动速度跟随运行时 Cirque/pointing-speed 状态。
- 电池和输出状态跟随 ZMK 正常的 USB、BLE、电池和分体事件。

SSD1680 节点、152 x 152 尺寸、旋转、GPIO 和 partial refresh 波形等硬件级显示设置在 Sweep-Pro 键盘 shield 中。布局、logo、字体和 widget 选择在 `zmk-vfx-sweep-pro-display` 模块中。

普通改键一般不需要修改显示模块。只有在你想改屏幕布局、替换 logo、增删 widget 或调整 LVGL 样式时，才需要修改该模块。

## 排查建议

- 如果屏幕没有内容，先确认左手刷的是 `sweep_left_display`，不是 `sweep_left`。
- 如果本地构建找不到 `sweep_display`，确认 `ZMK_EXTRA_MODULES` 包含 `zmk-vfx-sweep-pro-display`。
- 如果构建时显示硬件节点冲突，确认硬件 overlay 只来自 `sweep_left_display_hw`；`sweep_display` 应只提供 UI。
- 如果触控板行缺失，确认构建包含 Cirque input module，并且启用了 `CONFIG_CUSTOM_WIDGET_TRACKPAD_STATUS=y`。
- 如果右手电量或分体连接状态缺失，确认右手半边已开机，并重新连接到左手。
- 如果层名不是预期内容，检查 `config/sweep.keymap` 中各层的 `display-name`。

完整构建命令见[自行构建固件](../build-your-own-firmware/)。配置文件位置见 [Sweep Pro 配置文件](../sweep-pro-configuration/)。
