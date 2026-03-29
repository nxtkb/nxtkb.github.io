---
title: "ZMK Keymaps"
weight: 3
---

NXTKB keyboards use [Zephyr-based Modular Keyboard (ZMK)](https://zmk.dev) firmware, which provides a flexible and powerful keymap system.

## What is a ZMK Keymap?

A ZMK keymap is a configuration that defines how each physical key on your keyboard behaves. Unlike traditional firmware where key functions are hardcoded, ZMK allows for:

- **Layer-based organization**: Multiple layers (default, function, navigation, etc.) that can be switched between
- **Tap-Hold behavior**: Keys can perform different actions when tapped vs. held (e.g., tap for letter, hold for modifier)
- **Modular design**: Keymaps are defined in code files that can be customized and compiled

Keymaps in ZMK are written in a declarative format that maps physical key positions to specific behaviors and functions.

## Our Keymap Implementation

NXTKB uses custom ZMK keymaps optimized for our keyboard designs. Each keyboard model has its own tailored keymap that takes advantage of the unique layout and features of that specific hardware.

### Key Features of Our Keymaps:
- **Efficient modifier placement**: Modifiers are positioned for ergonomic access
- **Layer switching**: Intuitive layer transitions using thumb keys or other convenient positions
- **Bluetooth connectivity**: Built-in support for multiple device connections
- **Advanced functionality**: Mouse control, macro support, and customization options

## Specific Keyboard Keymaps

For detailed information about the keymap for your specific NXTKB keyboard, please refer to the dedicated documentation:

- [Ferris Sweep Pro Keymap](../../keymaps/ferris-sweep-pro-keymap/)
- [Ferris Sweep Keymap](../../keymaps/ferris-sweep-keymap/)

These pages contain visual representations of each layer and detailed explanations of the key functions.

## Customization

If you want to customize your keymap further, ZMK provides tools like [ZMK Studio](https://zmk.studio) for visual editing, or you can modify the source code directly in our GitHub repositories.

For more information about ZMK keymaps and customization options, see the [official ZMK documentation](https://zmk.dev/docs/).
