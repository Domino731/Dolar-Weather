export const setGradient = (sky) => {
    if(sky === "Clouds"){
        return `linear-gradient(1deg, rgba(6, 15, 46, 1) 0%, rgba(18, 78, 190, 1) 74%, rgba(105, 121, 217, 1) 100%)`//
    }
    else if (sky === "Haze"){
        return `linear-gradient(1deg, rgba(28, 45, 63, 1) 0%, rgba(51, 105, 163, 1) 50%, rgba(52, 82, 163, 1) 100%)`//
    }
    else if (sky === "Clear"){
        return `linear-gradient(1deg, rgba(15, 90, 123, 1) 0%, rgba(21, 103, 255, 1) 50%, rgba(9, 228, 255, 1) 100%)`//
    }
    else if (sky === "Snow"){
        return `linear-gradient(1deg, rgba(34, 57, 110, 1) 0%, rgba(0, 150, 212, 1) 50%, rgba(130, 238, 215, 1) 100%)`//
    }
    else if (sky === "Rain"){
        return `linear-gradient(1deg, rgba(7, 0, 86, 1) 0%, rgba(28, 4, 143, 1) 74%, rgba(17, 16, 207, 1) 100%)` //
    }
    else if (sky === "Thunderstorm") {
        return `linear-gradient(1deg, rgba(29, 20, 137, 1) 0%, rgba(153, 56, 233, 1) 74%, rgba(113, 16, 207, 1) 88%)`
    }
}