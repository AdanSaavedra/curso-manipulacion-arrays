const item = [1,3,2,3,3,1,10]

const prac =item.reduce((obj,item) =>{
    if(!obj[item]){
        obj[item]= 1
    }else{
        obj[item] = obj[item]+ 1
    }
    return obj
}, {})

console.log(prac)

const data = [
    {
        name:'Nicolas',
        level: 'low'
    },
    {
        name:'Andrea',
        level: 'medium'
    },
    {
        name:'Zulema',
        level: 'high'
    },
    {
        name:'Santiago',
        level: 'low'
    },
    {
        name:'Valentina',
        level: 'medium'
    },
    {
        name:'Lucia',
        level: 'high'
    },
]

const anotherPrac = data
.map(item => item.level)
.reduce((obj,item) =>{
    if(!obj[item]){
        obj[item]= 1
    }else{
        obj[item] = obj[item]+ 1
    }
    return obj
}, {})
console.log(anotherPrac)


const nums  = [1,3,4,6,7,8,9,3,7,10,2]

nums.reduce(numero => {
    
})
const challenge = nums
.filter(num => num >=1 && num<=5)
console.log(challenge)