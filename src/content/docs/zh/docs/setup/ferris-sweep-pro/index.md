---
title: "Ferris Sweep Pro 使用指南"
description: "选择 Sweep Pro 硬件版本，完成连接，了解常用操作，并找到对应固件。"
---

Ferris Sweep Pro 是 34 键矮轴分体键盘，支持 USB-C、蓝牙、双带按键旋钮和 ZMK Studio 实时改键。左侧墨水屏与右侧 Cirque 触控板是可选硬件。

外观图片、轴体、配色和购买选项见[官网产品页](/zh/products/ferris-sweep-pro/)。本页说明上手和日常使用。

## 硬件与版本

| 版本 | 附加硬件 | 左半固件 | 右半固件 |
| :--- | :--- | :--- | :--- |
| 基础版 | — | `sweep_left.uf2` | `sweep_right.uf2` |
| 墨水屏版 | 左侧墨水屏 | `sweep_left_display.uf2` | `sweep_right.uf2` |
| 触控板版 | 右侧 Cirque 触控板 | `sweep_left.uf2` | `sweep_right_trackpad.uf2` |
| 全功能版／旗舰版 | 墨水屏与触控板 | `sweep_left_display.uf2` | `sweep_right_trackpad.uf2` |

四种版本共用一份键位配置，固件按左右两半实际安装的硬件选择。

| 项目 | 说明 |
| :--- | :--- |
| 布局 | 34 键，阶梯式拇指区。 |
| 连接 | USB-C 或蓝牙；电脑连接左侧主控半边。 |
| 旋钮 | 双旋转编码器，均支持按下。 |
| 屏幕选项 | 左侧 1.54 英寸黑白电子墨水屏。 |
| 触控板选项 | 右侧 40 mm Cirque GlidePoint 圆形触控板。 |
| 电池 | 每半边 2000 mAh，总容量 4000 mAh。 |
| 键帽 | PBT 矮轴键帽，热升华字符及前侧副层标记。 |
| 配件 | 可选磁吸支架，详见[支架页面](/zh/products/magnetic-stand/)。 |

轴体、键帽配色、套餐及图集统一在[产品页](/zh/products/ferris-sweep-pro/)查看；定制 34 键键帽另见[键帽页面](/zh/products/low-profile-keycaps/)。

## 第一次上手

1. 打开左右两半电源，用能传数据的 USB 线连接左半与电脑。
2. 打开[键鼠测试](../keymap/input-tester/)，确认左右两半都能输入。
3. 按[连接到设备](../connect/)完成蓝牙配对，或切换 USB 与蓝牙输出。
4. 学习[默认键位与层级](../keymap/ferris-sweep-pro-keymap/)。
5. 按实际硬件尝试[触控板手势](../keymap/trackpad/)，并了解[墨水屏状态标记](../../firmware/sweep-pro-display/)。

## 常用操作

- **分层键位：** 拇指层键用于进入数字导航、符号、功能、鼠标和 Codex 控制。各键的具体操作见[键位说明](../keymap/ferris-sweep-pro-keymap/)。
- **旋钮：** 字符层默认用左旋钮调音量、右旋钮调屏幕亮度；鼠标层改为调整指针和滚动速度，按下对应旋钮可恢复到 `1.00x`。
- **触控板：** 滑动移动光标，轻点左击，轻点右下区域右击，沿右边缘上下滑动滚动。更多手势和速度调整见[触控板说明](../keymap/trackpad/)。
- **墨水屏：** 查看两半电量、各自的 USB 供电标记、当前输出、分体连接和激活层；辅助行会随层切换显示 Agent 或触控板状态，详见[墨水屏说明](../../firmware/sweep-pro-display/)。
- **日常改键：** 使用 [ZMK Studio](https://zmk.studio/) 修改键位并保存，无需重新编译固件。完整操作见[更新键位映射](../keymap/how-to-update-keymaps/)。
- **复位键：** 单击重启对应半边；接着 USB 时，在 0.5 秒内双击可进入 `NICENANO` 烧录盘。

## Codex / ChatGPT 控制

当前发布固件在左侧主控半边提供 USB 和蓝牙 Codex 控制。从 `FUN` 层进入 `CODEX` 层，可切换六个 Agent 或使用命令键。按键与 Agent 状态跟随当前选中的 USB 输出或蓝牙 profile。

操作方法见 [Codex 使用指南](/zh/blog/codex-micro-chatgpt-protocol/)和 [Codex 层键位](../keymap/ferris-sweep-pro-keymap/#codex-层)。桌面端兼容属于实验功能，取决于应用当前的设备发现行为。

## 固件更新

从 [Sweep Pro 发布版本](https://github.com/nxtkb/Sweep-Pro/releases)下载 UF2，按上方硬件表选择左右半配套文件。[刷写指南](../../firmware/how-to-flash-a-firmware/)说明如何进入烧录盘并复制对应固件。

升级到支持分体 USB 供电上报的固件时，请把左右两半都更新到同一发布版本。首次启用 Codex 蓝牙支持后，请在电脑上忽略旧配对、清除键盘对应的 ZMK 蓝牙 profile，再重新配对，以更新缓存的 HID report map。

只有需要清除已保存设置时才使用 settings-reset 固件，正常升级无需刷入。

## 自定义与支持

- [配置文件说明](../../firmware/sweep-pro-configuration/)：调整旋钮、触控板、显示和固件功能。
- [自行构建固件](../../firmware/build-your-own-firmware/)：通过 fork 和 GitHub Actions 构建；对应版本的本地命令与补丁见仓库[本地编译指南](https://github.com/nxtkb/Sweep-Pro/blob/main/docs/zh_CN/local-build.md)。
- [产品与支持](/zh/products/ferris-sweep-pro/#support)：购买入口、Discord `@lilin0522`、微信 `nxtkb888`。
