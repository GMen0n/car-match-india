import os

import psycopg


def main() -> None:
    database_url = os.environ["DATABASE_URL"]

    with psycopg.connect(database_url) as connection:
        with connection.cursor() as cursor:
            cursor.execute(
                """
                SELECT current_database(), extversion
                FROM pg_extension
                WHERE extname = 'vector'
                """
            )
            result = cursor.fetchone()

    if result is None:
        raise RuntimeError("The vector extension is missing.")

    database_name, vector_version = result

    print(f"Connected to database: {database_name}")
    print(f"pgvector version: {vector_version}")


if __name__ == "__main__":
    main()
