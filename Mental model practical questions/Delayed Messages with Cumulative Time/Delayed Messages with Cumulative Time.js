const displayCumulativeMessages = messages =>{
    let total = 0
    for(let {text,duration} of messages){
        total += duration;
        const currentS = total
        setTimeout(()=>{
            console.log(`(After ${currentS/1000}s)${text} `)
        },total)
    }
}
displayCumulativeMessages([
  { text: "Step 1: Preparing data", duration: 2000 },
  { text: "Step 2: Processing", duration: 3000},
  { text: "Step 3: Finalizing", duration: 1000},
  { text: "Step 4: Done!", duration: 2000 }
])