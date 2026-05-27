import { execSync } from "node:child_process";

export function applyStow() {
  execSync("cd ~/dotfiles && stow nvim", {
    stdio: "inherit",
    shell: "/bin/bash",
  });
}
