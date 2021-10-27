/**
 * array with random capitals
 */
const randomCapitals = [`Berlin`, `Budapest`, `London`,`Madrid`, `Oslo`, `Stockholm`, `Warsaw`, `Paris`,
`Zagreb`, `Rome`, `Luxembourg`, `Bucharest`, `Athens`, `Belgrade`, `Lisbon`, `washington`, `Ottawa`, `Pekin`,
    `Tokio`, `New Delhi`
];

/**
 * function returning random capital name from randomCapitals array(using searchBar_value)
 * @returns {string} - random capital name
 */
export const getRandomCapital = () =>{
    return randomCapitals[Math.floor(Math.random() * 20)];
}
