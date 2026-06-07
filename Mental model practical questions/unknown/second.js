function createReport(orders){
    let uniqueProduct = []
for(let char of orders){
if(!uniqueProduct.includes(char.product)){
    uniqueProduct.push(char.product)
    }
}
return {
    uniqueProduct:uniqueProduct,firstProduct:uniqueProduct[0],totalUnique:uniqueProduct.length
}
}

console.log(createReport([
  { customer:"Ali", product:"Laptop" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Laptop" },
  { customer:"John", product:"Keyboard" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Monitor" }
]))