Fuil Stack Dogs Monorepo

### Requirements

- Node `>=18`
- Git `>=2.39.2`
- PNPM `>=7.29.1`

### Worspaces

- apps/api: backend service
- apps/client: frontend client

### Development

Clone this repo.

`git clone https://github.com/roblesdotdev/dogs-monorepo && cd dogs-monorepo`

Install dependencies

`pnpm install`

Create environment file

```
mv apps/api/.env.sample apps/api/.env \
&& mv apps/client/.env.sample apps/client/.env
```

Run the full monorepo with:

```
pnpm start
```
