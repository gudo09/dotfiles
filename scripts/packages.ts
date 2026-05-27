import { execSync } from "node:child_process";

const packages = [
  "stow",
  "fish",
  "neovim",
  "git",
  "lazygit",
  "fzf",
  "ripgrep",
  "fd",
  "curl",
  "unzip",
  "tree-sitter-cli",
  "gcc",
  "ttf-jetbrains-mono-nerd",
  //"kitty",
  //"fastfetch"
];

export async function installPackages() {
  execSync(
    `sudo pacman -S --needed ${packages.join(" ")}`,
    { stdio: "inherit" }
  );
}
