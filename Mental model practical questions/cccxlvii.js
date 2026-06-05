function print(notifications){
notifications.forEach(({message,delay}) =>{
    setTimeout(() =>{
        console.log(message)
    },delay)
})
}
print([
  { message:"You have a new message", delay:1000 },
  { message:"Your download is ready", delay:3000 },
  { message:"Battery is low", delay:2000 },
  { message:"Friend is online", delay:4000 }
])