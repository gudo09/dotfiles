import { $, fs } from "zx";

const NVIM_PATH = `${process.env.HOME}/.config/nvim`;

export async function setupLazyVim() {
  // verificar si ya existe
  if (await fs.exists(NVIM_PATH)) {
    console.log("Neovim config ya existe, salteando LazyVim");
    return;
  }

  // clonar starter
  await $`
    git clone https://github.com/LazyVim/starter ${NVIM_PATH}
  `;

  // eliminar .git
  await fs.remove(`${NVIM_PATH}/.git`);

  console.log("LazyVim instalado");
}
