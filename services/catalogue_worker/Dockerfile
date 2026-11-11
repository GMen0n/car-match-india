FROM python:3.12-slim AS development

COPY --from=ghcr.io/astral-sh/uv:0.9.5 /uv /usr/local/bin/uv

WORKDIR /app

ENV UV_PROJECT_ENVIRONMENT=/opt/venv
ENV PYTHONUNBUFFERED=1

COPY . .

RUN uv sync --frozen --package catalogue-worker

CMD ["uv", "run", "--frozen", "--package", "catalogue-worker", \
     "python", "services/catalogue_worker/check_db.py"]
