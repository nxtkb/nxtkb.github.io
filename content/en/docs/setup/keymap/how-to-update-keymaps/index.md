---
title: "How to Update Keymaps"
---

There are three methods to update keymaps for NXTKB keyboards. We recommend **Method 1** (fork and modify repository) for permanent changes and **Method 3** (ZMK Studio) for quick adjustments without re-flashing.

## Method 1: Fork and Modify Configuration Repository (Recommended for Permanent Changes)

This method involves forking the official configuration repository, making your changes, and then flashing the updated firmware.

**Steps:**
1. Fork the appropriate configuration repository:
   - For Ferris Sweep Pro: [nxtkb/Sweep-Pro](https://github.com/nxtkb/Sweep-Pro/fork)
   - For Ferris Sweep: [nxtkb/zmk-config-4-ferris-sweep](https://github.com/nxtkb/zmk-config-4-ferris-sweep/fork)
2. Modify the keymap files in the repository
3. GitHub Actions will automatically compile the firmware
4. Flash the new firmware to your keyboard

> **Note**: This method requires re-flashing the firmware after making changes, but provides full control over your configuration and is ideal for permanent keymap changes. For detailed instructions on flashing firmware, see [How to Flash a Firmware](../../../firmware/how-to-flash-a-firmware/).

## Method 2: ZMK Studio (Recommended for Quick Adjustments)

ZMK Studio allows you to modify keymaps and store them directly on your keyboard without needing to re-flash the firmware.

**Steps:**
1. Visit [ZMK Studio](https://zmk.studio/)
2. Connect your keyboard via Bluetooth
3. Make your desired keymap modifications
4. Save the changes directly to your keyboard's storage

> **Note**: This method does not require firmware re-flashing, making it ideal for quick adjustments, testing, and temporary configurations.

## Method 3: Keyboard Editor with Forked Repository (Alternative Approach)

This method uses the Keyboard Editor integrated with your forked repository for a more streamlined workflow.

**Steps:**
1. Fork the appropriate configuration repository:
   - For Ferris Sweep Pro: [nxtkb/Sweep-Pro](https://github.com/nxtkb/Sweep-Pro/fork)
   - For Ferris Sweep: [nxtkb/zmk-config-4-ferris-sweep](https://github.com/nxtkb/zmk-config-4-ferris-sweep/fork)
2. Open the [Keyboard Editor](https://nickcoutsos.github.io/keymap-editor/)
3. In the Keyboard Editor, connect to your forked repository:
   - Click "GitHub" → "Connect to GitHub"
   - Authorize the editor to access your forked repository
   - Select your forked repository and the appropriate keymap file
4. Make your desired keymap modifications in the editor interface
5. Save changes - the editor will automatically:
   - Commit the changes to your forked repository
   - Push the commit to GitHub
   - Trigger the GitHub Actions workflow to build the new firmware
6. Once the build completes, download the firmware files from the GitHub Actions artifacts
7. Flash the new firmware to your keyboard

> **Note**: This method still requires re-flashing the firmware after modifying the keymap, and has some limitations:
> - The Keyboard Editor may not recognize all ZMK-specific features, custom macros, or advanced key behaviors
> - Some existing key definitions might be lost or misinterpreted during the editing process
> - For complex configurations, Method 1 (direct repository editing) is more reliable
> - For detailed instructions on flashing firmware, see [How to Flash a Firmware](../../../firmware/how-to-flash-a-firmware/).
