// Challenge 1: Student Grade Generator
function getGrade() {
  const marks = document.getElementById("marks").value;
  let grade;
  // Conditional statement to make sure marks are within the given range.
  if (marks >= 0 && marks <= 100) {
    // Conditional statement to define the grade obtaines based on marks.
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
    }
    else {
      grade = "E";
    }
    // Relay the grade to the user
    document.getElementById("output").innerHTML = `Your grade is: ${grade}`;
  }
  else {
    // Deal with invalid input
    let grade = alert("Invalid input. Please enter a value between 0 and 100.");
        }
  }

// Challenge 2: Speed Detector
function demerit () {
  const speed = document.getElementById("speed").value;
  let points;
  // Conditional statement to define our speed limit ranges and expected outputs
  if (speed >= 0 && speed <= 70) {
    document.getElementById("output1").innerHTML = "OK";
  } else if (speed > 70) {
    points = Math.floor ((speed -70) / 5);
    if (points >= 12) {
      document.getElementById("output1").innerHTML = `License Suspended. Demerit points = ${points}`;
    } else {
      // Output the number of demerits to user
      document.getElementById("output1").innerHTML = `Demerit points: ${points}`;
    }
  } else {
    // Deal with invalid input
    points = alert("Invalid input. Please enter your speed again"); 
  }
}

// Challenge 3: Net Salary Calculator
function netSalary() {
  // The user will enter basic salary + benefits,  as variables used in calculation of tax
  const basicSalaryInput = document.getElementById("basicSalary");
  const benefitsInput = document.getElementById("benefits");

  // Check if inputs are empty, and set their values to zero if they are
    // parseFloat() parses a string and returns the first number

  const basicSalary = basicSalaryInput.value === "" ? 0 : parseFloat(basicSalaryInput.value);
  const benefits = benefitsInput.value === "" ? 0 : parseFloat(benefitsInput.value);

  // Initiate the value of gross salary before taxes because taxes cut across both basic salary and benefits 
  const grossSalary = basicSalary + benefits;

  // Paye based on gross salary
  let paye = 0;
  if (grossSalary > 0 && grossSalary <= 24000) {
    // Paye is only calculated on minimum taxable income of Ksh 24000
    paye = 0;
  } else if (grossSalary > 24000 && grossSalary <= 32333) {
    paye = (grossSalary - 24000) * 0.25;
  } else if (grossSalary > 32333) {
    paye = (grossSalary - 24000) * 0.3;
  }

  // NHIF Deductions based on gross salary
  let nhifDeductions = 0;
  if (grossSalary >= 100000) {
    nhifDeductions = 1700;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    nhifDeductions = 1600;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    nhifDeductions = 1500;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    nhifDeductions = 1400;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    nhifDeductions = 1300;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    nhifDeductions = 1200;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    nhifDeductions = 1100;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    nhifDeductions = 1000;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    nhifDeductions = 950;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    nhifDeductions = 900;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    nhifDeductions = 850;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    nhifDeductions = 750;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    nhifDeductions = 600;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    nhifDeductions = 500;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhifDeductions = 400;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhifDeductions = 300;
  } else if (grossSalary >= 0 && grossSalary <= 5999) {
    nhifDeductions = 150;
  }

  // Calculate NSSF Deductions based on gross salary
  const nssfDeductions = Math.min(grossSalary * 0.06, 1800);

  // Calculate net salary
  const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;

  // Output results to user
  document.getElementById("grossSalary").innerHTML = `Gross Salary (Ksh): ${grossSalary.toFixed(2)}`;
  document.getElementById("paye").innerHTML = `Paye Tax (Ksh): ${paye.toFixed(2)}`;
  document.getElementById("nhif").innerHTML = `NHIF Deductions (Ksh): ${nhifDeductions.toFixed(2)}`;
  document.getElementById("nssf").innerHTML = `NSSF Deductions (Ksh): ${nssfDeductions.toFixed(2)}`;
  document.getElementById("netSalary").innerHTML = `Net Salary is Ksh: ${netSalary.toFixed(2)}`;
}
