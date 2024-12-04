<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://github.com/oliveira-mark/open-weather">
    <img src="assets/img/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Open Weather with React.js</h3>

  <p align="center">
    A simple demonstration of an application in React.js consuming an Open Weather API.
    <br />
    <a href="https://bymarcos.com/weather/">View Demo</a>
    ·
    <a href="https://github.com/oliveira-mark/open-weather/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/oliveira-mark/open-weather/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>


## About The Project

[![Weather App Screenshot][product-screenshot]](https://bymarcos.com/weather/)

This project is a weather app built with React.js, TypeScript, Webpack, OpenAPI, ESLint, and Tailwind CSS. It allows users to input a city name and view the current weather, including temperature and weather conditions. Additionally, the app displays the weather forecast for the next 6 hours and the temperature along with the weather for the next 7 days.

Key features:
* **Current Weather:** Displays the temperature and weather conditions for a specific city.
* **6-hour Forecast:** Shows the temperature and weather conditions for the next 6 hours.
* **7-day Forecast:** Displays the maximum and minimum temperatures, as well as the weather conditions, for the upcoming 7 days.

Technologies used:
* **React.js** - For building the user interface.
* **TypeScript** - For type safety and better development experience.
* **Webpack** - For bundling the app and optimizing performance.
* **OpenAPI** - For fetching weather data from Open Weather API.
* **ESLint** - For maintaining code quality and adhering to best practices.
* **Tailwind CSS** - For styling the app in a flexible and responsive way.

Feel free to explore the project, and feel free to contribute if you have suggestions or improvements!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

This section lists the major frameworks and libraries used to build the project. Add-ons and plugins are typically mentioned in the acknowledgements section. Here are the technologies used in this project:

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Webpack][Webpack]][Webpack-url]
* [![ESLint][ESLint]][ESLint-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This guide will help you get a local copy of the project up and running. Follow these simple steps to set up the project locally.

### Prerequisites

Make sure you have the following installed before proceeding:

* **Node.js** and **npm** (Node Package Manager)  
  You can download and install Node.js (which includes npm) from [here](https://nodejs.org/).

* **Git**  
  Ensure you have Git installed to clone the repository. You can install Git from [here](https://git-scm.com/).

### Installation

Follow these steps to install and set up the project locally:

1. Clone the repository  
   ```bash
   git clone https://github.com/oliveira-mark/open-weather.git

2. Navigate to the project directory  
   ```bash
   cd open-weather

3. Set up your Virtual Environment  
    1. Create a `.env` file in the root of the project.
    2. Go to OpenWeather and sign up for a free API key and URL API.
    1. Open the `.env` file in a text editor and add the API key, URL API and URL Public Project:
       ```bash
       REACT_APP_OPENWEATHER_API_KEY=YOUR_API_KEY
       REACT_APP_OPENWEATHER_API_URL=https://api.openweathermap.org/data/
       REACT_APP_PUBLIC_URL=./

3. Install the project dependencies  
   ```bash
   npm install
   ```  
4. Start the development server  
   ```bash
   npm run dev
   ```

## Usage

To use the application, follow these steps:

1. Open the application in your web browser.  
   ```bash
   http://localhost:3000
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>




### Top contributors:

<a href="https://github.com/oliveira-mark/open-weather/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=oliveira-mark/open-weather" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Marcos Oliveira - [@oliveira-mark](https://linkedin.com/in/oliveira-mark/) - hello@bymarcos.com

Project Link: [https://github.com/oliveira-mark/open-weather](https://github.com/oliveira-mark/open-weather)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Here are a few resources that were essential for this project:

* [OpenWeather API](https://openweathermap.org/) - For providing the weather data API.
* [Choose an Open Source License](https://choosealicense.com) - To help you choose an open-source license for your project.
* [Shields.io](https://shields.io) - For creating custom badges for the project.
* [Font Awesome](https://fontawesome.com) - For providing useful icons.
* [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework used for styling the application.
* [React Icons](https://react-icons.github.io/react-icons/search) - For easily integrating icons into the React app.
* [ESLint](https://eslint.org/) - For maintaining code quality and ensuring best practices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[contributors-shield]: https://img.shields.io/github/contributors/oliveira-mark/open-weather.svg?style=for-the-badge
[contributors-url]: https://github.com/oliveira-mark/open-weather/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/oliveira-mark/open-weather.svg?style=for-the-badge
[forks-url]: https://github.com/oliveira-mark/open-weather/network/members
[stars-shield]: https://img.shields.io/github/stars/oliveira-mark/open-weather.svg?style=for-the-badge
[stars-url]: https://github.com/oliveira-mark/open-weather/stargazers
[issues-shield]: https://img.shields.io/github/issues/oliveira-mark/open-weather.svg?style=for-the-badge
[issues-url]: https://github.com/oliveira-mark/open-weather/issues
[license-shield]: https://img.shields.io/github/license/oliveira-mark/open-weather.svg?style=for-the-badge
[license-url]: https://github.com/oliveira-mark/open-weather/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/oliveira-mark/
[product-screenshot]: assets/img/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Webpack]: https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black
[Webpack-url]: https://webpack.js.org/
[ESLint]: https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/
[Tailwind CSS]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com/