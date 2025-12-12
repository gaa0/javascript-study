const orders = [
  { id:1, productId:1, qty:2 },
  { id:2, productId:2, qty:1 },
  { id:3, productId:1, qty:3 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        const key = obj[property];
        if (!acc[key]) acc[key] = [];
        acc[key].push(obj);
        return acc;
    }, {});
}

console.log(groupBy(orders, "productId"));