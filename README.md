# RULERS-X Preview

Standalone, public-facing validation surface for RULERS-X.

This repository is deliberately separated from the private product engine so that positioning, usability, and trust experiments can be deployed without exposing the internal application, Aave portfolio views, qualification runner, developer database, or write-capable APIs.

## Current purpose

- validate crypto-first vs cross-asset positioning
- test whether users understand the Market Radar concept
- test founder-light trust through inspectable evidence
- test whether "Why is this here?" is the first meaningful aha moment
- prepare a clean Vercel deployment

## Safety boundary

This site is a research preview.

It does **not** provide:
- investment advice
- buy/sell recommendations
- expected returns
- automated trading
- portfolio authorization
- live access to the private RULERS-X backend

The scanner policy remains provisional while forward qualification is in progress.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Variant A (crypto-first):
`/?variant=a`

Variant B (cross-asset / digital-assets-first):
`/?variant=b`

## Deployment

Designed for a standard Next.js deployment on Vercel.

No environment variables are required for this static validation build.
