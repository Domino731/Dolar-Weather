
export const saveCity = (city) => {
    if (localStorage.getItem("savedCities") === null) {
        localStorage.setItem("savedCities", `[]`)
    }
    let oldData = JSON.parse(localStorage.getItem("savedCities"))
    if (oldData.includes(city)) {
        console.log(`You already have saved this city`)
    }
    else{
        console.log(`City saved :)`)
        oldData.push(city)
        localStorage.setItem("savedCities", JSON.stringify(oldData))
    }
}
