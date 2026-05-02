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
| Free-direction scroll | Hold `Z`, then move on the trackpad. Pointer movement becomes scroll movement while held, so you can scroll in any direction. |
| Horizontal edge scroll | Hold `Shift` or `Z`, then use the right-edge scroll gesture. The right edge changes from vertical scrolling to horizontal scrolling while held. |
| Drag or select | Hold `X` to hold left click, move on the trackpad, then release `X`. |

The `Z` and `X` keys still type normal characters when tapped. Their touchpad behaviors only activate when you hold them.

## Trackpad Modes

The trackpad starts in absolute mode by default. The `Mode` key on the mouse layer toggles between absolute mode and relative mode.

| Mode | What it feels like | Best for |
| :--- | :--- | :--- |
| Absolute mode | The firmware reads the finger position on the pad and converts it into pointer motion. It has more room for extended behaviors such as tap-drag, right-edge scroll, horizontal edge scroll, and edge motion. | Daily use when you want the full Sweep Pro trackpad feature set. |
| Relative mode | The trackpad behaves more like a mature, stable small mouse sensor: finger movement is reported as relative pointer movement. | When stability and predictable mouse-like movement matter more than the extended absolute-mode features. |

Use absolute mode if you want the default feature-rich behavior. Switch to relative mode if you prefer the more mature and stable mouse-like behavior. If the pointer feel changes after pressing `Mode`, press `Mode` again to return to the previous mode.

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
- `Ptr` and `Scroll` speed keys adjust pointer and scroll speed. Use the previous/next keys to step down or up.
- `Mode` toggles the Cirque trackpad between absolute mode and relative mode.

## Tips

- Edge scrolling is a right-edge gesture, not a two-finger laptop-style gesture.
- Hold `Shift` or `Z` before using the right edge when you need horizontal wheel events.
- For text selection, holding `X` is usually more predictable than relying on tap-drag timing.
- After powering on or flashing firmware, give the right half a few seconds to initialize the trackpad.
- Use [NXTKB Input Tester](https://input-test.nxtkb.com) to check mouse buttons, pointer movement, and wheel events in the browser.

## If It Does Not Work

- Confirm that your keyboard version includes the Cirque trackpad.
- Turn on both keyboard halves. The trackpad is on the right half and sends input through the split connection.
- If the right-hand trackpad does not respond, especially right after flashing firmware to the right half, press the reset button on the right half once.
- If only keys work, but the pointer still does not move, power-cycle both halves and try the right-half reset again.
- If scrolling goes the wrong way for your system preference, adjust the operating system's mouse or touchpad scroll direction setting.
