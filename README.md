<p align="center">
  <a href="https://awmate.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="AWMate logo">
    </picture>
  </a>
</p>
<p align="center">The open source AI coding agent.</p>
<p align="center">
  <a href="https://awmate.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/awmate"><img alt="npm" src="https://img.shields.io/npm/v/awmate?style=flat-square" /></a>
  <a href="https://github.com/nxtgensec/awmate/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/nxtgensec/awmate/publish.yml?style=flat-square&branch=dev" /></a>
</p>

---

### Installation

```bash
# YOLO
curl -fsSL https://awmate.ai/install | bash

# Package managers
npm i -g awmate@latest        # or bun/pnpm/yarn
scoop install awmate             # Windows
choco install awmate             # Windows
brew install anomalyco/tap/awmate # macOS and Linux (recommended, always up to date)
brew install awmate              # macOS and Linux (official brew formula, updated less)
sudo pacman -S awmate            # Arch Linux (Stable)
paru -S awmate-bin               # Arch Linux (Latest from AUR)
mise use -g awmate               # Any OS
nix run nixpkgs#awmate           # or github:nxtgensec/awmate for latest dev branch
```

> [!TIP]
> Remove versions older than 0.1.x before installing.

### Desktop App (BETA)

AWMate is also available as a desktop application. Download directly from the [releases page](https://github.com/nxtgensec/awmate/releases) or [awmate.ai/download](https://awmate.ai/download).

| Platform              | Download                           |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `awmate-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `awmate-desktop-mac-x64.dmg`     |
| Windows               | `awmate-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm`, or `.AppImage`     |

```bash
# macOS (Homebrew)
brew install --cask awmate-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/awmate-desktop
```

#### Installation Directory

The install script respects the following priority order for the installation path:

1. `$AWMATE_INSTALL_DIR` - Custom installation directory
2. `$XDG_BIN_DIR` - XDG Base Directory Specification compliant path
3. `$HOME/bin` - Standard user binary directory (if it exists or can be created)
4. `$HOME/.awmate/bin` - Default fallback

```bash
# Examples
AWMATE_INSTALL_DIR=/usr/local/bin curl -fsSL https://awmate.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://awmate.ai/install | bash
```

### Agents

AWMate includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full-access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

Learn more about [agents](https://awmate.ai/docs/agents).

### Documentation

For more info on how to configure AWMate, [**head over to our docs**](https://awmate.ai/docs).

### Contributing

If you're interested in contributing to AWMate, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request.

### Building on AWMate

If you are working on a project that's related to AWMate and is using "awmate" as part of its name, for example "awmate-dashboard" or "awmate-mobile", please add a note to your README to clarify that it is not built by the AWMate team and is not affiliated with us in any way.

---

**Join our community** [Discord](https://discord.gg/awmate) | [X.com](https://x.com/awmate)
