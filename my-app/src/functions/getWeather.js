const key = `e105d21fb59c10d6ab6a04386a749917`;

export const getCurrent = (set, city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(response => {
            if (response.ok) {
                return response
            }
            set("error")
        })
        .then(response => response.json())
        .then(r => set(r))
        .catch(err => console.log(err))
}
export const getOneCall = (set, lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=${key}`)
        .then(r => r.json())
        .then(r => set(r))
        .catch(err => console.log(err))
}