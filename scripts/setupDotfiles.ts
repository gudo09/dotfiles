import { execSync } from "node:child_process";

const configs = [
  "fish",
  "nvim",
  "kitty",
  "fastfetch"
];

execSync(`stow ${configs.join(" ")}`, {
  stdio: "inherit"
});
