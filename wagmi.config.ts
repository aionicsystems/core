import { defineConfig } from '@wagmi/cli'
import { hardhat, react, actions } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    hardhat({
      project: '../core',
    }),
    react(),
    actions(),
  ],
})
