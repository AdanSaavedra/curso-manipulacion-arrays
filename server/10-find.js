const numbers = [1,30,49,29,10,13]

const fn = numbers.find(item => item === 30)
console.log(fn)

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const anotherFn = products.find(item => item.id === '🌭')
console.log(anotherFn)

const anotherFn2 = products.findIndex(item => item.id === '🌭')
console.log(anotherFn2)