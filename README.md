# Interview for Qoala - Kupay

## Database

A MySQL database has been used. For now, you have to have an existing one. Please write your creentials in backend/src/config/db.config.js

## Backend

Command to start it:
`npm run dev`
### Authentifcation

Authentification is one using passportjs. It's a simple session strategy stored in cookies, ensuring that email exists and password is correct. A local signin strategy has been implemented.
A default user has been created:

email: paul27000@gmail.com
password: test123456

### ORM

Sequelize ORM has been used to generate database model.

## Frontend

Command to start it:
`npm start`