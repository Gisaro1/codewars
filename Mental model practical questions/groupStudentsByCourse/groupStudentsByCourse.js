const groupStudentsByCourse = (students) =>{
  const child = new Map()
  for(const student of students){
    if(student.grade > 70){
        for(course of student.courses){
    if(!child.has(course)){
        child.set(course, [])
    }
        child.get(course).push(student.name)
}
    }
  }
return child
}
const students = [
  { name: "Alice", grade: 85, courses: ["Math", "Science"] },
  { name: "Bob", grade: 65, courses: ["Math"] },
  { name: "Charlie", grade: 90, courses: ["Science"] },
  { name: "David", grade: 75, courses: ["Math"] }
];
console.log(groupStudentsByCourse(students));
