const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months)

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b)
console.log(numbers)

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort((a,b) => a.localeCompare(b))
console.log(words)

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2023, 5, 16)
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2023, 3, 16)
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2023, 12, 16)
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2023, 9, 16)
    },
];
orders.sort((a,b) => b.total - a.total)
console.log(orders)

orders.sort((a,b) => a.date - b.date)
console.log(orders)

