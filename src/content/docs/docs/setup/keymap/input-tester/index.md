---
title: "Input Tester"
---

Use [NXTKB Input Tester](https://input-test.nxtkb.com) to check keyboard keys, mouse buttons, wheel events, and trackpad behavior from a browser.

It is useful after receiving a keyboard, flashing firmware, changing a keymap in ZMK Studio, or troubleshooting a specific key or layer.

## What It Checks

- Keyboard key down and key up events
- Current key state: active, pressed before, or never pressed
- Key history with event order
- Mouse buttons, including side buttons when the browser exposes them
- Pointer movement, movement speed, scroll direction, scroll speed, and total scroll distance
- Trackpad scroll behavior, which browsers expose as wheel events
- Relative pointer movement in the pointer test area with precise mode

## Basic Test Flow

1. Connect the keyboard over USB or Bluetooth.
2. Open [input-test.nxtkb.com](https://input-test.nxtkb.com).
3. Keep keyboard capture enabled.
4. Press each physical key once and watch the on-screen keyboard and key history.
5. Switch through your layers and test the keys that change on each layer.
6. Enter the mouse layer and test pointer movement, buttons, wheel, and trackpad gestures in the pointer area.

If you just changed the keymap, save it in ZMK Studio first, then return to the tester and verify the changed keys.

## Testing the Mouse Layer and Trackpad

For Sweep Pro, use the tester together with the [trackpad guide](../trackpad/):

- Move on the right trackpad and confirm pointer movement or scroll events appear.
- Hold the scroll modifier key, then move on the trackpad and confirm wheel events appear.
- Test left, right, middle, back, and forward mouse buttons if they exist in your keymap.
- Use precise mode in the pointer panel when you want to inspect relative movement more clearly.

The tester cannot directly identify a touchpad as a separate device. Browser APIs usually report touchpad scrolling as normal wheel events.

## Browser Limits

A normal web page cannot see every possible input.

- Browser or OS shortcuts may be intercepted before the tester receives them.
- Keys such as `F1`, `F5`, `F11`, `PrintScreen`, `Meta`, media keys, brightness keys, and firmware-level `Fn` behavior may be partially hidden by the browser or operating system.
- A missing event on those browser-risk keys does not always mean the keyboard is broken.

For ordinary letter keys, layer keys, mouse buttons, wheel events, and trackpad gestures, the tester is usually enough for daily validation.

## Privacy and Saved Settings

The tester runs in the browser. Preferences such as language, theme, sound, volume, and capture mode are stored locally in the browser. Temporary test state, such as pressed keys and pointer history, resets when the page is refreshed.
