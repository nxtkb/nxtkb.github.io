---
title: "Build your own firmware"
description: "Build NXTKB Ferris Sweep Pro and Ferris Sweep firmware locally or with GitHub Actions."
---

NXTKB keyboards use [ZMK](https://zmk.dev/) firmware. This guide covers the two configuration repositories we currently maintain:

| Keyboard | Configuration repository | Main build targets |
| --- | --- | --- |
| Ferris Sweep Pro | [`nxtkb/Sweep-Pro`](https://github.com/nxtkb/Sweep-Pro) | `sweep_left`, `sweep_left_display`, `sweep_right`, `sweep_right_trackpad`, `settings_reset` |
| Ferris Sweep | [`nxtkb/zmk-config-4-ferris-sweep`](https://github.com/nxtkb/zmk-config-4-ferris-sweep) | `cradio_left`, `cradio_right`, `settings_reset` |

For most keymap changes, flash only the main left half. Build and flash the right half when you change right-side behavior, split settings, or hardware configuration. Use `settings_reset` when you need to clear Bluetooth pairing or stored ZMK settings.

## GitHub Actions Build

This is the recommended path for most users because it uses the same workflow as the public NXTKB firmware repositories.

### 1. Fork the right repository

- For Ferris Sweep Pro, fork [`nxtkb/Sweep-Pro`](https://github.com/nxtkb/Sweep-Pro).
- For the original Ferris Sweep, fork [`nxtkb/zmk-config-4-ferris-sweep`](https://github.com/nxtkb/zmk-config-4-ferris-sweep).

### 2. Edit your configuration

Common files:

- Ferris Sweep Pro: `config/sweep.keymap`, `config/sweep.conf`, and side-specific `config/*.conf` files.
- Ferris Sweep: `config/cradio.keymap`, `config/cradio.conf`, and files under `config/behaviors/`.

For detailed Sweep Pro settings such as trackpad mode, startup delay, encoder behavior, display hardware, battery reporting, and build artifacts, see [Sweep Pro Configuration Files](../sweep-pro-configuration/).

For detailed Ferris Sweep settings such as hold-tap timing, mouse-layer keys, Bluetooth capacity, sleep behavior, keyboard name, and build artifacts, see [Ferris Sweep Configuration Files](../ferris-sweep-configuration/).

The build matrix is defined in `build.yaml`. The current Ferris Sweep Pro matrix builds:

```yaml
include:
  - board: nice_nano//zmk
    shield: sweep_left
    snippet: studio-rpc-usb-uart
    artifact-name: sweep_left
  - board: nice_nano//zmk
    shield: sweep_left sweep_left_display_hw sweep_display
    snippet: studio-rpc-usb-uart
    artifact-name: sweep_left_display
  - board: nice_nano//zmk
    shield: sweep_right
    artifact-name: sweep_right
  - board: nice_nano//zmk
    shield: sweep_right sweep_right_trackpad
    artifact-name: sweep_right_trackpad
  - board: nice_nano//zmk
    shield: settings_reset
```

The current Ferris Sweep matrix builds:

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

### 3. Run the workflow

Both repositories include `.github/workflows/build.yml`, which calls ZMK's reusable `build-user-config.yml` workflow.

- Push a commit to your fork, or open the **Actions** tab and run **Build ZMK firmware** manually.
- Open the finished workflow run.
- Download the firmware artifact zip.
- Extract the `.uf2` files.

Then flash the relevant file:

- Left/main half: the file containing `left`, `cradio_left`, `sweep_left`, or `sweep_left_display`.
- Right half: the file containing `right`, `sweep_right`, or `sweep_right_trackpad`.
- Reset firmware: the file containing `settings_reset` or `reset`.

See [How to Flash a Firmware](../how-to-flash-a-firmware/) for the flashing steps.

## Local Build

Local builds are useful when you are developing firmware, testing modules, or iterating before pushing changes to GitHub.

### 1. Prepare the workspace

The examples below assume this layout:

```sh
NXTKB_ROOT="$HOME/git-repo/nxtkb"
```

Expected repositories:

```text
$NXTKB_ROOT/zmkfirmware/zmk
$NXTKB_ROOT/Sweep-Pro
$NXTKB_ROOT/zmk-config-4-ferris-sweep
$NXTKB_ROOT/zmk-vfx-sweep-pro-display
$NXTKB_ROOT/cirque-input-module
$NXTKB_ROOT/zmk-behavior-report
$NXTKB_ROOT/zmk-behavior-send-string
```

Run build commands from `$NXTKB_ROOT/zmkfirmware/zmk`, not from the keyboard configuration repository.

### 2. Install dependencies

On Arch Linux:

```sh
sudo pacman -S git cmake ninja gperf ccache dfu-util dtc wget tk xz file make uv
paru -S zephyr-sdk
```

If your shell does not find the Zephyr SDK automatically, set:

```sh
export ZEPHYR_TOOLCHAIN_VARIANT=zephyr
export ZEPHYR_SDK_INSTALL_DIR="$HOME/zephyr-sdk-0.17.0"
```

### 3. Initialize ZMK

```sh
cd "$NXTKB_ROOT/zmkfirmware/zmk"
uv venv --python 3.13
source .venv/bin/activate
uv pip install west

west init -l app/
west update
west zephyr-export
uv pip install -r zephyr/scripts/requirements-base.txt protobuf
```

For later terminal sessions, run:

```sh
cd "$NXTKB_ROOT/zmkfirmware/zmk"
source .venv/bin/activate
```

### 4. Build Ferris Sweep Pro

```sh
NXTKB_ROOT="$HOME/git-repo/nxtkb"
EXTRA_MODULES="$NXTKB_ROOT/Sweep-Pro;$NXTKB_ROOT/zmk-vfx-sweep-pro-display;$NXTKB_ROOT/cirque-input-module;$NXTKB_ROOT/zmk-behavior-report;$NXTKB_ROOT/zmk-behavior-send-string"
ZMK_CONFIG_DIR="$NXTKB_ROOT/Sweep-Pro/config"
```

Build the base left half with ZMK Studio USB RPC:

```sh
west build -s app -p -d build/sweep_left -b nice_nano//zmk \
  -S studio-rpc-usb-uart -- \
  -DSHIELD=sweep_left \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

Build the left half with display and ZMK Studio USB RPC:

```sh
west build -s app -p -d build/sweep_left_display -b nice_nano//zmk \
  -S studio-rpc-usb-uart -- \
  -DSHIELD="sweep_left sweep_left_display_hw sweep_display" \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

Build the right half:

```sh
west build -s app -p -d build/sweep_right -b nice_nano//zmk -- \
  -DSHIELD=sweep_right \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

Build the right half with trackpad:

```sh
west build -s app -p -d build/sweep_right_trackpad -b nice_nano//zmk -- \
  -DSHIELD="sweep_right sweep_right_trackpad" \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

Build reset firmware:

```sh
west build -s app -p -d build/sweep_reset -b nice_nano//zmk -- \
  -DSHIELD=settings_reset \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

The output file is `zephyr/zmk.uf2` inside each build directory, for example `build/sweep_left/zephyr/zmk.uf2`.

Choose UF2 files by hardware variant:

| Variant | Left UF2 | Right UF2 |
| --- | --- | --- |
| Basic | `sweep_left` | `sweep_right` |
| E-ink | `sweep_left_display` | `sweep_right` |
| Trackpad | `sweep_left` | `sweep_right_trackpad` |
| Full | `sweep_left_display` | `sweep_right_trackpad` |

### 5. Build Ferris Sweep

```sh
NXTKB_ROOT="$HOME/git-repo/nxtkb"
EXTRA_MODULES="$NXTKB_ROOT/zmk-behavior-report;$NXTKB_ROOT/zmk-behavior-send-string"
ZMK_CONFIG_DIR="$NXTKB_ROOT/zmk-config-4-ferris-sweep/config"
```

Build the left half with ZMK Studio USB RPC:

```sh
west build -s app -p -d build/ferris_left -b nice_nano//zmk \
  -S studio-rpc-usb-uart -- \
  -DSHIELD=cradio_left \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

Build the right half:

```sh
west build -s app -p -d build/ferris_right -b nice_nano//zmk -- \
  -DSHIELD=cradio_right \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

Build reset firmware:

```sh
west build -s app -p -d build/ferris_reset -b nice_nano//zmk -- \
  -DSHIELD=settings_reset \
  -DZMK_EXTRA_MODULES="$EXTRA_MODULES" \
  -DZMK_CONFIG="$ZMK_CONFIG_DIR"
```

### 6. Rebuild faster

After the first successful build, you can usually omit `-p` for faster incremental builds. Add `-p` again when you change modules, devicetree overlays, shields, snippets, or CMake-related configuration.

## Troubleshooting

- `west: unknown command "build"`: make sure you are inside `$NXTKB_ROOT/zmkfirmware/zmk` and the virtual environment is active.
- `source directory "." does not contain a CMakeLists.txt`: build with `-s app`.
- Missing shield, behavior, binding, or display files: check `ZMK_CONFIG`, `ZMK_EXTRA_MODULES`, and the semicolon-separated module list.
- The right-half build may show warnings for features only used by the left half. If the build finishes and produces `zmk.uf2`, the firmware file is usable.
