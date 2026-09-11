import { execSync } from "node:child_process";

const services = ["docker"];

function isDockerFailing(): boolean {
  try {
    execSync("systemctl is-active docker", { stdio: "pipe" });
    return false;
  } catch {
    return true;
  }
}

function fixDockerNetwork() {
  console.log("🔧 Docker is down — fixing network config...");
  execSync("sudo systemctl stop docker", { stdio: "inherit" });
  execSync("sudo rm -rf /var/lib/docker/network", { stdio: "inherit" });
  console.log("✅ Network config cleaned");
}

export function enableServices() {
  for (const service of services) {
    if (service === "docker" && isDockerFailing()) {
      fixDockerNetwork();
    }
    console.log(`🔧 Enabling ${service}...`);
    execSync(`sudo systemctl enable --now ${service}`, { stdio: "inherit" });
  }
}
