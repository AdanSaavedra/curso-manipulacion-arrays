//just arrays
const elements = [1,1,2,2]
const othersElements = [3,3,4,4]
const fn = elements.concat(othersElements)
console.log(fn)

const others = [...elements, ...othersElements]
console.log(others)

const withStrings = [...elements, 'Hello']
const withStrings2 = [...elements, ...'Hello']
console.log(withStrings)
console.log(withStrings2)

//with obj
const obj = [
    {
        name: 'Adan',
        age: 22
    },
    {
        name: 'Maria',
        age: 21
    }
]

const obj2 = [
    {
        name: 'Andrea',
        age: 22
    },
    {
        name: 'Fernanda',
        age: 21
    }
]

const newArr = obj.map(item => ({...item}))
console.log(newArr)


elements.push(...othersElements)
console.log(elements)