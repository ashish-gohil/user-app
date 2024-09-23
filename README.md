# React User Management Application

This project is a React application built with TypeScript that interacts with a backend API to manage user data. The application features a user list display, a form for adding new users, and routing for navigation between pages.

## Features

- **Fetch User List**: Retrieve and display a list of users from the `/users` API endpoint in a table format.
- **User Submission Form**: A form component that allows users to submit their name, email, and age. On submission, the data is sent to the backend API, and the state is updated to reflect the new user.
- **Routing**: Navigate between a Home page and a Users page using React Router.
- **State Management**: Utilize Redux Toolkit for managing application state.
- **Styling**: Use Tailwind CSS for a responsive and modern design.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static type checking to JavaScript.
- **Redux Toolkit**: A standardized way to write Redux logic.
- **React Router**: For routing and navigation between components.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Setup Instructions

To set up and run the application locally, follow these steps:

Set API_ENDPOINT environment variable which is use for API.

### 1. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 2. Start the Development Server

Run the application in development mode:

```bash
npm run dev
```

Application runs at http://localhost:5173

For API endpoints refer **2_Express project** and provide API_ENDPOINT of that server, as it is useed to setup APIs for this project.