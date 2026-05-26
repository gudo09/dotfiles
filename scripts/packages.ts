import { execSync } from "node:child_process";

const packages = [
  "stow",
  "fish",
  "neovim",
  "git",
  "fzf",
  "ripgrep",
  "fd",
  "curl",
  "unzip",
  "tree-sitter-cli",
  //"kitty",
  //"fastfetch"
];

execSync(
  `sudo pacman -S --needed ${packages.join(" ")}`,
  { stdio: "inherit" }
);
