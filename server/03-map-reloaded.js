const orders = [
    {
        customerName: 'Maria',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Sofia',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Adan',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    },
]

console.log(orders)
const newArr = orders.map(item => item.total)
console.log(newArr)

// const anotherArr = orders.map(item =>{
//     item.tax = .19
//     return item
// })
// console.log(anotherArr)

const lastArr = orders.map(item =>{
    return {
        ...item, tax: .19
    }
})
console.log(lastArr)
console.log(orders)