---
title: "入门指南"
---

这页是新键盘第一次上手的检查清单。目标很简单：开机、确认能输入、按你的使用方式连接，然后理解默认层。

## 第一次上手

1. 打开左右两半键盘电源。
2. 先用 USB-C 连接左手半边。
3. 打开[键鼠测试](keymap/input-tester/)，按几个键确认有输入。
4. 如果需要无线使用，再进行蓝牙配对。
5. 查看对应型号的默认键位。
6. 如果你的 Sweep Pro 带触控板或墨水屏，再查看对应功能说明。

## 选择你的键盘

| 键盘 | 先看这里 | 额外说明 |
| :--- | :--- | :--- |
| Ferris Sweep Pro | [Ferris Sweep Pro 键位](keymap/ferris-sweep-pro-keymap/) | [触控板](keymap/trackpad/)、[墨水屏](../firmware/sweep-pro-display/) |
| Ferris Sweep | [Ferris Sweep 键位](keymap/ferris-sweep-keymap/) | [Ferris Sweep 配置文件](../firmware/ferris-sweep-configuration/) |

## 常用下一步

- [连接到设备](connect/)：说明 USB、蓝牙配对和多设备切换。
- [键鼠测试](keymap/input-tester/)：在浏览器中验证按键、鼠标键、滚轮事件和触控板行为。
- [键位概览](keymap/)：查看默认层图和改键说明。
- [如何刷写固件](../firmware/how-to-flash-a-firmware/)：需要更新固件时，说明如何刷 UF2。

## 如果遇到问题

- 先测试 USB。它是确认键盘能正常发送按键事件的最短路径。
- 如果蓝牙配对失败，清除当前蓝牙槽位后重新配对。
- 如果只有半边有反应，确认左右两半都已打开电源。
- 如果触控板或滚轮事件不符合预期，先用[键鼠测试](keymap/input-tester/)观察事件，再看[触控板说明](keymap/trackpad/)。
