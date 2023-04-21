const nums  = [1,3,4,6,7,8,9,3,7,10,2]

const pract = nums.reduce((obj, value) => {
    if(value < 6) obj['1-5'] +=1;
    else if(value < 9) obj['6-8'] += 1;
    else obj['9-10'] +=1;

    return obj
},{
    '1-5':0,
    '6-8': 0,
    '9-10': 0
})

console.log(pract)