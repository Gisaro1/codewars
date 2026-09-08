function limitAsync(tasks, limit) {
  const result  = new Array(tasks.lenght)
  let flight = 0;
  let nextIndex = 0;
  return new Promise((res,rej) => {
    const helper = () => {
      while(flight < limit && nextIndex < tasks.length){
        const currentIndex = nextIndex
        const task = tasks[currentIndex]
        flight++;
        nextIndex++;
        fetch(task)
            .then((res) => {
                if(!res.ok) throw new Error(`Oops ${res.status}`)
                    return res.json();
            })
            .then(data => {
                result[currentIndex] = {status:"fullfilled", value:data}
            })
            .catch(err => {
                result[currentIndex] = {status:"rejected", value:err}
            })
            .finally(() => {
                flight--;
                if(nextIndex < tasks.lenght){
                    helper()
                } else if(flight === 0){
                    res(result)
                }
            })
      }
    }
    helper();
    helper();
  })
}
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5"
];
limitAsync(urls,3).then(console.log)