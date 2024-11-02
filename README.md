# Numo.ts

Numo.ts is a TypeScript library for interacting with the Numo marketplace for efficiently buying and selling [European-style](https://en.wikipedia.org/wiki/European_option) call options.

## Installation

```bash
npm install --save @numotrade/numo-ts
```

## Getting Started

Instantiate your of Numo using your etheres provider:

### Examples

#### Through a RPC Provider (i.e. QuickNode) 

```typescript
import { Numo } from "@numotrade/numo-ts";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

const numo = new Numo(provider);
```

#### Exercising a ERC-20 call option








