function processStudent(name, ageStr, marksStr) {
  let age = Number(ageStr);            
  let marks = Number(marksStr);        
  let bonus = 5;

  let total = marks + bonus;           
  let status = "";                     
  let grade = "";                      

  let intro = "Name: " + name + ", Age: " + age; //1st output
  console.log(intro);

  if (total >= 80) {                   
    grade = "A+";
    status = "Excellent";    
  } else if (total >= 60) {
    grade = "A";
    status = "Good";
  } else {
    grade = "F";
    status = "Needs Improvement";
  }

  console.log("Total Marks =", total);
  console.log("Grade:", grade);
  console.log("Status:", status); //2nd output

  console.log("Counting from 1 to 3:");
  for (let i = 1; i <= 3; i++) {       
    console.log(i);
  }

  console.log("Letters in name:");
  for (let ch of name) {               
    console.log(ch);
  }

  return name + " (" + grade + ")";    
}

let result = processStudent("chadni", "17", "78");
console.log("Result:", result);
