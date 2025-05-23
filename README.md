# React Router Project

This project demonstrates the use of **React Router** in a React application built with Vite. Below is an overview of the features and routing logic implemented:

## Features

- **Navigation Bar with Active States:**  
  The app includes a navigation bar with links to the Home and About pages. The active link is visually highlighted using styles.

- **Home Page (`/`):**  
  - Displays Vite and React logos.
  - Includes a counter button.  
  - When the counter reaches 3, the user is automatically redirected to the Thank You page.

- **About Page (`/about`):**  
  - Provides information about React and Vite.

- **Thank You Page (`/thankyou`):**  
  - Users are redirected here from the Home page after clicking the counter button three times.

## Routing

- Navigation between pages is handled using **React Router**.
- The `NavLink` component is used for navigation, enabling active link styling.
- The `useNavigate` hook is used to programmatically redirect users when the counter reaches 3.

## How It Works

1. **Navigation:**  
   Users can navigate between Home and About pages using the navigation bar.

2. **Counter Redirect:**  
   On the Home page, clicking the counter button increases the count. When the count reaches 3, the app uses `useNavigate` to redirect the user to the Thank You page.

3. **Active Link Styling:**  
   The navigation bar highlights the currently active page for better user experience.

---

This project is a simple demonstration of client-side routing and navigation logic using React Router in a Vite-powered React app.