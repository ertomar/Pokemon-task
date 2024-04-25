# Pokemon App

This is a React application that retrieves a list of Pokemon from an external API and allows users to view details of each Pokemon by clicking on them. It uses TypeScript, Redux Toolkit, and RTK Query for state management and data fetching.

## Features

- Displays a list of Pokemon fetched from the API.
- Allows users to click on a Pokemon to view its details.
- Persists data using Redux Toolkit and RTK Query for improved performance.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. Clone the repository:

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

The application requires a base API URL to fetch data from. Create a `.env` file in the root directory and add the following line:

```dotenv
REACT_APP_BASE_API_URL=https://pokeapi.co/api/v2
```

### Running the App

To start the development server, run:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Running Tests

To run unit tests, use:

```bash
npm test
# or
yarn test
```

### Deployment

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

This will create a `build` folder with optimized assets ready for deployment.

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- RTK Query
- Testing Library
- Jest
- Vite

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
