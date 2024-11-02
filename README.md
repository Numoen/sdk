# Numo.ts

Numo.ts is a TypeScript sdk for building web apps on Numo markets. Allowing you to efficiently buy or sell [european-style](https://en.wikipedia.org/wiki/European_option) call options on any `ERC-20` token.

It uses `reverse-mirage` to generate the TypeScript bindings from the Numo smart contracts.

## Installation

```bash
npm install --save @numotrade/numo-ts
```

## Getting Started

Instantiate your of Numo using your ethers provider:

### Examples

#### Through a RPC Provider (i.e. QuickNode) 

```typescript
import { Numo } from "@numotrade/numo-ts";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

const numo = new Numo(provider);
```

#### Exercising a ERC-20 call option








