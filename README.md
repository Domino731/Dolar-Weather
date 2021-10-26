Hey :), here is the documentation file for my weather app

Below you have the short description of files and what is it for 
////////////////////////////////////////////////////////////////


/////////////////////////ACTIONS


--[folder] actions - folder with actions for reducers

---=> [FILE] searchBar_value-actions.js - by this function you can change the value in reducer(used in navigation component(value from input))



/////////////////////////COMPONENTS

--[folder] components - folder with components

---=> [FILE] ExtendedForecast.js - component who is renders the weather for the next 7 days,
the weather is taken by the [function] getOneCall (used in MainForecast component).

---=> [FILE] MainForecast.js - renders the main content of page, including today's weather and daily weather(by ExtendedForecast component).
the weather is taken by the [function] getCurrent (which takes value from reducer searchBar_value)

---=> [FILE] Navigation.js - renders simple navigation with value, on which the action is superimposed searchBar_value-actions whereby you change
the reducer searchBar_value(responsible for download the weather of a particular location)






/////////////////////////FUNCTIONS


--[folder] functions - folder with functions

---=> [FILE] getDay.js - returns the day of the week (used in ExtendedForecast component)

---=> [file] getIcon.js -  returns an icon that represents the current weather (used in ExtendedForecast, MainForecast components )

---=> [file] getWeather.js 
           -[function] getCurrent - returns the weather for today
           -[function] getOneCall - returns the weather for next 7 days

---=> [file] months&daysArray.js - file with arrays of days and months which are used to display the current date

---=> [file] randomCapital.js - a file with an array of capitals, and the function returns a randomly drawn capital from this array
file with arrays of days and months which are used to display the current date(used in searchBar_value.js)

---=> [file] saveCity.js - This is a function overlaid on the 'heart' in the MainForecast component, 
it has the purpose of saving the currently searched city after a click, which is passed to localStorage and can be displayed in the Navigation component 

---=> [file] setGradient - sets the body background, by current weather (used in MainForecast component)




/////////////////////////REDUCERS


--[folder] reducers - folder with reducers

---=> [file] index.js - file with all reducers

---=> [file] searchBar_value.js - reducer with value that is used to download the weather




/////////////////////////STYLES


--[folder] sass - folder with sass styles

---[folder] elements
  ---=> [file] _extendedForecast.scss - styles for ExtendedForecast component
  ---=> [file] _mainForecast.scss - styles for MainForecast component
  ---=> [file] _navigation.scss - styles for Navigation component

---[folder] generic
  ---=> [file] _refactor.scss - file with container style and setting of body
  ---=> [file] _reset.scss - reset file
  ---=> [file] _variables - file with variables

---[folder] media_querry - file with media queries





