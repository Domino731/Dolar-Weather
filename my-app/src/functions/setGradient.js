// this function return the background color which is dependent from weather
// sky - weather conditions

export const setGradient = (sky) => {
    if (sky === "Clouds") {
        return `linear-gradient(#614385, #516395)`
    } else if (sky === "Haze") {
        return `linear-gradient(#42275a, #734b6d)`
    } else if (sky === "Clear") {
        return `linear-gradient(#36d1dc, #5b86e5)`
    } else if (sky === "Snow") {
        return `linear-gradient(#000428, #004e92)`
    } else if (sky === "Rain") {
        return `linear-gradient(#ffd89b, #19547b)`
    } else if (sky === "Thunderstorm") {
        return `linear-gradient(#c33764, #1d2671)`
    }
}