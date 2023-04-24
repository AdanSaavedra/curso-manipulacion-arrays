const numbers = [1,30,39,29,10,13]

const fn = numbers.every(item => item <= 40)

console.log(fn)

const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 8,
    },
    {
        name: "Zulema",
        age: 2,
    },
    {
        name: "Santiago",
        age: 13,
    },
];

const anotherFn = team.every(item => item.age < 15)
const message = anotherFn ? 'Equipo valido' : 'Solo se aceptan jugadores menores de 15 años'
console.log(anotherFn)
console.log(message)
