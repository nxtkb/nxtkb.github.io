---
title: "如何更新键位映射"
---

有三种方法可以更新NXTKB键盘的键位映射。我们推荐**方法1**（fork并修改仓库）用于永久性更改，**方法3**（ZMK Studio）用于无需重新刷写固件的快速调整。

## 方法1: Fork并修改配置仓库（推荐用于永久性更改）

此方法涉及fork官方配置仓库，进行修改，然后刷写更新后的固件。

**步骤：**
1. fork相应的配置仓库：
   - Ferris Sweep Pro: [nxtkb/Sweep-Pro](https://github.com/nxtkb/Sweep-Pro/fork)
   - Ferris Sweep: [nxtkb/zmk-config-4-ferris-sweep](https://github.com/nxtkb/zmk-config-4-ferris-sweep/fork)
2. 修改仓库中的键位映射文件
3. GitHub Actions将自动编译固件
4. 将新固件刷写到您的键盘

> **注意**: 此方法在修改后需要重新刷写固件，但提供了对配置的完全控制，非常适合永久性的键位映射更改。有关刷写固件的详细说明，请参阅[如何刷写固件](../../firmware/how-to-flash-a-firmware/)。

## 方法2: ZMK Studio（推荐用于快速调整）

ZMK Studio允许您修改键位映射并直接存储在键盘上，无需重新刷写固件。

**步骤：**
1. 访问[ZMK Studio](https://zmk.studio/)
2. 通过蓝牙连接您的键盘
3. 进行所需的键位映射修改
4. 直接将更改保存到键盘的存储中

> **注意**: 此方法不需要重新刷写固件，非常适合快速调整、测试和临时配置。

## 方法3: 键盘编辑器与Fork仓库（替代方法）

此方法使用集成到fork仓库中的键盘编辑器，提供更流畅的工作流程。

**步骤：**
1. fork相应的配置仓库：
   - Ferris Sweep Pro: [nxtkb/Sweep-Pro](https://github.com/nxtkb/Sweep-Pro/fork)
   - Ferris Sweep: [nxtkb/zmk-config-4-ferris-sweep](https://github.com/nxtkb/zmk-config-4-ferris-sweep/fork)
2. 打开[键盘编辑器](https://nickcoutsos.github.io/keymap-editor/)
3. 在键盘编辑器中，连接到您的fork仓库：
   - 点击"GitHub" → "连接到GitHub"
   - 授权编辑器访问您的fork仓库
   - 选择您的fork仓库和相应的键位映射文件
4. 在编辑器界面中进行所需的键位映射修改
5. 保存更改 - 编辑器将自动：
   - 将更改提交到您的fork仓库
   - 将提交推送到GitHub
   - 触发GitHub Actions工作流以构建新固件
6. 构建完成后，从GitHub Actions工件下载固件文件
7. 将新固件刷写到您的键盘

> **注意**: 此方法在修改键位映射后仍需要重新刷写固件，并且有一些限制：
> - 键盘编辑器可能无法识别所有ZMK特定功能、自定义宏或高级按键行为
> - 在编辑过程中，一些现有的键定义可能会丢失或被错误解释
> - 对于复杂配置，方法1（直接仓库编辑）更可靠
> - 有关刷写固件的详细说明，请参阅[如何刷写固件](../../firmware/how-to-flash-a-firmware/)。