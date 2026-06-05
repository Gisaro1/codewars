const notifications= [
  { message:"You have a new message", delay:1000 },
  { message:"Your download is ready", delay:3000 },
  { message:"Battery is low", delay:2000 },
  { message:"Friend is online", delay:4000 }
];

setTimeout(()=>{
    console.log(notifications[0].message)
},notifications[0].delay)
setTimeout(()=>{
    console.log(notifications[1].message)
},notifications[1].delay)
setTimeout(()=>{
    console.log(notifications[2].message)
},notifications[2].delay)
setTimeout(()=>{
    console.log(notifications[3].message)
},notifications[3].delay)