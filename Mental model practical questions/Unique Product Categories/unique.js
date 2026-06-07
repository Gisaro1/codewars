const unique = products =>{
const total = [];
for(const {category} of products){
if(!total.includes(category)){
    total.push(category)
}
}
const kaset = new Set(total)
return{
  categories: [...kaset],
  firstCategory: total[0],
  total: kaset.size
}
}

console.log(unique([
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Mouse", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
  { name: "Phone", category: "Electronics" }
]))