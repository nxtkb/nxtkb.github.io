---
title: "Sweep Pro Configuration Files"
description: "Where to change detailed Ferris Sweep Pro firmware settings that are not handled by ZMK Studio."
---

Ferris Sweep Pro has two kinds of customization:

- **Key-level changes** such as replacing a key, changing a layer key, or editing most tap/hold bindings live in `config/sweep.keymap`.
- **Firmware configuration details** such as trackpad support, Bluetooth options, battery reporting, display support, and build targets live in `config/*.conf`, `config/sweep.keymap`, and `build.yaml`. These changes require rebuilding and flashing firmware.

Use [ZMK Studio](/docs/setup/keymap/how-to-update-keymaps/) for live keymap edits when possible. Use this page when the setting is not exposed in Studio.

## File Map

| File | What it controls | Usually flash |
| :--- | :--- | :--- |
| `config/sweep.keymap` | Layers, key bindings, encoder bindings, mouse layer bindings, pointer processors, `Z` drag-scroll behavior, `X` left-click hold, and `Mode` switching. | Usually left/main half; flash right too if you changed right-side split behavior or want both halves rebuilt together. |
| `config/sweep.conf` | Shared ZMK options: USB, Bluetooth, mouse support, ZMK Studio, battery reporting, soft-off, behavior queue size, stack sizes, and sleep policy. | Both halves that use the shared config. |
| `config/sweep_left.conf` | Left central pointing behavior, currently smooth scrolling. | Left half. |
| `config/sweep_left_display_hw.conf` | Display, LVGL, SSD16XX, and e-ink rendering options. | Left display firmware. |
| `config/sweep_right.conf` | Right half role configuration. | Right half. |
| `config/sweep_right_trackpad.conf` | I2C and input stack options needed by the right-hand trackpad. | Right trackpad firmware. |
| `build.yaml` | GitHub Actions build matrix and artifact names for each hardware variant. | No direct flashing; it controls which UF2 files Actions builds. |

## Common Detailed Adjustments

| Goal | Change here | Notes |
| :--- | :--- | :--- |
| Change key bindings or layers | `config/sweep.keymap` | Re-render the keymap diagrams after changing public defaults. |
| Change encoder actions | `sensor-bindings` in each layer of `config/sweep.keymap` | The current defaults are left encoder volume and right encoder brightness. |
| Tune pointer or scroll speed curves | `pointer_processor` and `drag_scroll_processor` in `config/sweep.keymap` | The mouse layer `Ptr` and `Scroll` keys adjust runtime speed; these processors define the baseline behavior. |
| Change `Z` hold-to-scroll behavior | `ds_z` and `drag_scroll_processor` in `config/sweep.keymap` | `Z` toggles drag-scroll while held. The current drag-scroll processor supports conditional horizontal wheel behavior when enabled. |
| Change Bluetooth or battery behavior | `config/sweep.conf` | Includes battery reporting interval, split battery proxy options, Bluetooth 2M PHY setting, TX power, and sleep policy. |
| Change display firmware capabilities | `config/sweep_left_display_hw.conf` | Display, LVGL, display thread, font, and memory-pool build options live here. |
| Change right-trackpad firmware capabilities | `config/sweep_right_trackpad.conf` | I2C and input thread stack options live here; daily trackpad behavior is covered in [Use the Trackpad](/docs/setup/keymap/trackpad/). |
| Change which firmware artifacts GitHub Actions builds | `build.yaml` | Keep artifact names clear: `sweep_left`, `sweep_left_display`, `sweep_right`, `sweep_right_trackpad`. |

## Hardware Variants

The same keymap supports four Sweep Pro hardware variants. Pick the matching UF2 pair after building:

| Variant | Left UF2 | Right UF2 |
| :--- | :--- | :--- |
| Basic | `sweep_left` | `sweep_right` |
| E-ink | `sweep_left_display` | `sweep_right` |
| Trackpad | `sweep_left` | `sweep_right_trackpad` |
| Full | `sweep_left_display` | `sweep_right_trackpad` |

In `build.yaml`, those variants are produced from these shield combinations:

```yaml
- shield: sweep_left
  artifact-name: sweep_left
- shield: sweep_left sweep_left_display_hw sweep_display
  artifact-name: sweep_left_display
- shield: sweep_right
  artifact-name: sweep_right
- shield: sweep_right sweep_right_trackpad
  artifact-name: sweep_right_trackpad
```

## Rebuild Guidance

- If you changed only live keymap content through ZMK Studio, you usually do not need to rebuild firmware.
- If you changed `config/sweep.keymap`, rebuild the left/main firmware at minimum.
- If you changed right-trackpad configuration, rebuild and flash `sweep_right_trackpad`.
- If you changed display configuration, rebuild and flash `sweep_left_display`.
- If you changed shared `.conf`, module wiring, or shield composition, do a clean rebuild with `-p`.

See [Build your own firmware](../build-your-own-firmware/) for the exact GitHub Actions and local build commands.
