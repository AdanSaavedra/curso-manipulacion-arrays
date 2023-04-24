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
