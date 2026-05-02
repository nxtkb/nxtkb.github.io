---
title: "Ferris Sweep 键位映射"
---

## 简介

以下键位映射图像是从 [keymap-drawer](https://keymap-drawer.streamlit.app/?zmk_url=https%3A%2F%2Fgithub.com%2Fnxtkb%2Fzmk-config-4-ferris-sweep%2Fblob%2Fmain%2Fconfig%2Fcradio.keymap) 导出的，最新键位映射也可在该网站查看。

此键位映射的源代码可在 [nxtkb/zmk-config-4-ferris-sweep](https://github.com/nxtkb/zmk-config-4-ferris-sweep) 获取，其中提供了 NXTKB Ferris Sweep 键盘的完整配置。

## 键位总览

<a class="keymap-overview" href="#ferris-sweep-keymap-lightbox" aria-label="放大键位总览">
  <img src="/keymaps/ferris-sweep/ferris_sweep_keymap.svg" alt="键位总览" />
</a>

<div id="ferris-sweep-keymap-lightbox" class="keymap-lightbox" aria-label="键位总览预览">
  <a class="keymap-lightbox-backdrop" href="#键位总览" aria-label="关闭预览"></a>
  <figure>
    <a class="keymap-lightbox-close" href="#键位总览" aria-label="关闭预览">&times;</a>
    <img src="/keymaps/ferris-sweep/ferris_sweep_keymap.svg" alt="键位总览" />
  </figure>
</div>

## 键位层

### 字符层（默认/Windows层）

- 默认层和 Windows 层用于输入字符。
- 两者都把 `CTRL`、`OPTION (ALT)`、`COMMAND (WINDOWS)` 放在左右手无名指、中指和食指的本位字符键上。按住触发修饰键，轻按输入字符。

![默认层](/keymaps/ferris-sweep/ferris_sweep_keymap_default_layer.svg)

![Windows层](/keymaps/ferris-sweep/ferris_sweep_keymap_win_layer.svg)

### 数字和导航层

- 按住右侧 `TAB` 层键进入数字和导航层。
- 松开右侧 `TAB` 键返回默认层或 Windows 层。
- 特殊键：
  - `Boot`: 使分体键盘的右半部分进入引导加载程序，然后可以复制新的固件。

![数字和导航层](/keymaps/ferris-sweep/ferris_sweep_keymap_num_and_nav_layer.svg)

### 符号层（标点符号）

- 按住左侧 `TAB` 层键进入符号层。
- 松开左侧 `TAB` 键返回默认层或 Windows 层。
- 特殊键：
  - `Report`: 输出电池信息。
  - `Boot`: 使分体键盘的左半部分进入引导加载程序，然后可以复制新的固件。
  - `MOUSE`: 切换到鼠标层。

![符号层](/keymaps/ferris-sweep/ferris_sweep_keymap_symbol_layer.svg)

### 功能层

- 同时按住左右两侧 `TAB` 层键进入功能层。
  - `BT 0` 到 `BT 4`: 选择要连接或想要连接的蓝牙设备档位。
  - `BT CLR`: 清除所选档位的连接，然后可重新配对该档位。
  - `OUT TOG`: 在 USB 和蓝牙输出之间切换，因此最多可以连接 6 个设备：5 个蓝牙设备和 1 个 USB 设备。
  - `WIN`: 切换 Windows 层，以便在默认层和 Windows 层之间切换。
  - `Studio`: 解锁键盘，以便使用 [ZMK Studio](https://zmk.dev/docs/features/studio#keymap-changes) 设置按键。
  - `Off`: 进入软关机模式。它类似于深度睡眠，但只能通过配置的唤醒键唤醒，目前是左拇指 `LSHIFT` 键。
- 松开 `TAB` 层键返回默认层或 Windows 层。

![功能层](/keymaps/ferris-sweep/ferris_sweep_keymap_func_layer.svg)

### 鼠标层

- 按住左侧 `TAB` 层键并按 `SPACE` 切换到鼠标层。
- 按 `P` 或 `Q` 退出鼠标层。
- `MB4` 用于浏览器后退，`MB5` 用于浏览器前进。

![鼠标层](/keymaps/ferris-sweep/ferris_sweep_keymap_mouse_layer.svg)

## 参考资料

- [Sweep 仓库](https://github.com/davidphilipbarr/Sweep)
- [我最初复制的键位映射](https://www.youtube.com/watch?v=VShLPvF693k)
