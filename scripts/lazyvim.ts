import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const HOME = process.env.HOME!;
const DOTFILES_NVIM = path.join(
  HOME,
  "dotfiles",
  "nvim",
  ".config",
  "nvim"
);

export async function setupLazyVim() {
  if (existsSync(DOTFILES_NVIM)) {
    console.log("LazyVim ya existe en dotfiles");
    return;
  }

  await fs.mkdir(
    path.join(HOME, "dotfiles", "nvim", ".config"),
    { recursive: true }
  );

  execSync(
    `git clone https://github.com/LazyVim/starter ${DOTFILES_NVIM}`,
    {
      stdio: "inherit",
    }
  );

  await fs.rm(
    path.join(DOTFILES_NVIM, ".git"),
    {
      recursive: true,
      force: true,
    }
  );

  console.log("LazyVim instalado en dotfiles");
}
