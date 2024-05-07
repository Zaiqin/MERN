# MERN

A mini project to test out the MERN stack from https://www.mongodb.com/resources/languages/mern-stack-tutorial

## Features

- Create Employee data
- Edit and Delete Employee data

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/Zaiqin/MERN.git
   ```

2. Install dependencies:

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. Configure environment variables:

   - Create a `.env` file in the `server` directory.
   - Define necessary environment variables, such as database connection strings and API keys.

4. Start the backend server:

   ```bash
   cd server
   node --env-file=config.env server
   ```

5. Start the frontend development server:

   ```bash
   cd client
   npm run dev
   ```

5. Access the application in your browser

## Deployment

This project is also deployed on Vercel

- Frontend: (https://mern-client-eight-nu.vercel.app/)
- Backend: (https://mern-server-theta.vercel.app/)
