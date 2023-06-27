const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndex2 = productsV2.findIndex(item => item.id=== update.id)
const productsV3 = {
    ...productsV2[productIndex2],
    ...update.changes
}
console.log(productsV3)