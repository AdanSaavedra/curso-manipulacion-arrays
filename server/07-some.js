
const numbers = [1,2,3,4]

const fn = numbers.some(item => item % 2 === 0)
console.log(fn)

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

const anotherFn = orders.some(item => item.total < 61)
console.log(anotherFn)

import { areIntervalsOverlapping } from 'date-fns'

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 24),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30)
}


const isOverLap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
        )
    })
}

console.log('is overlap:', isOverLap(newAppointment))