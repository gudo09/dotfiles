import { execSync } from "node:child_process";

export function applyStow() {
  const packages = [
    "nvim",
    "niri",
    //"fish",
    //"alacritty",
  ];

  execSync(`cd ~/dotfiles && stow -R ${packages.join(" ")}`, {
    stdio: "inherit",
    shell: "/bin/bash",
  });
}
