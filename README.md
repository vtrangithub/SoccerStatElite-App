# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# SoccerStat Elite

## Public URL

Visit the deployed SoccerStat Elite application at (https://deployment-url).

## Project Summary

SoccerStat Elite is a React-based web application that provides users with up-to-date soccer statistics, including team statistics, league standings, and more. It utilizes the API Sports football data to fetch and display the statistics. The app is designed with React Router for navigation, Material UI for styling, and includes unit testing to ensure reliability.

## Evaluation

### What worked well in this project?

Implementing React components and using React Router for navigation was straightforward. Fetching data from the external API and integrating it with the app's state management provided a seamless experience. The Material UI library facilitated the styling process, making the app look more professional.

### What didn't work well?

Understanding and handling the asynchronous nature of API calls was initially challenging. Managing state across multiple components and ensuring the app's responsiveness across different devices required extra effort and fine-tuning.

### What changes would you make to this project now that it's deployed?

Post-deployment, I would focus on optimizing the application's performance, particularly in how it handles data fetching and state management. Enhancing the caching mechanism to reduce redundant API calls would be a priority.

### What would you improve and/or add to this project now that it's deployed?

Future improvements would include adding more interactive elements, such as charts or graphs for visualizing the statistics. Integrating user authentication to allow personalized experiences, such as favorite teams or leagues, would significantly enhance user engagement. Additionally, expanding the unit testing suite to cover more components and user interactions would improve the app's reliability and maintainability.

## Unit Testing

This project incorporates unit testing to ensure that components behave as expected. Follow these instructions to execute the unit tests:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and npm installed on your machine. These are required to run the tests and the application itself.

### Running Tests

1. **Open a Terminal:** Navigate to the project's root directory in your terminal or command prompt.

2. **Install Dependencies:** If you haven't already, install the project dependencies with the command:

   ```bash
   npm install

   ```

3. **Run test:**
   ```bash
     npm run test
   ```
