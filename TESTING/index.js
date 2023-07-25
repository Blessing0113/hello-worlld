// 

const test_1 = 30
const test_2 = 50
const assignment = 10
const project = 10

const test_1_marks = parseFloat(prompt("Enter your Test 1 marks :"))
const test_2_marks = parseFloat(prompt("Enter your Test 2 marks : "))
const assignment_marks = parseFloat(prompt("Enter your Assignment marks : "))
const project_marks = parseFloat(prompt("Enter your Project mark : "))

const daily_average_mark = (test_1_marks) + (test_2_marks) 
    + (assignment_marks) +  (project_marks)

console.log("Daily_average_mark", daily_average_mark/100*100 +"%")

if (daily_average_mark >= 50) {
  console.log("Congradulaions! You qualify to write the Exam")
} else {
  console.log("You do not qualify to write the exam")
 }

