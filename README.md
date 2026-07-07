# Subscription Tracker Backend

A backend REST API for managing subscriptions with secure authentication, email reminders, and workflow automation.

## Features

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcrypt
* MongoDB Atlas Database
* Create Subscription
* Get User Subscriptions
* Email Reminder System
* Upstash Workflow Integration
* Nodemailer Email Notifications
* Error Handling Middleware
* Protected Routes

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* bcrypt
* Nodemailer
* Upstash Workflow
* Arcjet

## Installation

```bash
npm install
```

## Run

```bash
npm run dev
```

## Environment Variables

Create a `.env.development.local` file and add:

* MONGO_URI
* JWT_SECRET
* JWT_EXPIRES_IN
* EMAIL_USER
* EMAIL_PASSWORD
* QSTASH_TOKEN
* QSTASH_CURRENT_SIGNING_KEY
* QSTASH_NEXT_SIGNING_KEY
* SERVER_URL
* ARCJET_KEY

## API Endpoints

### Authentication

* POST /api/v1/auth/sign-up
* POST /api/v1/auth/sign-in

### Subscriptions

* POST /api/v1/subscriptions
* GET /api/v1/subscriptions/user/:id

### Workflow

* POST /api/v1/workflows/subscriptions/reminder

## Author

Divya Srita
