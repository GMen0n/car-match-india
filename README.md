# CarMatch India

A car buying assistant in development, with an Astro frontend and a Python catalogue worker in a uv workspace. The agent and catalogue import are the next implementation milestones.

## Requirements

Docker with Docker Compose and Git. Node, Python and uv run inside containers.

## Start local development

```sh
docker compose up --build -d --wait frontend db
```

Open http://localhost:4321. Frontend edits reload through the source mount.

Enable pgvector once for a new database volume. Migrations will manage this during the backend milestone.

```sh
docker compose exec db psql -U carmatch -d carmatch -c "CREATE EXTENSION IF NOT EXISTS vector;"
```

## Check the Python worker

```sh
docker compose run --build --rm catalogue-worker
```

The worker currently verifies its PostgreSQL connection and reports the pgvector version. It uses local development credentials on the internal Compose network.

## Build and inspect

```sh
docker compose run --rm frontend npm run build
docker compose logs -f frontend
docker compose ps
```

## Update dependencies

After editing Python dependency declarations, regenerate the committed lockfile inside the worker container.

```sh
docker compose run --rm catalogue-worker uv lock
docker compose build catalogue-worker
```

After changing frontend dependencies and package-lock.json, refresh the dependency volume and rebuild the image.

```sh
docker compose run --rm frontend npm ci
docker compose build frontend
```

## Persistent storage

PostgreSQL uses postgres_data. Frontend dependencies and generated Astro files use separate named volumes. Stop containers with docker compose down. The --volumes option also deletes persistent data.

## Repository structure

- src and public contain the website.
- services/catalogue_worker contains the Python worker and its Dockerfile.
- pyproject.toml and uv.lock define the Python workspace.
- compose.yaml starts services and defines persistent volumes.

The catalogue worker has the jobs profile and runs on demand. Catalogue snapshots and agent tools will be integrated in subsequent steps.
