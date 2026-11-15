---
title: "Ferris Sweep User Guide"
description: "Set up the NXTKB Ferris Sweep, learn its layered controls, and choose how to edit keymaps or update firmware."
---

NXTKB Ferris Sweep is a 34-key low-profile split keyboard with USB, Bluetooth, and ZMK Studio support. It uses thumb layer keys to bring numbers, navigation, symbols, and function controls into a compact layout.

See the [product page](/products/ferris-sweep/) for the keyboard gallery, Kailh Choc V1 switch options, colors, and optional magnetic stand kit.

## First Setup

1. Turn on both halves and connect the left/main half to your computer with a USB data cable.
2. Open [Keyboard & Mouse Test](../keymap/input-tester/) and check keys on both halves.
3. Follow [Connect to Your Device](../connect/) to pair Bluetooth profiles or switch outputs.
4. Learn the [Ferris Sweep default keymap](../keymap/ferris-sweep-keymap/).

## Layers and Keymap Changes

- Hold the right thumb `Tab` layer key for numbers and navigation.
- Hold the left thumb `Tab` layer key for symbols.
- Hold both for the function layer, including Bluetooth profile selection, output switching, Studio unlock, and entry to the Codex layer.
- The mouse layer provides pointer, wheel, and mouse-button controls through keys. Full bindings and the Codex layer are shown in the [keymap guide](../keymap/ferris-sweep-keymap/).

Use [ZMK Studio](https://zmk.studio/) for everyday keymap edits without rebuilding firmware. To change firmware features or maintain a source configuration, fork the [configuration repository](https://github.com/nxtkb/zmk-config-4-ferris-sweep) and follow [Update Keymaps](../keymap/how-to-update-keymaps/).

The [configuration guide](../../firmware/ferris-sweep-configuration/) explains which files control Bluetooth, battery reporting, mouse keys, and other firmware behavior. Firmware files and shields use the name `cradio` for this keyboard.

## Codex / ChatGPT Controls

The default configuration builds USB and Bluetooth Codex controls into the left/main half; the right half uses ordinary peripheral firmware. Enter `CODEX` from the function layer to switch Agents and use the command keys.

A display is not required. Controls follow the selected USB output or Bluetooth profile. See the [Codex usage guide](/blog/codex-micro-chatgpt-protocol/) for the workflow and the [keymap](../keymap/ferris-sweep-keymap/#codex) for bindings. Desktop compatibility is experimental and depends on the application's device-discovery behavior.

## Firmware Updates

Download prebuilt firmware from [Ferris Sweep Releases](https://github.com/nxtkb/zmk-config-4-ferris-sweep/releases), or build your fork using [GitHub Actions](https://github.com/nxtkb/zmk-config-4-ferris-sweep/actions/workflows/build.yml).

| Half | Firmware name contains |
| :--- | :--- |
| Left/main | `cradio_left` or `left` |
| Right | `cradio_right` or `right` |

Filenames can include board and build suffixes. Select firmware from the Ferris Sweep repository, then follow the [flashing guide](../../firmware/how-to-flash-a-firmware/).

Double-tap the reset button to enter the bootloader. If the button is unavailable, the keymap's `Boot` binding or two `RST`–`GND` shorts can also be used; see the flashing guide before opening the keyboard.

Key-binding changes usually require updating only the left half. Changes to shared configuration or split behavior can require both halves. Use reset firmware only when you intend to clear saved settings, such as pairing information.

When first enabling Codex Bluetooth support, forget the old host pairing, clear the matching ZMK Bluetooth profile, and pair again to refresh the cached HID report map.

## More Help

- [Build your own firmware](../../firmware/build-your-own-firmware/) for the source and build workflow.
- [Keyboard & Mouse Test](../keymap/input-tester/) for input diagnostics.
- [Product page](/products/ferris-sweep/) for switches, colors, accessories, and purchasing; support is available on Discord `@lilin0522` and WeChat `nxtkb888`.
