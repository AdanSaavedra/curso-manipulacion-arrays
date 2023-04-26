const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
const matriz2 = [
    [1,[2],3],
    [4,5,[6]],
    [[7,8,9]]
]

const fn = matriz.flat(1)
console.log(fn)

const fn2 = matriz2.flat(2)
console.log(fn2)