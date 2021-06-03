// saving the specific city in local storage
// function superimposed on the button in MainForecast component
// city - name of city
export const saveCity = (city) => {
    if (localStorage.getItem("savedCities") === null) {
        localStorage.setItem("savedCities", `[]`)
    }

    let oldData = JSON.parse(localStorage.getItem("savedCities"))
    // if you already have this city in local storage, dont save
    if (oldData.includes(city)) {
        console.log(`You already have saved this city`)
    }
    // if you dont have this city in local storage, save
    else{
        console.log(`City saved :)`)
        oldData.push(city)
        localStorage.setItem("savedCities", JSON.stringify(oldData))
    }
}
