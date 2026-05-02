---
title: "How to Flash a Firmware"
---

Flashing firmware is required when you make changes to your keyboard's configuration files (such as keymaps, features, or device settings) that cannot be updated dynamically. This guide covers the complete process for flashing firmware to NXTKB keyboards.

## When to Flash Firmware

You need to flash firmware when:
- You've modified keymap files in your configuration repository
- You've updated configuration files (e.g., `sweep.conf`)
- You need to reset Bluetooth pairing information or other stored information (like keymap updated from zmk studio)

> **Note**: If you only need to change your keymap, consider using [ZMK Studio](../../setup/keymap/how-to-update-keymaps/) instead, which allows keymap updates without firmware re-flashing.

## Steps to Flash Firmware

### 1. Obtain Firmware Files

You can get firmware files through two methods:

**Option A: From GitHub Actions (Recommended)**
- After pushing changes to your forked configuration repository
- GitHub Actions will automatically build the firmware
- Download the `.uf2` files from the workflow artifacts

**Option B: From Official Releases**
- Download pre-built firmware from the official repository releases:
  - [Ferris Sweep Pro Releases](https://github.com/nxtkb/Sweep-Pro/releases)
  - [zmk-config-4-ferris-sweep Releases](https://github.com/nxtkb/zmk-config-4-ferris-sweep/releases)

**Option C: Build Your Own**
- See [Build Your Own Firmware](../build-your-own-firmware/) for custom builds

### 2. Connect Your Keyboard Half with USB

1. Connect either the left or right half of your keyboard to your computer using a USB-C cable
2. for most changes (like keymap update), you only need to flash you main (left) half of keyboard.

### 3. Enter Bootloader Mode

Enter bootloader mode on the half you want to flash:

- **Method 1**: Press the `&bootloader` key (requires keyboard to be connected to a device for typing)
- **Method 2**: Double-click the physical reset button on the keyboard
- **Method 3**: If the reset button is not working, quickly short-circuit the reset button twice
- **Method 4**: As a last resort, quickly short-circuit the GND & RST pins of the controller twice (top left corner, second and third pins)

> **Note**: When the keyboard enters bootloader mode, it will appear as a removable drive named "NICENANO" or similar.

### 4. Flash the Firmware

1. Once in bootloader mode, the keyboard will appear as a removable drive
2. Copy the appropriate `.uf2` file to the drive:
   - `xxx-left-xxx.uf2` → for the left half
   - `xxx-right-xxx.uf2` → for the right half
   - `xxx-reset-xxx.uf2` → for both halves. to clear Bluetooth pairing information (use when halves won't connect)

3. The keyboard will automatically reboot after the file is copied
4. Repeat for the other half if needed

:::note[Firmware File Types]
* **xxx-left-xxx.uf2**: Firmware for left hand.
* **xxx-right-xxx.uf2**: Firmware for right hand.
* **xxx-reset-xxx.uf2**: Firmware for clearing the controller of left or right half (Bluetooth reset).

:::

## Version History

Check back regularly for new features and improvements to the firmware flashing process.
