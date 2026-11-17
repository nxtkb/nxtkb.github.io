---
title: "Connect to Your Device"
---

NXTKB keyboards can work over USB or Bluetooth. For a new keyboard, start with USB first because it is the fastest way to confirm that both halves are powered and the keyboard sends normal input.

## Before You Start

- Turn on both keyboard halves.
- Use the left half as the main half for USB connection and Bluetooth output.
- Keep the right half powered on. It sends its input through the split connection.
- Open [Keyboard & Mouse Test](../keymap/input-tester/) when you want to confirm what the browser receives.

## USB First Check

USB is the most reliable first test.

1. Turn on both halves.
2. Connect the left half to your computer with a USB-C cable.
3. Open [Keyboard & Mouse Test](../keymap/input-tester/).
4. Press keys on both halves.
5. If your keyboard has a mouse layer or trackpad, test mouse buttons, wheel events, and pointer movement too.

If key events appear in the tester, the keyboard is sending input correctly.

## Bluetooth Pairing

Use Bluetooth after the USB check works.

1. Turn on both halves.
2. Select the Bluetooth slot you want to use, if your keymap exposes `BT_SEL 0` through `BT_SEL 4`.
3. If that slot was paired before, clear it with `BT_CLR`.
4. Open Bluetooth settings on your computer, phone, or tablet.
5. Find the keyboard name and pair with it.
6. Disconnect USB, or switch output away from USB if your keymap has an output toggle key.
7. Test typing again in [Keyboard & Mouse Test](../keymap/input-tester/).

The exact Bluetooth control keys depend on the keymap. Check your model's keymap page if you are not sure where `BT_SEL`, `BT_CLR`, or output toggle keys are:

- [Ferris Sweep Pro Keymap](../keymap/ferris-sweep-pro-keymap/)
- [Ferris Sweep Keymap](../keymap/ferris-sweep-keymap/)

## Reconnect or Switch Devices

ZMK keyboards can store multiple Bluetooth profiles. To switch devices:

1. Select the target Bluetooth slot with `BT_SEL`.
2. Wait a few seconds for the keyboard to reconnect.
3. If it does not reconnect, remove the keyboard from the target device's Bluetooth list, clear the slot on the keyboard, and pair again.

USB usually takes priority while plugged in. If you want to use Bluetooth, disconnect USB or use your keymap's output toggle key.

## Troubleshooting

| Problem | What to try |
| :--- | :--- |
| Nothing types over USB | Confirm both halves are powered on. Try another USB-C cable and connect the left half directly to the computer. |
| Left half works but right half does not | Turn on the right half, then power-cycle both halves. |
| Bluetooth pairing fails | Verify USB input first, clear the selected Bluetooth slot with `BT_CLR`, remove old pairings from the host device, and pair again. |
| Keyboard appears paired but does not type | Select Bluetooth output and the target Bluetooth slot. USB may remain connected for power when Bluetooth output is explicitly selected. |
| Letters work over Bluetooth, but volume or media keys do not | Check the [media-key compatibility notes](#bluetooth-media-key-compatibility), including the report format and cached Bluetooth pairing. |
| Mouse or trackpad events are unclear | Use [Keyboard & Mouse Test](../keymap/input-tester/) to inspect mouse buttons, wheel events, and pointer movement. |

If USB input works but Bluetooth repeatedly fails, flash `settings_reset` once to clear stored ZMK settings, then flash the normal firmware again. See [How to Flash a Firmware](../../firmware/how-to-flash-a-firmware/).

## Bluetooth Media-Key Compatibility

Sweep Pro uses **Full Consumer HID reports** by default to support a wider range of media and system-control key codes. Some hosts have compatibility issues with this format even when ordinary letters work. Basic is an optional compatibility setting with a smaller set of supported Consumer key codes; see [Full and Basic Consumer reports](../../firmware/sweep-pro-configuration/#full-and-basic-consumer-reports) for the tradeoff and build settings.

If volume or media actions do not work:

1. Confirm the intended layer, Bluetooth output, and target profile. Test ordinary typing and check the host's volume indicator; browsers may not expose media-key events.
2. After firmware changes that alter the HID report format, forget the keyboard on the affected host, select that host's profile on the keyboard, clear it with `BT_CLR`, and pair again. Clear only the affected profile. The control's physical position depends on your current keymap.
3. If letters still work but media keys do not, consider a Basic build for that host, after checking its key-code limitations. Re-pair again after switching formats. A different encoder binding alone does not change the report format.

In a local Sweep Pro left-with-display **trial firmware** test on an Honor PPG-AN00 running Android 16 (2026-11-17), Full with a fresh pairing produced normal letters but no encoder volume response. Basic with a fresh pairing worked in both volume directions. The trial included experimental modules; this is not a compatibility verdict for all Honor/Android devices or a validation of every released firmware version. Full remains the default.

ZMK documents both the [Full/Basic compatibility tradeoff and the need to refresh changed HID descriptors](https://zmk.dev/docs/config/system#hid).
