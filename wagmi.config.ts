import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig([
  {
    out: "packages/numo-ts/src/generated.ts",
    contracts: [],
    plugins: [
      foundry({
        project: "lib/numo/",
        include: [
          "Factory.sol/**",
          "Market.sol/**",
          "MockERC20.sol/**",
        ],
      }),
    ],
  },
]);
