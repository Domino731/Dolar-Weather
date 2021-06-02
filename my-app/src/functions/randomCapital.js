const randomCapitals = [`Berlin`, `Budapest`, `London`,`Madrid`, `Oslo`, `Stockholm`, `Warsaw`, `Paris`,
`Zagreb`, `Rome`, `Luxembourg`, `Bucharest`, `Athens`, `Belgrade`, `Lisbon`, `washington`, `Ottawa`, `Pekin`,
    `Tokio`, `New Delhi`
]
export const getRandomCapital = () =>{
    return randomCapitals[Math.floor(Math.random() * 20)]
}
