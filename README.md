# 💤 LazyVim

Personal LazyVim configuration based on the official starter template.

Built for a minimal and terminal-focused workflow using modern Neovim plugins.

## Features

* Based on LazyVim starter template
* `snacks.nvim` explorer disabled
* Replaced file explorer with `oil.nvim`
* Integrated `lazygit.nvim`
* Custom plugin overrides using `lazy.nvim`
* Git-aware workflow
* Hidden files support enabled in Oil

## Plugins

### File Explorer

* [`oil.nvim`](https://github.com/stevearc/oil.nvim)

Keymap:

```text
-
```

Opens the parent directory as an editable buffer.

### Git UI

* [`lazygit.nvim`](https://github.com/kdheepak/lazygit.nvim)

Keymap:

```text
<leader>lg
```

Opens LazyGit inside Neovim.

## Installation

Clone the repository:

```bash
git clone <your-repository-url> ~/.config/nvim
```

Start Neovim:

```bash
nvim
```

Plugins will be installed automatically through `lazy.nvim`.

## Requirements

* Neovim >= 0.9
* Git
* LazyGit
* Nerd Font

## Notes

This setup is designed primarily for:

* Web development
* Terminal workflows
* Git-heavy projects
* Minimal file navigation

Inspired by the simplicity of Vim combined with modern Neovim tooling.

