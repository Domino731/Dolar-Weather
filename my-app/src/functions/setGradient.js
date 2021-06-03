// this function return the background color which is dependent from weather
// sky - weather conditions

export const setGradient = (sky) => {
    if (sky === "Clouds") {
        return `linear-gradient(#614385, #516395, #614385)`
    } else if (sky === "Haze") {
        return `linear-gradient(#42275a, #734b6d, #42275a)`
    } else if (sky === "Clear") {
        return `linear-gradient(#36d1dc, #5b86e5, #36d1dc)`
    } else if (sky === "Snow") {
        return `linear-gradient(#000428, #004e92, #000428)`
    } else if (sky === "Rain") {
        return `linear-gradient(#ffd89b, #19547b, #ffd89b)`
    } else if (sky === "Thunderstorm") {
        return `linear-gradient(#c33764, #1d2671, #c33764)`
    }
}