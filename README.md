# Portfolio Website

## Description
A full-stack portfolio website built with Next.js, TypeScript, SQLite, and TypeORM.

## Local Development
1. Clone the repository.
2. Install dependencies: `npm i`
3. Create a `.env` file with `DATABASE_URL=./portfolio.db` (copy from `.env.example` if needed).
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Docker Deployment
1. Build the Docker image: `docker-compose build`
2. Run the container: `docker-compose up -d`
3. The app will be available at [http://localhost:3000](http://localhost:3000)

## API Endpoints
- POST /api/contact: Submit contact form.
- GET /api/projects: Get all projects.

## Database
SQLite database is used. Ensure the data directory is persisted if using Docker.

## Notes
- For production, set `synchronize: false` in `lib/database.ts` and use migrations.
- Add a profile image to `public/profile.jpg` for the home page.