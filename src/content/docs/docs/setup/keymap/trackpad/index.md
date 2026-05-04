---
title: "Use the Trackpad"
---

Ferris Sweep Pro versions with the Cirque trackpad can handle pointer movement, clicks, scrolling, and basic drag operations without moving your hand to a separate mouse.

![Ferris Sweep Pro trackpad](/products/ferris-sweep-pro/trackpad.png)

## Basic Gestures

| Action | How to use it |
| :--- | :--- |
| Move cursor | Slide one finger on the trackpad. |
| Left click | Tap once anywhere on the trackpad. |
| Double click | Tap twice quickly. |
| Right click | Tap the lower-right area of the trackpad. |
| Vertical edge scroll | Slide up or down along the right edge of the trackpad. |
| Hold-to-scroll | Hold `Z`, then move on the trackpad. Pointer movement becomes wheel movement while held, so horizontal finger movement sends horizontal wheel events and vertical finger movement sends vertical wheel events. |
| Horizontal edge scroll | Hold `Z`, then use the right-edge scroll gesture. Sweep Pro converts the native right-edge wheel event into a horizontal wheel event while `Z` is held. |
| App-level horizontal scroll | Some desktop apps also treat `Shift` + vertical wheel as horizontal scroll. This is handled by the app or operating system, not by the trackpad firmware. |
| Mouse click combos | Press `D` + `F` for left click, `E` + `R` for right click, or `C` + `V` for middle click. These combos use a short 25 ms timeout so normal typing is less likely to trigger them by accident. |

`Z` still types a normal character when tapped, and only enables drag-scroll while held. `X` is a normal character key on the base character layers.

## Trackpad Modes

The current Sweep Pro firmware boots the Cirque controller in relative mode:

```text
data-mode = "relative";
```

The `Mode` key on the mouse layer runs `&crq_mode CIRQUE_MODE_TOGGLE`, which switches the Cirque controller between relative mode and absolute mode at runtime. Switch modes while your finger is off the trackpad for the cleanest transition.

| Mode | What it feels like | Sweep Pro behavior |
| :--- | :--- | :--- |
| Relative mode | The Cirque ASIC reports mouse-like relative packets. This is the boot default and the most mature path. | Supports pointer movement, tap buttons, native right-edge vertical scrolling, GlideExtend, hold-to-scroll with `Z`, runtime pointer speed, and runtime scroll speed. |
| Absolute mode | The driver reads absolute finger coordinates, then converts them back into `REL_X/Y` pointer movement. This gives the firmware more control over gesture thresholds. | Supports software tap detection, lower-right right-click zone, tap-drag, right-edge vertical scroll, edge auto-pan, hold-to-scroll with `Z`, runtime pointer speed, and runtime scroll speed. |

Use relative mode when you want the stable mouse-like default behavior. Try absolute mode when you want the more tunable software gesture layer, especially tap-drag and edge auto-pan. If the pointer feel changes after pressing `Mode`, press `Mode` again to switch back.

## Mouse Layer

For pointer controls that are easier to use as keys, switch to the mouse layer:

1. Hold the left thumb `Tab` layer key.
2. Press `Space` to toggle the mouse layer.
3. Press `Q` or `P` to leave the mouse layer.

![Ferris Sweep Pro mouse layer](/keymaps/ferris-sweep-pro/ferris_sweep_pro_keymap_mouse_layer.svg)

On the mouse layer:

- `MB4` and `MB5` are browser back and forward.
- `MCLK`, `LCLK`, and `RCLK` send middle, left, and right mouse clicks.
- The arrow-style mouse keys move the pointer or send wheel events without using the trackpad.
- `Ptr` speed keys adjust pointer speed.
- `Scroll` speed keys adjust hold-to-scroll, native edge-wheel, and absolute edge-scroll speed.
- `Mode` toggles the Cirque trackpad between relative mode and absolute mode.
- On the character layers, `E` + `R`, `D` + `F`, and `C` + `V` provide right, left, and middle click with a 25 ms combo timeout.

## Implementation Notes

Sweep Pro's right half defines the Cirque hardware in `sweep_right_trackpad.overlay`:

- I2C address `0x2a` with `data-ready-gpios`.
- `sensitivity = "2x"`.
- `startup-delay-ms = <600>` to give the controller time to recover after resets or firmware flashing.
- `idle-packets-count = <3>` so relative-mode tap/drag release can be detected after finger lift.
- `primary-tap-enable`, `glide-extend-enable`, `sleep-mode-enable`, and `invert-y`.
- Absolute-mode tuning for touch threshold, tap timing, tap-drag, lower-right secondary tap, edge auto-pan, and right-edge scroll.

The shared keymap connects the trackpad listener to two processors:

```text
&glidepoint_listener {
    input-processors = <&pointer_processor 0 0 &drag_scroll_processor 1 8>;
};
```

`pointer_processor` handles runtime pointer speed when `Z` is not held. `drag_scroll_processor` handles hold-to-scroll, native edge-wheel scaling, and the `horizontal-when-enabled` conversion that turns right-edge wheel into horizontal wheel while `Z` is held.

## Tips

- Edge scrolling is a right-edge gesture, not a two-finger laptop-style gesture.
- Hold `Z` when you need firmware-generated horizontal wheel events from the trackpad.
- Use the mouse layer's `SCRL_LEFT` and `SCRL_RIGHT` keys when you need guaranteed horizontal wheel events without relying on app-level `Shift` + wheel behavior.
- For text selection or dragging, use the mouse layer's `LCLK` key when you need an explicit held button.
- After powering on or flashing firmware, give the right half a few seconds to initialize the trackpad.
- Use [NXTKB Input Tester](https://input-test.nxtkb.com) to check mouse buttons, pointer movement, and wheel events in the browser.

## If It Does Not Work

- Confirm that your keyboard version includes the Cirque trackpad.
- Turn on both keyboard halves. The trackpad is on the right half and sends input through the split connection.
- If the right-hand trackpad does not respond, especially right after flashing firmware to the right half, press the reset button on the right half once.
- If only keys work, but the pointer still does not move, power-cycle both halves and try the right-half reset again.
- If right-edge scrolling works but moves on the wrong axis, confirm whether you are holding `Z`. Firmware-level horizontal conversion only happens while drag-scroll is enabled.
- If scrolling goes the wrong way for your system preference, adjust the operating system's mouse or touchpad scroll direction setting.
