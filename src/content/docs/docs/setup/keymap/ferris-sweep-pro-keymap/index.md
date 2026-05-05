---
title: "Ferris Sweep Pro Keymap"
---

## Introduction

The keymap images below are exported from [keymap drawer](https://keymap-drawer.streamlit.app/?zmk_url=https%3A%2F%2Fgithub.com%2Fnxtkb%2FSweep-Pro%2Fblob%2Fmain%2Fconfig%2Fsweep.keymap), the latest keymap can also be viewed there.

The source code for this keymap is available at [nxtkb/Sweep-Pro](https://github.com/nxtkb/Sweep-Pro), which provides the complete configuration for the NXTKB Ferris Sweep Pro keyboard.

> **Note**: Here we need to set the layout override with this file: [sweep.dtsi](https://github.com/nxtkb/Sweep-Pro/blob/main/boards/shields/sweep/sweep.dtsi):
> ![keymap drawer layout override](/docs/ferris-sweep-pro-keymap/keymap-drawer-layout-override.png)

## Complete Keymap

<a class="keymap-overview" href="#ferris-sweep-pro-keymap-lightbox" aria-label="Open complete keymap">
  <img src="/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap.svg" alt="complete keymap" />
</a>

<div id="ferris-sweep-pro-keymap-lightbox" class="keymap-lightbox" aria-label="Complete keymap preview">
  <a class="keymap-lightbox-backdrop" href="#complete-keymap" aria-label="Close preview"></a>
  <figure>
    <a class="keymap-lightbox-close" href="#complete-keymap" aria-label="Close preview">&times;</a>
    <img src="/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap.svg" alt="complete keymap" />
  </figure>
</div>

## Keymap Layers

### Characters (Default/Windows Layer)

- The default layer and Windows layer are the character layers.
- Both layers use home-row modifiers: `CTRL`, `OPTION (ALT)`, and `COMMAND (WINDOWS)` share the same positions as character keys on the ring, middle, and index fingers. Hold the key for the modifier, or tap it for the character.
- Hold `Z` and move on the trackpad to scroll in any direction. For right-edge scrolling, hold `Z` to convert the edge gesture from vertical scrolling to horizontal scrolling at the firmware level.
- `X` is a normal character key on these layers.
- Mouse combos use a 25 ms timeout: `E` + `R` for right click, `D` + `F` for left click, `C` + `V` for middle click, `F` + `G` for browser back, and `R` + `T` for browser forward.
- left encoder:
  - rotation: adjust volume
  - click: toggle mute
- right encoder:
  - rotation: adjust brightness
  - click: unlock zmk studio

![default layer](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_default_layer.svg)

![windows layer](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_win_layer.svg)

### Numbers and Navigation

- Hold the right thumb `Tab` to enter the numbers and navigation layer.
- Release the right thumb `Tab` to return to the default or Windows layer.

![numbers and navigation layer](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_num_and_nav_layer.svg)

### Symbols (Punctuations)

- Hold the left thumb `Tab` to enter the symbols layer.
- Release the left thumb `Tab` to return to the default or Windows layer.
- Special keys:
  - `Report`: type out battery information
  - `MOUSE toggle`: switch to mouse layer

![symbols layer](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_symbol_layer.svg)

### Functions

- Hold both thumb `Tab` keys to enter the function layer.
  - `BT 0` to `BT 4`: select the Bluetooth profile to connect.
  - `BT CLR`: clear the selected Bluetooth profile so it can be paired again.
  - `OUT TOG`: toggle between USB and Bluetooth output.
  - `WIN toggle`: switch between the default and Windows layers.
  - `Studio`: unlock the keyboard for [ZMK Studio](https://zmk.dev/docs/features/studio#keymap-changes).
  - `Off`: enter soft off. The keyboard can only wake from configured wake-up keys.
- Release the thumb `Tab` keys to return to the default or Windows layer.

![func layer](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_func_layer.svg)

### Mouse

- Hold the left thumb `Tab` and press `Space` to toggle the mouse layer.
- Press `Q` or `P` to leave the mouse layer.
- `M4` and `M5` are browser back and forward. `F` + `G` and `R` + `T` provide the same back/forward buttons as combos.
- The bottom-left keys adjust pointer and scroll speed. `Mode` toggles the Cirque trackpad mode.
- Sweep Pro boots the Cirque trackpad in absolute mode by default; `Mode` switches between absolute and relative mode at runtime.

![mouse layer](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_mouse_layer.svg)
