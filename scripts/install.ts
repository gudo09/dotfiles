import { installPackages } from "./packages.js";
import { setupLazyVim } from "./lazyvim.js";
import { applyStow } from "./stow.js"

async function main() {
  console.log("🚀 Starting dotfiles bootstrap...");

  await installPackages();
  await setupLazyVim();
  applyStow();

  console.log("✅ Setup completed");
}

main().catch((err) => {
  console.error("❌ Error during install:", err);
  process.exit(1);
});
