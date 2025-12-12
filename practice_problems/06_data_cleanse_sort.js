const prices = [
  { id: 1, price: 100, tag: null },
  { id: 2, price: -20, tag: "X" },
  { id: 3, price: 300, tag: "Y" }
];

const cleansedPrices = prices.filter(item => item.tag && item.price > 0)
.sort((a, b) => a.price - b.price);

console.log(cleansedPrices);
