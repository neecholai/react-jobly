# Livestack 

## About the application

This repo contains two apps, a create-react-app (deployed on Heroku) for the front-end and a Node API (also deployed on Heroku) for the backend. 

In order to make requests to the backend, user must be registered and logged in so a valid JWT signed can be sent from the create-react-app. 

## Technologies

- Javascript
- Node
- React.js
- Express.js
- React-Bootstrap
- SQL
- PostgreSQL
- Bcrypt
- Axios
- JWT
- JSONSchema
- Jest
- Supertest

## Getting Started with the backend

1. Fork and clone the repository
2. `cd backend`
2. `npm install`
3. `createdb jobly`
4. `createdb jobly-test`
5. `psql jobly < data.sql`
6. `npm start` to start the server

- Create file called `.env` and put the following in it:
`NODE_ENV=development`
`REACT_APP_BASE_URL='http://localhost:3001'`

### Deployed 

The prod api app is live on heroku at: 
https://jobly-neecholai.herokuapp.com

To deploy to prod, make sure you have access to the heroku account and from the root of the repository run 

`git subtree push --prefix backend heroku-backend master`

## Getting Started with the frontend

1. `cd frontend`
2. `npm install`
3. `npm start` to start the server

### Deployed

Frontend and user website is deployed to https://jobly-nicholai.herokuapp.com/ 

To deploy to prod, make sure you have access to the heroku account and from the root of the repository run 

`git subtree push --prefix frontend heroku-frontend master`
