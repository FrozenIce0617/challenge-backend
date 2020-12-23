<h1 align="center">Take-Home Test (Backend)</h1>

## ⚙️ Core technologies

- Framework - [Express](https://expressjs.com/)
- ORM for DB - [Sequelize](https://sequelize.org/)
- Static type checking - [Typescript](https://www.typescriptlang.org/)
- Endpoint Testing - [Jest & Supertest](https://jestjs.io/)
- Database - [PostgreSQL](https://www.postgresql.org/)

## ☘️ Environment Setup

### Prerequisite

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/) (version 10 or greater)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/) (version 1.5 or greater)
- [Docker](https://www.docker.com/)

### Step 1

Copy `.env.template` and replace with real variables.

### Step 2

Install all dependencies with `yarn add` (or `npm install`).

### Step 3

Start all services (Postgres, pgAdmin) defined in `docker-compose.yml` with `docker-compose up` command.

### Additional Scripts

- `yarn test` - Run all tests for endpoints, and services
