---
title: "Ferris Sweep 使用指南"
description: "完成 NXTKB Ferris Sweep 上手，了解分层键位，以及改键和更新固件的方法。"
---

NXTKB Ferris Sweep 是 34 键矮轴分体键盘，支持 USB、蓝牙和 ZMK Studio。通过拇指层键，在紧凑布局中使用数字、导航、符号和功能控制。

键盘图集、凯华 Choc V1 轴体、配色和磁吸支架套餐见[官网产品页](/zh/products/ferris-sweep/)。

## 第一次上手

1. 打开左右两半电源，用能传数据的 USB 线连接左侧主控半边与电脑。
2. 打开[键鼠测试](../keymap/input-tester/)，确认左右两半都能输入。
3. 按[连接到设备](../connect/)完成蓝牙配对或切换输出。
4. 学习 [Ferris Sweep 默认键位](../keymap/ferris-sweep-keymap/)。

## 分层与改键

- 按住右拇指 `Tab` 层键，进入数字和导航层。
- 按住左拇指 `Tab` 层键，进入符号层。
- 同时按住两侧层键，进入功能层，选择蓝牙 profile、切换输出、解锁 Studio 或进入 Codex 层。
- 鼠标层通过按键提供指针、滚轮和鼠标键控制；具体绑定与 Codex 层见[键位指南](../keymap/ferris-sweep-keymap/)。

日常改键可使用 [ZMK Studio](https://zmk.studio/)，无需重新编译固件。需要修改固件功能或长期维护源码配置时，可 fork [配置仓库](https://github.com/nxtkb/zmk-config-4-ferris-sweep)，按[更新键位映射](../keymap/how-to-update-keymaps/)操作。

[配置文件说明](../../firmware/ferris-sweep-configuration/)介绍蓝牙、电池上报、鼠标键等功能对应的文件。本款键盘的固件和 shield 使用 `cradio` 名称。

## Codex / ChatGPT 控制

默认配置为左侧主控半边构建 USB 与蓝牙 Codex 控制，右半继续使用普通从属固件。从功能层进入 `CODEX` 层，可切换 Agent 或使用命令键。

这项功能不要求屏幕，按键跟随当前选中的 USB 输出或蓝牙 profile。操作见 [Codex 使用指南](/zh/blog/codex-micro-chatgpt-protocol/)，绑定见 [Codex 层](../keymap/ferris-sweep-keymap/#codex-层)。桌面端兼容属于实验功能，取决于应用当前的设备发现行为。

## 固件更新

从 [Ferris Sweep 发布版本](https://github.com/nxtkb/zmk-config-4-ferris-sweep/releases)下载预构建固件，或通过 [GitHub Actions](https://github.com/nxtkb/zmk-config-4-ferris-sweep/actions/workflows/build.yml)构建自己的 fork。

| 半边 | 固件文件名包含 |
| :--- | :--- |
| 左侧主控 | `cradio_left` 或 `left` |
| 右半 | `cradio_right` 或 `right` |

具体文件名可能带板型或构建后缀。请从 Ferris Sweep 仓库选取固件，再按[刷写指南](../../firmware/how-to-flash-a-firmware/)操作。

双击复位键可进入烧录模式。如果按键不可用，也可使用键位中的 `Boot` 绑定，或短接 `RST` 与 `GND` 两次；拆开键盘前请先看刷写指南。

只改按键时通常更新左半即可；修改共享配置或分体行为时，可能需要更新两半。只有需要清除配对等已保存设置时才使用 reset 固件。

首次启用 Codex 蓝牙支持后，请在电脑上忽略旧配对、清除键盘对应的 ZMK 蓝牙 profile，再重新配对，以更新缓存的 HID report map。

## 更多帮助

- [自行构建固件](../../firmware/build-your-own-firmware/)：源码与构建流程。
- [键鼠测试](../keymap/input-tester/)：检查输入行为。
- [产品页面](/zh/products/ferris-sweep/)：轴体、配色、配件和购买入口；支持渠道为 Discord `@lilin0522`、微信 `nxtkb888`。
