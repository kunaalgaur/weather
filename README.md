# Weather App with Next.js

This is a simple Weather App built with Next.js that allows users to check the current weather conditions for a specific location by providing latitude and longitude coordinates.

## Features

-   Fetches weather data from a Weather API.
-   Displays current weather information, including temperature, weather conditions, and more.
-   Handles error messages gracefully.
-   Easy-to-use custom React hook for fetching weather data.

## Getting Started

These instructions will help you set up and run the Weather App on your local machine.

### Prerequisites

Before you begin, make sure you have the following software installed:

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/kunaalgaur/weather.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app
    ```

3. Install project dependencies:

    If you're using npm:

    ```bash
    npm install
    ```

    If you're using Yarn:

    ```bash
    yarn install
    ```

### Configuration

To configure the Weather App, you'll need to set up environment variables for the Weather API. Create a `.env.local` file in the project root and define the following variables:

```dotenv
NEXT_API=https://api.weatherapi.com/v1
NEXT_API_KEY=your_weather_api_key_here
```

Replace `your_weather_api_key_here` with your actual Weather API key.

### Usage

To start the development server, run the following command:

```bash
npm run dev
```

The Weather App will be available at [http://localhost:3000](http://localhost:3000).

### Customization

You can customize this Weather App to fit your specific requirements by modifying the components and styles in the project.

## Built With

-   [Next.js](https://nextjs.org/) - The React framework for building web applications.
-   [Axios](https://axios-http.com/) - For making HTTP requests.
-   [React Hot Toast](https://react-hot-toast.com/) - For displaying toast notifications.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Thanks to [Weather API Provider](https://www.example.com/weather-api) for providing the weather data.
