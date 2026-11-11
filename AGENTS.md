# Development instructions

Run application tooling inside Docker containers.

| Command | Purpose |
|---------|---------|
| docker compose up --build -d --wait frontend db | Start local development |
| docker compose run --rm frontend npm run build | Verify frontend build |
| docker compose run --build --rm catalogue-worker | Verify database access |
| docker compose config --quiet | Validate Compose configuration |

Commit package-lock.json and uv.lock with dependency changes. Keep secrets and generated artifacts out of version control. The worker currently checks database connectivity. Catalogue importing and agent integration are upcoming work.
