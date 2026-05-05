---
title: "Ferris Sweep Pro 键位映射"
---

## 简介

以下键位映射图像是从[keymap drawer](https://keymap-drawer.streamlit.app/?zmk_url=https%3A%2F%2Fgithub.com%2Fnxtkb%2FSweep-Pro%2Fblob%2Fmain%2Fconfig%2Fsweep.keymap)导出的，最新键位映射也可在该网站查看。

此键位映射的源代码可在[nxtkb/Sweep-Pro](https://github.com/nxtkb/Sweep-Pro)获取，其中提供了NXTKB Ferris Sweep Pro键盘的完整配置。

> **注意**: 此处需要使用此文件设置布局覆盖：[sweep.dtsi](https://github.com/nxtkb/Sweep-Pro/blob/main/boards/shields/sweep/sweep.dtsi):
> ![keymap drawer 布局覆盖](/docs/ferris-sweep-pro-keymap/keymap-drawer-layout-override.png)

## 键位总览

<a class="keymap-overview" href="#ferris-sweep-pro-keymap-lightbox" aria-label="放大键位总览">
  <img src="/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap.svg" alt="键位总览" />
</a>

<div id="ferris-sweep-pro-keymap-lightbox" class="keymap-lightbox" aria-label="键位总览预览">
  <a class="keymap-lightbox-backdrop" href="#键位总览" aria-label="关闭预览"></a>
  <figure>
    <a class="keymap-lightbox-close" href="#键位总览" aria-label="关闭预览">&times;</a>
    <img src="/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap.svg" alt="键位总览" />
  </figure>
</div>

## 键位层

### 字符层（默认/Windows层）

- 默认层和Windows层都是字符输入层。
- 两层都使用本位排修饰键：`CTRL`、`OPTION (ALT)`、`COMMAND (WINDOWS)` 与左右手无名指、中指和食指上的字符键共用位置。按住触发修饰键，轻按输入字符。
- 按住 `Z` 并移动触控板时，可以向任意方向滚动。使用右边缘滚动时，按住 `Z` 会在固件层把右边缘手势从垂直滚动切换为水平滚动。
- `X` 在这些层中是普通字符键。
- 鼠标 combo 的 timeout 为 25 ms：`E` + `R` 是右键，`D` + `F` 是左键，`C` + `V` 是中键，`F` + `G` 是浏览器后退，`R` + `T` 是浏览器前进。
- 左侧编码器：
  - 旋转：调节音量
  - 按下：切换静音
- 右侧编码器：
  - 旋转：调节亮度
  - 按下：解锁zmk studio

![默认层](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_default_layer.svg)

![Windows层](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_win_layer.svg)

### 数字和导航层

- 按住右拇指 `Tab` 进入数字和导航层。
- 松开右拇指 `Tab` 返回默认层或Windows层。

![数字和导航层](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_num_and_nav_layer.svg)

### 符号层（标点符号）

- 按住左拇指 `Tab` 进入符号层。
- 松开左拇指 `Tab` 返回默认层或Windows层。
- 特殊键：
  - `Report`: 输出电池信息
  - `MOUSE toggle`: 切换到鼠标层

![符号层](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_symbol_layer.svg)

### 功能层

- 同时按住左右拇指 `Tab` 进入功能层。
  - `BT 0` 到 `BT 4`: 选择要连接的蓝牙配置位。
  - `BT CLR`: 清除当前选择的蓝牙配置位，之后可以重新配对。
  - `OUT TOG`: 在USB和蓝牙输出之间切换。
  - `WIN toggle`: 在默认层和Windows层之间切换。
  - `Studio`: 解锁键盘，以便使用[ZMK Studio](https://zmk.dev/docs/features/studio#keymap-changes)设置按键。
  - `Off`: 进入软关机模式，只能通过已配置的唤醒键唤醒。
- 松开拇指 `Tab` 返回默认层或Windows层。

![功能层](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_func_layer.svg)

### 鼠标层

- 按住左拇指 `Tab`，再按 `Space` 切换到鼠标层。
- 按 `Q` 或 `P` 退出鼠标层。
- `M4` 和 `M5` 分别用于浏览器后退和前进。`F` + `G` 和 `R` + `T` 也可以通过 combo 触发同样的后退/前进按钮。
- 左下角按键用于调节指针和滚动速度，`Mode` 用于切换Cirque触控板模式。
- Sweep Pro 默认以绝对模式启动 Cirque 触控板；`Mode` 可在运行时切换绝对模式和相对模式。

![鼠标层](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_mouse_layer.svg)
