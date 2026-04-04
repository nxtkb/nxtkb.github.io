---
title: "Ferris Sweep Keymap"
weight: 2
---

## Introduction

The keymap images below are exported from [keymap drawer](https://keymap-drawer.streamlit.app/?zmk_url=https%3A%2F%2Fgithub.com%2Fnxtkb%2Fzmk-config-4-ferris-sweep%2Fblob%2Fmain%2Fconfig%2Fcradio.keymap), the latest keymap can also be viewed there.

The source code for this keymap is available at [nxtkb/zmk-config-4-ferris-sweep](https://github.com/nxtkb/zmk-config-4-ferris-sweep), which provides the complete configuration for the NXTKB Ferris Sweep keyboard.

## Keymap Layers

### Characters (Default/Windows Layer)

- The default layer and windows layer is where you would type characters.
- they both have modifier keys `CTRL`, `OPTION (ALT)`, `COMMAND (WINDOWS)` sharing same position with character keys on your ring finger, middle finger and pointing finger on both hands. Hold the key to trigger the modifier, or tap the key to type in character.

![default layer](/keymaps/ferris-sweep/ferris_sweep_keymap_default_layer.svg)

![windows layer](/keymaps/ferris-sweep/ferris_sweep_keymap_win_layer.svg)

### Numbers and Navigation

- Hold the right tab to enter right layer, then you can type in numbers or do some navigation.
- Release your right tab to return to default or windows layer.
- Special keys:
  - `&bootloader`: make right part of the split keyboard enter bootloader, then you can copy in your new firmware.

![numbers and navigation layer](/keymaps/ferris-sweep/ferris_sweep_keymap_num_and_nav_layer.svg)

### Symbols (Punctuations)

- Hold the left tab to enter left layer, then you can type in punctuations.
- Release your left tab to return to default or windows layer.
- Special keys:
  - `&default_report`: type out battery information
  - `&bootloader`: make left part of the split keyboard enter bootloader, then you can copy in your new firmware.
  - `MOUSE toggle`: switch to mouse layer

![symbols layer](/keymaps/ferris-sweep/ferris_sweep_keymap_symbol_layer.svg)

### Functions

- Hold both the left and right tab to enter tri layer, then you can type function keys.
  - `BT 0` to `BT 4`: select position of bluetooth device you are connecting or want to connect with.
  - `BT CLR`: clear the connection on selected position, then you can reconnect to this position with your device.
  - `OUT TOG`: toggle between usb and bluetooth connection, so you can connect up to 6 devices (5 with bluetooth, and 1 with usb)
  - `WIN toggle`: toggle windows layer, so you can switch between default and windows layer.
  - `&studio_unlock`: unlock keyboard so that you can use [zmk studio](https://zmk.dev/docs/features/studio#keymap-changes) to setup keys
  - `&soft_off`: enter soft off, like deep sleep which enters after an hour of inactivity, but soft off can only be woke up with wake up keys (set to left thumb key: `shift`)
- Release your tab keys to return to default or windows layer.

![func layer](/keymaps/ferris-sweep/ferris_sweep_keymap_func_layer.svg)

### Mouse

- hold left tab (to enter left layer), and press space key to enter mouse layer
- press `p` or `q` to quit mouse layer
- `MB4` is for going backward and `MB5` is for going forward

![mouse layer](/keymaps/ferris-sweep/ferris_sweep_keymap_mouse_layer.svg)

## References

- [Sweep Repo](https://github.com/davidphilipbarr/Sweep)
- [keymap I initially copied](https://www.youtube.com/watch?v=VShLPvF693k)
