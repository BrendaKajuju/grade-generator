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
      } else if (marks = Number.NaN) {
       grade = "You have not entered a grade"
      }else {
        grade = "E";
      }
      document.getElementById("output").innerHTML = `Your grade is: ${grade}`;
      }
      else {
      grade = alert("Invalid input. Please enter a value between 0 and 100.");
            }
    }
  
  function demerit () {
    const speed = document.getElementById("speed").value;
    let points;
    if (speed >= 0 && speed <=70) {
      document.getElementById("output1").innerHTML = "OK";
     } 
    else if (speed > 70) {
          points = Math.floor ((speed -70) / 5);
          if (points >= 12) {
            document.getElementById("output1").innerHTML = `License Suspended. Demerit points = ${points}`;
          }
          else {
            document.getElementById("output1").innerHTML = `Demerit points: ${points}`;
          }
        }
    else {
      points = alert("Invalid input. Please enter your speed again"); 
               }

          }
  