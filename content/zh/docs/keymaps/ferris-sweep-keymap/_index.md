---
title: "Ferris Sweep 键位映射"
weight: 2
---

## 简介

以下键位映射图像是从[keymap drawer](https://keymap-drawer.streamlit.app/?zmk_url=https%3A%2F%2Fgithub.com%2Fnxtkb%2Fzmk-config-4-ferris-sweep%2Fblob%2Fmain%2Fconfig%2Fcradio.keymap)导出的，最新键位映射也可在该网站查看。

此键位映射的源代码可在[nxtkb/zmk-config-4-ferris-sweep](https://github.com/nxtkb/zmk-config-4-ferris-sweep)获取，其中提供了NXTKB Ferris Sweep键盘的完整配置。

## 键位层

### 字符层（默认/Windows层）

- 默认层和Windows层是您输入字符的地方。
- 两者都具有修饰键 `CTRL`、`OPTION (ALT)`、`COMMAND (WINDOWS)`，这些键与左右手无名指、中指和食指上的字符键位置相同。按住键触发修饰功能，轻按键输入字符。

![默认层](/keymaps/ferris-sweep/ferris_sweep_keymap_default_layer.svg)

![Windows层](/keymaps/ferris-sweep/ferris_sweep_keymap_win_layer.svg)

### 数字和导航层

- 按住右侧Tab键进入右侧层，然后可以输入数字或进行一些导航操作。
- 松开右侧Tab键返回默认层或Windows层。
- 特殊键：
  - `&bootloader`: 使分体键盘的右半部分进入引导加载程序，然后您可以复制新的固件。

![数字和导航层](/keymaps/ferris-sweep/ferris_sweep_keymap_num_and_nav_layer.svg)

### 符号层（标点符号）

- 按住左侧Tab键进入左侧层，然后可以输入标点符号。
- 松开左侧Tab键返回默认层或Windows层。
- 特殊键：
  - `&default_report`: 输出电池信息
  - `&bootloader`: 使分体键盘的左半部分进入引导加载程序，然后您可以复制新的固件。
  - `MOUSE toggle`: 切换到鼠标层

![符号层](/keymaps/ferris-sweep/ferris_sweep_keymap_symbol_layer.svg)

### 功能层

- 同时按住左侧和右侧Tab键进入三重层，然后可以输入功能键。
  - `BT 0` 到 `BT 4`: 选择要连接或想要连接的蓝牙设备位置。
  - `BT CLR`: 清除所选位置的连接，然后您可以重新连接到该位置的设备。
  - `OUT TOG`: 在USB和蓝牙连接之间切换，因此您可以连接最多6个设备（5个蓝牙设备，1个USB设备）
  - `WIN toggle`: 切换Windows层，以便在默认层和Windows层之间切换。
  - `&studio_unlock`: 解锁键盘，以便您可以使用[zmk studio](https://zmk.dev/docs/features/studio#keymap-changes)设置按键
  - `&soft_off`: 进入软关机模式，类似于长时间不活动后进入的深度睡眠，但软关机只能通过唤醒键唤醒（设置为左拇指键：`shift`）
- 松开Tab键返回默认层或Windows层。

![功能层](/keymaps/ferris-sweep/ferris_sweep_keymap_func_layer.svg)

### 鼠标层

- 按住左侧Tab键（进入左侧层），然后按空格键进入鼠标层
- 按 `p` 或 `q` 退出鼠标层
- `MB4` 用于后退，`MB5` 用于前进

![鼠标层](/keymaps/ferris-sweep/ferris_sweep_keymap_mouse_layer.svg)

## 参考资料

- [Sweep 仓库](https://github.com/davidphilipbarr/Sweep)
- [我最初复制的键位映射](https://www.youtube.com/watch?v=VShLPvF693k)