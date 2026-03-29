---
title: "Connect to Your Device"
weight: 2
---

This guide will show you how to connect your NXTKB keyboard to your computer using various connection methods.

## Connection Methods Overview

ZMK split keyboards support multiple connection methods:

- **USB Wired Connection**: Direct connection via USB cable
- **Bluetooth Wireless Connection**: Wireless connection to your device (up to 5 devices by default)

ZMK (Zephyr-based Modular Keyboard) uses a modular design where the secondary keyboard (right) sends keypress data to the main keyboard (usually left), which handles input processing and transmits the combined output to your target device through the selected connection method.

## USB Connection

The USB connection is the most straightforward and reliable connection method.

### Requirements
- USB-C cable (included in your package)
- USB port on your target device (computer, phone, tablet, etc.)

### Steps
1. **Prepare the connection**: Secure your USB-C cable and ensure your device has a compatible USB port
2. **Power on both keyboard halves**: Turn on the power switch on both left and right halves (charging will only happen when power is switched on)
3. **Connect the main half**: Connect the left keyboard half to your target device using the USB-C cable
4. **Test the connection**: Begin typing to confirm that the keyboard is properly connected

## Bluetooth Connection

Bluetooth offers wireless freedom but requires initial pairing to establish the connection.

### Connecting New Devices

1. **Enable Bluetooth**: Ensure your target device has Bluetooth capability and that it's turned on
2. **Power on the keyboard**: Turn on power switches on both halves of your keyboard
3. **Put keyboard in pairing mode**: 
   - If connecting to a new device, you may need to clear the current device slot first
   - By default, keyboards start in device position 1
4. **Clear existing pairings** (optional): If the current position is already paired with another device, you may need to clear it first using `BT_CLR` key
5. **Find your keyboard**: 
   - On your target device, scan for Bluetooth devices
   - Look for your keyboard's specific name in the device list
   - Select and connect/pair with your keyboard
6. **Switch connection mode** (optional): 
   - If your main keyboard is currently connected via USB, you can disconnect the USB cable
   - Or switch from USB to Bluetooth mode using the `&tog` key
7. **Test the connection**: Start typing to verify the connection is working

### Reconnecting to Previously Paired Devices

1. **Power on the keyboard**: Turn on both halves
2. **Ensure desired device slot is selected**: Use `BT_SEL 0` to `BT_SEL 4` to select the proper device number
3. **Wait for automatic reconnection**: The keyboard will automatically attempt to connect to the previously paired device
4. **Switch connection mode** (optional): 
   - If your main keyboard is still connected via USB, disconnect the USB cable
   - Or toggle between USB and Bluetooth modes using `&tog`
5. **Test the connection**: Type to confirm the connection

## Device Switching

- Switch between bluetooth devices with `BT_SEL <device_number>`
- By default, USB input takes priority
- Use the `&tog` key to switch between USB and Bluetooth modes

## Troubleshooting Common Issues

### Bluetooth Pairing Fails
1. Ensure the keyboard is functioning in USB mode first
2. Check if other Bluetooth positions have existing connections - you may need to clear them first
3. Try pairing with a different target device to determine if the issue is with the keyboard or the target device

For additional help with connectivity issues, please consult our [FAQ](/docs/support/) or contact support.
