const classroom = {
  students: ["Alice", "Bob", "Charlie"],
  *[Symbol.iterator](){
    for(const student of this.students){
        yield student
    }
  }
  }
  for(const name of classroom){
    console.log(name)
  }