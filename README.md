# Dartsee assignment

Full-stack project for the Dartsee developer application: a **NestJS** API (TypeScript) and a **React** app built with **Vite**, backed by **PostgreSQL**. The database was recreated from the provided SQL (`env/sql`).

## Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Backend  | NestJS, TypeScript, Prisma, Swagger |
| Frontend | React, Vite, TanStack Router/Query  |
| Database | PostgreSQL                          |


## Database setup

1. In the **`env`** folder, create a local env file from the example and fill in the values:

   ```bash
   cd env
   cp .env.example .env
   ```

   Edit **`env/.env`** and set `POSTGRES_USER`, `POSTGRES_PASSWORD`, and `POSTGRES_DB`.

2. Start PostgreSQL with Docker Compose:

   ```bash
   docker compose up -d
   ```

   On the first run, `schema.sql` and `data.sql` are applied automatically. Use the same user, password, and database name in `packages/backend/.env` as `DATABASE_URL`.

## Configuration

1. From the repo root, install dependencies:

   ```bash
   npm install
   ```

2. Configure the **backend**:

   ```bash
   cp packages/backend/.env.example packages/backend/.env
   ```

   Edit **`packages/backend/.env`**: set `DATABASE_URL` to your Postgres connection string. With the Docker database, use the user, password, and database from **`env/.env`**.

3. Configure the **frontend**:

   ```bash
   cp packages/frontend/.env.example packages/frontend/.env
   ```

   Edit **`packages/frontend/.env`** and set **`VITE_BACKEND_BASE_URL`** to the API origin the browser should call, e.g. `http://localhost:3000`.


## Running the app

From the **repository root**:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the application (backend and frontend):

   ```bash
   npm run start
   ```

   This runs code generation (Prisma client + OpenAPI client for the frontend), then starts both dev servers together.

