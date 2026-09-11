import { installPackages } from "./packages.js";
import { setupLazyVim } from "./lazyvim.js";
import { applyStow } from "./stow.js"
import { enableServices } from "./services.js"

async function main() {
  console.log("🚀 Starting dotfiles bootstrap...");

  await installPackages();
  enableServices();
  await setupLazyVim();
  applyStow();

  console.log("✅ Setup completed");
}

main().catch((err) => {
  console.error("❌ Error during install:", err);
  process.exit(1);
});
