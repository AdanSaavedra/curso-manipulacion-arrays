const words = ['spray', 'limit', 'elite', 'exuberant']

const wordFilter = words.filter(item => item.length >= 6)
console.log(wordFilter)
console.log(words)

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
    {
        customerName: 'Maria',
        total: 2322,
        delivered: false
    },
    {
        customerName: 'Martina',
        total: 2133,
        delivered: true
    }
]

const orderFilter = orders.filter(item => item.delivered && item.total >=100)
console.log(orderFilter)

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search('Mar'))