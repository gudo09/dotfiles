import { execSync } from "node:child_process";

const packages = [
  "base-devel",
  "chromium",
  "cmake",
  "docker",
  "curl",
  "fd",
  "fish",
  "fzf",
  "gcc",
  "git",
  "gum",
  "lazydocker",
  "lazygit",
  "mesa",
  "neovim",
  "ninja",
  "opencode",
  "ripgrep",
  "rocm-smi-lib",
  "shaderc",
  "spirv-headers",
  "spirv-tools",
  "stow",
  "tree-sitter-cli",
  "ttf-jetbrains-mono-nerd",
  "unzip",
  "vulkan-headers",
  "vulkan-tools",
  "wev",
  "zoxide"
  //"kitty",
  //"fastfetch"
];

export async function installPackages() {
  execSync(
    `sudo pacman -S --needed ${packages.join(" ")}`,
    { stdio: "inherit" }
  );
}
