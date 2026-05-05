---
title: "Sweep Pro E-Ink Display"
description: "How the optional Ferris Sweep Pro e-ink display is implemented, what it shows, and how to build firmware for it."
---

Ferris Sweep Pro can use a 152 x 152 monochrome e-ink display on the left half as a persistent keyboard status screen. The display is not a separate input feature or animation surface: it shows the current keyboard state and keeps that information visible while the keyboard is idle.

The implementation is split between the keyboard repository and the display module:

- `sweep_left_display_hw` in the Sweep-Pro repository defines the SSD1680 e-ink hardware, SPI/MIPI DBI wiring, display size, rotation, and waveform settings.
- `sweep_display` in `zmk-vfx-sweep-pro-display` provides the custom ZMK status screen UI, LVGL layout, fonts, logo, and widgets.

This split is intentional. The display module does not define the physical display node, so it can be composed with the keyboard shield without conflicting with the keyboard's own hardware overlay.

## Screen Layout

The `sweep_display` shield selects ZMK's custom display status screen and renders a one-bit LVGL layout tuned for e-ink. The default Sweep Pro screen contains these areas:

| Area | Widget | What it means |
| :--- | :--- | :--- |
| Top left | Output status | USB and Bluetooth output state. The underline marks the selected output. The Bluetooth marker shows the active profile number, `-` for an open/unpaired profile, a check mark for connected, or a close mark for bonded but disconnected. |
| Top right | Battery status | Central-side battery percentage and, when available, right-side peripheral battery percentage. A charge icon is added to the central battery when USB power is present. |
| Center | Logo | NXTKB logo image plus the `NXTkb` wordmark. |
| Below logo | Split status | Left/right keyboard symbols. The right side is shown as connected or disconnected based on the split peripheral transport state. |
| Keyboard name | Keyboard name | The value of `CONFIG_ZMK_KEYBOARD_NAME`. |
| Trackpad row | Trackpad status | Runtime Cirque mode and pointing speeds, for example `Trackpad: A P2 S1`. `A` means absolute mode, `R` means relative mode, `P` is pointer speed index, and `S` is scroll speed index. Sweep Pro boots the trackpad in absolute mode by default. |
| Bottom left | Layer status | The highest active layer. If a layer has `display-name`, that name is shown; otherwise the layer index is shown. Long names are clipped to 18 characters. |
| Bottom right | HID indicators | Active modifier and Caps Lock state. The widget tracks Alt, Ctrl, Command/GUI, Shift, and Caps Lock, and marks active entries with an underline. |

The module also includes an optional WPM widget (`CUSTOM_WIDGET_WPM_STATUS`), but Sweep Pro's default display configuration does not enable it.

## State Sources

The screen is event-driven. Each widget subscribes to the relevant ZMK events and updates only the matching area:

| State | Source |
| :--- | :--- |
| Output | `zmk_endpoint_changed`, USB connection changes, and BLE active profile changes. |
| Battery | Local battery state, USB power state, split peripheral battery reports, and split peripheral connection changes. |
| Split connection | Split peripheral transport state, with a short periodic refresh so stale connection state is corrected. |
| Layer | `zmk_layer_state_changed` and ZMK keymap layer names. |
| Trackpad | `zmk_trackpad_status_changed`, Cirque mode, pointer speed index, and scroll speed index from the trackpad/pointing modules. The row follows runtime mode changes instead of assuming the boot-time mode. |
| HID indicators | HID indicator changes and keycode modifier state changes. |

Because `CONFIG_ZMK_DISPLAY_BLANK_ON_IDLE=n` is set by the display shield, the e-ink panel keeps showing the last rendered state instead of blanking when the keyboard idles.

## Firmware Build

Only the left half has the e-ink display. A display build needs both the keyboard hardware shield and the UI shield:

```sh
-DSHIELD="sweep_left sweep_left_display_hw sweep_display"
```

Local builds also need `zmk-vfx-sweep-pro-display` in `ZMK_EXTRA_MODULES`. For the standard Sweep Pro workspace, the display-capable left-side artifact is named `sweep_left_display`.

| Hardware variant | Left UF2 | Right UF2 |
| :--- | :--- | :--- |
| E-ink | `sweep_left_display` | `sweep_right` |
| Full | `sweep_left_display` | `sweep_right_trackpad` |

Basic and trackpad-only versions should flash `sweep_left`, not `sweep_left_display`.

The display shield enables the pieces the status screen needs, including ZMK display support, MIPI DBI SPI, SSD16XX, LVGL, one-bit color depth, mono theme, image support, flex layout, a dedicated display work queue, and HID indicators. Sweep Pro's display hardware config also enables `CUSTOM_WIDGET_TRACKPAD_STATUS`, so the trackpad row is built into the normal display firmware.

## Customization

Most visible text follows existing keyboard configuration:

- Layer labels come from `display-name` in `config/sweep.keymap`.
- The keyboard name comes from `CONFIG_ZMK_KEYBOARD_NAME`.
- Trackpad mode, pointer speed, and scroll speed follow the runtime Cirque/pointing-speed state.
- Battery and output status follow ZMK's normal USB, BLE, battery, and split events.

Hardware-level display settings, such as the SSD1680 node, 152 x 152 size, rotation, GPIOs, and partial refresh waveform, live in the Sweep-Pro keyboard shield. Layout, logo, fonts, and widget selection live in the `zmk-vfx-sweep-pro-display` module.

In normal keymap customization you should not need to edit the display module. Edit it only if you want to change the screen layout, replace the logo, add/remove widgets, or change the LVGL styling.

## Troubleshooting

- If the screen stays blank, confirm the left half was flashed with `sweep_left_display`, not `sweep_left`.
- If a local build cannot find `sweep_display`, confirm `zmk-vfx-sweep-pro-display` is included in `ZMK_EXTRA_MODULES`.
- If the display hardware node conflicts during build, confirm the hardware overlay is only coming from `sweep_left_display_hw`; `sweep_display` should provide UI only.
- If the trackpad row is missing, confirm the build includes the Cirque input module and `CONFIG_CUSTOM_WIDGET_TRACKPAD_STATUS=y`.
- If the right-side battery or split connection state is missing, power on the right half and reconnect it to the left half.
- If the layer text is wrong, check the `display-name` values in `config/sweep.keymap`.

For complete build commands, see [Build your own firmware](../build-your-own-firmware/). For configuration file locations, see [Sweep Pro Configuration Files](../sweep-pro-configuration/).
