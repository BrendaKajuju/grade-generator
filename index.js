// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
function getGrade() {
    const marks = document.getElementById("marks").value;
    let grade;
    if (marks >= 0 && marks <= 100) {
      if (marks > 79) {
        grade = "A";
      } else if (marks >= 60 && marks <= 79) {
        grade = "B";
      } else if (marks >= 50 && marks <= 59) {
        grade = "C";
      } else if (marks >= 40 && marks <= 49) {
        grade = "D";
      } else {
        grade = "E";
      }
      document.getElementById("output").innerHTML = `Your grade is: ${grade}`;
      }
      else {
      prompt("Invalid input. Please enter a value between 0 and 100.");
    }
  }
