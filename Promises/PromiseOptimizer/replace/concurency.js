const limitAsync= async(tasks, limit) => {
    let index = 0;
    const result = new Array(tasks.length);
    const helper = async() => {
        while(index < tasks.length){
            const currentIndex = index++;
            const task = tasks[currentIndex];

            try{
                const response = await fetch(task);
                if(!response.ok) throw new Error(`Oops something went wrong at: ${response.status}`)
                    const data = await response.json()
                    result[currentIndex] = {status:"fullfilled", value:data}
            } catch(error){
                result[currentIndex] = {status:"rejected", reason:error}
            }
        }
    };
    const worker = [];
    for(let i = 0; i < limit;i++){
        worker.push(helper());
    }
    await Promise.any(worker)
    return result
}
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/",
  "https://jsonplaceholder.typicode.com/todos/5"
];
console.log(await limitAsync(urls,2))