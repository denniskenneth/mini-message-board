# Mini Message Board

A simple message board web app built with Node.js and Express, as part of [The Odin Project](https://www.theodinproject.com/) Node.js curriculum.

## Features

- View all messages on the home page
- Open individual messages on a dedicated detail page
- Submit new messages via a form

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express 5
- **Templating:** EJS
- **Styling:** Plain CSS

## Project Structure

```
src/
├── app.js                  # Express app setup and middleware
├── server.js               # Entry point, starts the server
├── controllers/
│   └── indexController.js  # Route handler logic
├── routers/
│   └── indexRouter.js      # Route definitions
├── services/
│   └── messageService.js   # Message data and helpers
└── views/
    ├── index.ejs           # Home page (message list)
    ├── addForm.ejs         # New message form
    ├── messageDetail.ejs   # Single message detail page
    └── partials/
        ├── head.ejs
        ├── nav.ejs
        └── footer.ejs
public/
└── styles.css
```

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone <repo-url>
cd mini-message-board
npm install
```

### Environment Variables

Create a `.env` file in the root:

```
PORT=3000
```

### Running the App

```bash
# Development (with auto-reload)
npm run dev

# Production
node src/server.js
```

The app will be available at `http://localhost:3000`.

## Routes

| Method | Path           | Description              |
|--------|----------------|--------------------------|
| GET    | `/`            | List all messages        |
| GET    | `/new`         | Show new message form    |
| POST   | `/new`         | Submit a new message     |
| GET    | `/message/:id` | View a message's details |
