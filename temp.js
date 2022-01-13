const shoppingList = Object.freeze([
    { itemName: "rice", shop: "dwawd", price: 10 },
    { itemName: "steak", shop: "hdrgrdg", price: 45 },
    { itemName: "wine", shop: "hfhfh", price: 74 },
    { itemName: "sauce", shop: "thfhfth", price: 24 },
])

const newYearSale = shoppingList
    .filter(item => item.price < 40)
    .map(item => ({ itemName: item.itemName, shop: item.shop, price: item.price }) )

console.log(newYearSale)