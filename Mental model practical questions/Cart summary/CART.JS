const cartSummary = (cart, discount = 0) => {
    let totalQty = 0
    let totalPrice = 0
    let highest = cart[0].price
    let mostExpensive = ""
    let names = new Set()
    for (const { name, price, qty } of cart) {
        names.add(name)
        totalQty += qty
        totalPrice+=price
        if(highest < price ){
            highest = price
        }

        if(highest === price) mostExpensive = name
    }
    discountAmount = (totalPrice * discount) / 100
    finalTotal = totalPrice - discountAmount
    return {
        itemCount: [...names].length,
        totalQty,
        subtotal: totalPrice,
        discountAmount,
        finalTotal,
        mostExpensive
    };
}
console.log(cartSummary([
    { name: "Shoes", price: 120, qty: 2 },
    { name: "Hat", price: 35, qty: 1 },
    { name: "Socks", price: 10, qty: 4 },
    { name: "Jacket", price: 200, qty: 1 },
],10))