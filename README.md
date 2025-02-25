# Geolocation API Cloudflare worker 🤖

## 🚀 Quick Start

### Prerequisites

- [Node.js 20+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [pnpm](https://pnpm.io/installation)


### Build and run local

```bash
git clone https://github.com/sondn/geolocation-cf-worker.git
cd geolocation-cf-worker
pnpm i && npx wrangler dev
```

### Deploy

```bash
npx wrangler login # if not login on CF
npx wrangler deploy
# After deploy success, access https://geolocation.{username}.workers.dev, geolocation as worker name
# For change name of worker, change name config from wrangler.jsonc
```
