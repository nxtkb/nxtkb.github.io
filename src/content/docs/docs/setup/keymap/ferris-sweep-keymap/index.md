---
title: "Ferris Sweep Keymap"
---

## Introduction

The keymap images below are exported from [keymap-drawer](https://keymap-drawer.streamlit.app/?zmk_url=https%3A%2F%2Fgithub.com%2Fnxtkb%2Fzmk-config-4-ferris-sweep%2Fblob%2Fmain%2Fconfig%2Fcradio.keymap), and the latest keymap can also be viewed there.

The source code for this keymap is available at [nxtkb/zmk-config-4-ferris-sweep](https://github.com/nxtkb/zmk-config-4-ferris-sweep), which provides the complete configuration for the NXTKB Ferris Sweep keyboard.

## Complete Keymap

<a class="keymap-overview" href="#ferris-sweep-keymap-lightbox" aria-label="Open complete keymap">
  <img src="/keymaps/ferris-sweep/ferris_sweep_keymap.svg" alt="complete keymap" />
</a>

<div id="ferris-sweep-keymap-lightbox" class="keymap-lightbox" aria-label="Complete keymap preview">
  <a class="keymap-lightbox-backdrop" href="#complete-keymap" aria-label="Close preview"></a>
  <figure>
    <a class="keymap-lightbox-close" href="#complete-keymap" aria-label="Close preview">&times;</a>
    <img src="/keymaps/ferris-sweep/ferris_sweep_keymap.svg" alt="complete keymap" />
  </figure>
</div>

## Keymap Layers

### Characters (Default/Windows Layer)

- The default layer and Windows layer are where you type characters.
- Both layers place `CTRL`, `OPTION (ALT)`, and `COMMAND (WINDOWS)` on the same keys as the home-row characters under your ring, middle, and index fingers. Hold the key for the modifier, or tap it for the character.

![default layer](/keymaps/ferris-sweep/ferris_sweep_keymap_default_layer.svg)

![windows layer](/keymaps/ferris-sweep/ferris_sweep_keymap_win_layer.svg)

### Numbers and Navigation

- Hold the right `TAB` layer key to enter the numbers and navigation layer.
- Release the right `TAB` key to return to the default or Windows layer.
- Special keys:
  - `Boot`: make the right half of the split keyboard enter bootloader mode so you can copy new firmware to it.

![numbers and navigation layer](/keymaps/ferris-sweep/ferris_sweep_keymap_num_and_nav_layer.svg)

### Symbols (Punctuations)

- Hold the left `TAB` layer key to enter the symbols layer.
- Release the left `TAB` key to return to the default or Windows layer.
- Special keys:
  - `Report`: type out battery information.
  - `Boot`: make the left half of the split keyboard enter bootloader mode so you can copy new firmware to it.
  - `MOUSE`: switch to the mouse layer.

![symbols layer](/keymaps/ferris-sweep/ferris_sweep_keymap_symbol_layer.svg)

### Functions

- Hold both `TAB` layer keys to enter the function layer.
  - `BT 0` to `BT 4`: select the Bluetooth profile you are connecting or want to connect with.
  - `BT CLR`: clear the connection for the selected profile, then reconnect that profile with your device.
  - `OUT TOG`: toggle between USB and Bluetooth output, so you can connect up to 6 devices: 5 over Bluetooth and 1 over USB.
  - `WIN`: toggle the Windows layer, so you can switch between the default and Windows layers.
  - `Studio`: unlock the keyboard so you can use [ZMK Studio](https://zmk.dev/docs/features/studio#keymap-changes) to set up keys.
  - `Off`: enter soft-off mode. This is similar to deep sleep, but the keyboard can only wake from the configured wake key, currently the left thumb `LSHIFT` key.
- Release the `TAB` layer keys to return to the default or Windows layer.

![func layer](/keymaps/ferris-sweep/ferris_sweep_keymap_func_layer.svg)

### Mouse

- Hold the left `TAB` layer key and press `SPACE` to toggle the mouse layer.
- Press `P` or `Q` to leave the mouse layer.
- `MB4` is browser back and `MB5` is browser forward.

![mouse layer](/keymaps/ferris-sweep/ferris_sweep_keymap_mouse_layer.svg)

## References

- [Sweep Repo](https://github.com/davidphilipbarr/Sweep)
- [keymap I initially copied](https://www.youtube.com/watch?v=VShLPvF693k)
