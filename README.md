# Interview Practice Tracker

A simple and responsive dashboard to track weekly interview preparation.

## Features

- Dashboard with question statistics
- Add questions with category, difficulty and status
- Search questions by name
- Filter questions by category, status and difficulty
- Update question status
- Delete questions
- Track overall completion progress
- Mark machine coding as completed or pending
- Save data using LocalStorage
- Responsive design for desktop and mobile
- Form validation and empty state

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- JavaScript
- LocalStorage

## How to Run Locally

1. Clone this repository.
2. Open the project folder in the terminal.
3. Install dependencies:

   npm install

4. Start the development server:

   npm run dev

5. Open the local URL shown in the terminal.

## Data Storage

The application uses browser LocalStorage to save questions and machine coding status.

## Assumptions

- The application does not require a backend.
- Data is saved in the current browser's LocalStorage.
- Questions can have DSA, Git, or Technical categories.
- Each question can be Pending, In Progress, or Completed.