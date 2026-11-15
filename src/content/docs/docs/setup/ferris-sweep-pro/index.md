---
title: "Ferris Sweep Pro User Guide"
description: "Choose your Sweep Pro hardware variant, connect the keyboard, use its controls, and find the matching firmware."
---

Ferris Sweep Pro is a 34-key low-profile split keyboard with USB-C, Bluetooth, two clickable encoders, and ZMK Studio keymap editing. The left e-ink display and right Cirque trackpad are optional hardware features.

See the [product page](/products/ferris-sweep-pro/) for product photos, switch choices, colors, and purchase options. This guide covers setup and everyday use.

## Hardware and Versions

| Version | Extra hardware | Left firmware | Right firmware |
| :--- | :--- | :--- | :--- |
| Basic | — | `sweep_left.uf2` | `sweep_right.uf2` |
| E-ink | Left e-ink display | `sweep_left_display.uf2` | `sweep_right.uf2` |
| Trackpad | Right Cirque trackpad | `sweep_left.uf2` | `sweep_right_trackpad.uf2` |
| Full / Flagship | E-ink display and trackpad | `sweep_left_display.uf2` | `sweep_right_trackpad.uf2` |

The versions share the same keymap. Choose the firmware pair that matches the hardware on each half.

| Component | Details |
| :--- | :--- |
| Layout | 34 keys with a stepped thumb cluster. |
| Connection | USB-C or Bluetooth; connect the left/main half to the host. |
| Encoders | Two rotary encoders, each with a press action. |
| Display option | 1.54-inch monochrome e-ink screen on the left half. |
| Trackpad option | 40 mm Cirque GlidePoint circular trackpad on the right half. |
| Battery | 2000 mAh per half, 4000 mAh total. |
| Keycaps | Low-profile PBT keycaps with dye-sublimated legends and front layer legends. |
| Accessories | Optional magnetic tenting stands; see the [accessory page](/products/magnetic-stand/). |

Switches, keycap colors, kits, and the photo gallery are on the [product page](/products/ferris-sweep-pro/). The [keycap page](/products/low-profile-keycaps/) has more detail about the custom 34-key set.

## First Setup

1. Turn on both halves and connect the left half to your computer with a USB data cable.
2. Open [Keyboard & Mouse Test](../keymap/input-tester/) and check input from both halves.
3. Read [Connect to Your Device](../connect/) to pair Bluetooth profiles or switch between USB and Bluetooth.
4. Learn the [default keymap and layers](../keymap/ferris-sweep-pro-keymap/).
5. If fitted, try the [trackpad gestures](../keymap/trackpad/) and read the [e-ink status indicators](../../firmware/sweep-pro-display/).

## Everyday Controls

- **Layers:** the thumb layer keys provide numbers, navigation, symbols, function controls, mouse controls, and Codex controls. The [keymap guide](../keymap/ferris-sweep-pro-keymap/) shows each binding.
- **Encoders:** on the character layers, the left encoder adjusts volume and the right adjusts screen brightness. On the mouse layer, they adjust pointer and scroll speed; pressing them resets the corresponding speed to `1.00x`.
- **Trackpad:** slide to move the pointer, tap to left-click, tap the lower-right area to right-click, and slide along the right edge to scroll. More gestures and speed controls are in [Use the Trackpad](../keymap/trackpad/).
- **Display:** check batteries, USB power for each half, the selected connection, split connection, and the active layer. The auxiliary row follows the layer to show Agent or trackpad status; see [E-Ink Display](../../firmware/sweep-pro-display/).
- **Live keymap edits:** use [ZMK Studio](https://zmk.studio/) for everyday changes without rebuilding firmware. See [Update Keymaps](../keymap/how-to-update-keymaps/) for the full workflow.
- **Reset button:** press once to restart that half. With USB connected, double-tap within 0.5 seconds to enter the `NICENANO` bootloader drive for flashing.

## Codex / ChatGPT Controls

Current release firmware includes USB and Bluetooth Codex controls on the left/main half. Enter the `CODEX` layer from `FUN` to select one of six Agents or use the command keys. Controls and displayed Agent state follow the currently selected USB output or Bluetooth profile.

See the [Codex usage guide](/blog/codex-micro-chatgpt-protocol/) and [Codex layer bindings](../keymap/ferris-sweep-pro-keymap/#codex). Desktop compatibility is experimental and depends on the application's device-discovery behavior.

## Firmware Updates

Download prebuilt UF2 files from [Sweep Pro Releases](https://github.com/nxtkb/Sweep-Pro/releases), then select the pair in the hardware table above. The [flashing guide](../../firmware/how-to-flash-a-firmware/) walks through entering the bootloader and copying each file.

When upgrading to firmware with split USB power reporting, update both halves from the same release. When first enabling Codex Bluetooth support, forget the old host pairing, clear the corresponding ZMK Bluetooth profile, and pair again to refresh the cached HID report map.

Use settings-reset firmware only when you intend to clear saved settings; it is not part of a normal update.

## Customization and Help

- [Configuration files](../../firmware/sweep-pro-configuration/) explain where to change encoders, trackpad behavior, display options, and firmware features.
- [Build your own firmware](../../firmware/build-your-own-firmware/) covers the fork-and-build workflow; the repository's [local build guide](https://github.com/nxtkb/Sweep-Pro/blob/main/docs/en/local-build.md) contains the version-matched commands and patches.
- [Product and support](/products/ferris-sweep-pro/#support): purchase links, Discord `@lilin0522`, and WeChat `nxtkb888`.
