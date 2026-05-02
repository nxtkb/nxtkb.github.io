---
title: "Ferris Sweep Configuration Files"
description: "Where to change detailed Ferris Sweep firmware settings that are not handled by ZMK Studio."
---

Ferris Sweep has a simpler configuration layout than Sweep Pro. Most user-facing changes live in `config/cradio.keymap` and `config/cradio.conf`.

Use [ZMK Studio](/docs/setup/keymap/how-to-update-keymaps/) for live keymap edits when possible. Use this page when the setting needs a source-file change and a new firmware build.

## File Map

| File | What it controls | Usually flash |
| :--- | :--- | :--- |
| `config/cradio.keymap` | Layers, key bindings, home-row modifiers, conditional tri-layer, mouse layer, soft-off wake behavior, battery report behavior wiring, pointer movement keys, and scroll keys. | Usually left/main half; flash right too if you changed split or right-side behavior. |
| `config/cradio.conf` | Bluetooth, USB, battery reporting, idle/sleep behavior, pointing support, ZMK Studio, behavior queue size, and keyboard name. | Both halves that use this shared config. |
| `config/behaviors/character_map.dtsi` | Character map used by text/report style behaviors. | Left/main half if changed. |
| `config/behaviors/report.dtsi` | Battery/report behavior used by the keymap. | Left/main half if changed. |
| `config/behaviors/send_string.dtsi` | Helper macro for defining send-string behaviors. | Left/main half if changed and used by your keymap. |
| `build.yaml` | GitHub Actions build matrix for `cradio_left`, `cradio_right`, and `settings_reset`. | No direct flashing; it controls which UF2 files Actions builds. |

## Common Detailed Adjustments

| Goal | Change here | Notes |
| :--- | :--- | :--- |
| Change keys or layers | `config/cradio.keymap` | Re-render the Ferris Sweep keymap diagrams after changing public defaults. |
| Change home-row modifier timing | `ht` behavior in `config/cradio.keymap` | Current timing is `tapping-term-ms = <200>` and `quick-tap-ms = <150>`. |
| Change the tri-layer rule | `conditional_layers` in `config/cradio.keymap` | The current function layer turns on when both right and left layers are active. |
| Change mouse layer keys | `mouse` layer in `config/cradio.keymap` | This controls `MB4`, `MB5`, `MCLK`, movement keys, and scroll keys. |
| Tune key-based pointer movement or scrolling | `mmv` and `msc` in `config/cradio.keymap` | These are firmware behavior settings for movement and scroll keys, not an OS setting. |
| Change Bluetooth slots or pairing capacity | `CONFIG_BT_MAX_CONN` and `CONFIG_BT_MAX_PAIRED` in `config/cradio.conf` | Current value is 5. |
| Change battery reporting | `CONFIG_ZMK_BATTERY_REPORTING*` and `CONFIG_ZMK_BATTERY_REPORT_INTERVAL` in `config/cradio.conf` | Current interval is 180 seconds. |
| Change sleep behavior | `CONFIG_ZMK_IDLE_TIMEOUT`, `CONFIG_ZMK_SLEEP`, and `CONFIG_ZMK_IDLE_SLEEP_TIMEOUT` in `config/cradio.conf` | Current sleep timeout is one hour. |
| Change keyboard Bluetooth name | `CONFIG_ZMK_KEYBOARD_NAME` in `config/cradio.conf` | Keep it 16 characters or shorter. |
| Change build artifacts | `build.yaml` | The default Actions matrix builds `cradio_left`, `cradio_right`, and `settings_reset`. |

## Build Targets

Ferris Sweep uses one left firmware and one right firmware:

| Firmware | Shield | Use |
| :--- | :--- | :--- |
| `cradio_left` | `cradio_left` | Main left half, with ZMK Studio USB RPC in the default build matrix. |
| `cradio_right` | `cradio_right` | Right half. |
| `settings_reset` | `settings_reset` | Clears Bluetooth pairing and stored ZMK settings. |

The default `build.yaml` matrix is:

```yaml
include:
  - board: nice_nano//zmk
    shield: cradio_left
    snippet: studio-rpc-usb-uart
  - board: nice_nano//zmk
    shield: cradio_right
  - board: nice_nano//zmk
    shield: settings_reset
```

## Rebuild Guidance

- If you changed only live keymap content through ZMK Studio, you usually do not need to rebuild firmware.
- If you changed `config/cradio.keymap`, rebuild the left/main firmware at minimum.
- If you changed shared options in `config/cradio.conf`, rebuild both halves.
- If you changed `build.yaml`, run the GitHub Actions build again and download the newly generated UF2 artifacts.

See [Build your own firmware](../build-your-own-firmware/) for the exact GitHub Actions and local build commands.
