const classroom = {
  students: ["Alice", "Bob", "Charlie"],
  [Symbol.iterator](){
    let index = 0
    const names = this.students
    return{
        next(){
            if(index < names.length){
                return{
                    value:names[index++],
                    done:false
                }
            }
              return{done:true}
        }
    }
  }
}
  for(const name of classroom){
console.log(name)
  }