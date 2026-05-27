import { execSync } from "node:child_process";

const configs = [
  "nvim",
];

execSync(`stow ${configs.join(" ")}`, {
  stdio: "inherit"
});
