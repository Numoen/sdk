import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

export default defineConfig([
  {
    out: "packages/panoptic-sdk/src/generated.ts",
    contracts: [],
    plugins: [
      foundry({
        project: "lib/panoptic-v1-core/",
        include: [
          "SemiFuniblePositionManager.sol/**",
          "PanopticFactory.sol/**",
          "PanopticPool.sol/**",
          "CollateralTracker.sol/**"
        ],
      }),
    ],
  },
]);
