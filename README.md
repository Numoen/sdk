# Numo.js

A TypeScript library that makes interfacing with Numo easier. It includes various helper methods and constants for swapping between FX pairs and locking in an exchange rate among others. 

## Synopsis

It uses `reverse-mirage` to generate the TypeScript bindings from the Numo smart contracts.

## Installation

```bash
npm install --save @numotrade/numo-js
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

#### Provide liquidity to FX pair








