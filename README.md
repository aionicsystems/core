# Aion Core Repository
# React + TypeScript + Vite + Hardhat + Wagmi + TheGraph

Requirements for development:
Node
Docker

NPM Commands: `npm run [command]`
generate: "hardhat compile && wagmi generate"
Compile the contracts and generates the typescript for front-end

dev-init: "docker compose up -d && sleep 30 && hardhat run scripts/deploy-dev.cjs --network localhost"
Launches Hardhat and TheGraph via Docker then deploys contracts with initialization. Press ctrl-c to end.

dev-down: "docker compose down"
Removes development containers

dev-clean: "docker compose down && sudo rm -rf data"
Removes development containers and deletes the leftover data