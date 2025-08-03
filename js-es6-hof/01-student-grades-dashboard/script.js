// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];


console.log("Uppercase Student Names:");
students.forEach(student => {
  console.log(student.name.toUpperCase());
});


console.log("\nStudents with grade ≥ 85:");
const topStudents = students.filter(({ grade = 0 }) => grade >= 85);
topStudents.forEach(student => {
  console.log(`${student.name}: ${student.grade}`);
});


const totalGrade = students.reduce((sum, { grade = 0 }) => sum + grade, 0);
const averageGrade = totalGrade / students.length;
console.log(`\nAverage Grade: ${averageGrade.toFixed(2)}`);


function displayStudent({ name, grade = 0 }) {
  return `Student: ${name}, Grade: ${grade}`;
}


console.log("\nFormatted Student Display:");
students.forEach(student => {
  console.log(displayStudent(student));
});
