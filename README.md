# Dollar Weather App 
This is my first project - weather application written with react, with the ability to save your favorite places to local storage.
## Technology
* JavaScript
* Sass
* React
* React Redux
* OpenWeather API - https://openweathermap.org/api

## Components
* `Navigation` - responsible for navigation bar with search input by which user can search for particular place. There is also list with saved places.
* `MainForecast` - component which is rendering main content on site. Includes current weather, and forecast for next 7 days ( there is nested `ExtendedForecast` component)
* `ExtendedForecast` - rendering weather forecast for next 7 days
## Available Functions
* `checkIsSaved()` - this function is checking if particular place name has been saved in local storage ('savedPlaces'). This function is used in `MainForecast` component to detect if user has already saved searched place name. If he has, then color of the button (hearth icon) which is responsible for saving new place, will be white with red box shadow, otherwise will be red
* `getBackgroundData()` - this function is returning data about background which is relates to the current weather. Data is including source of background and freepik author attribute. This function is used in `MainForecast` component in order to set body background and create glass effect. 
* `getDay()` - this function is returning name of the particular day. He's needed to set day names in `ExtendedForecast` component beacuse `getDailyWeather` function is returning data about weather with raw timestamp so it's needed to format this timestamp in this function and return appropriate day name.
* `getIcon()` -  get image which is representing current weather. Used in `MainForecast` component and `ExtendedForecast` to display weather icon. 
* `getRandomCapital()` - returning random capital name. Used in redux reducer - `searchBarValue`. This value is passed into `MainForecast` props, so this component can fetch data about this random place -> when the user opens this application the weather forecast of this random capital will be shown in `MainForecast` component. 
* `getSavedPlaces()` - returning array with names of saved places from local starage ('savedPlaces').
* `getDailyWeather()` - fetch data about weather forecast for next 7 days in particular place. Used in `ExtendedForecast` component
* `getCurrentWeather()` - fetch data about current weather in particular place, used in `MainForecast` component.
## React Redux structure
### ***Reducers***
* `savedPlaces` - array with names of saved places from local storage (sorted alphabetically). Base on this array `Navigation` component will be rendering list with saved places.
* `searchBarValue` - string which is representing name of searched place. Initially it is random place (`getRandomCapital() function`). This value is changing by entering new place name in input in `Navigation` component by `searchSpecificPlace()` function. This value is passed into `MainForecast` component in order to fetch weather forecast data about this searched place. 
### ***Actions***
* `changeSavedPlaces()` - change array with saved places in redux state
* `changeSavedPlaces()` - change searchBarValue in redux state

## Local storage data structure
* `savedPlaces` - list of saved places