
   /// callback
setTimeout(()=>{
    console.log('waguan in 2sec')
},5000)

// callback hell

setTimeout(()=>{
    console.log('wassup'); // one sec
    setTimeout(()=>{
        console.log('are you good?'); // 2 sec
        setTimeout(()=>{
            console.log('never mind'); // 3 sec
        },3000)
    },2000)
},1000)