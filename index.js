function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
let unit = height * 0.01
height = unit
  let BMI = weight / height**2





if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) {
  alert(` Your BMI is ${BMI}
  you are HEALTHY! :)`);
} else if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) {
  alert(` Your BMI is ${BMI}
  you are HEALTHY! :)`);
} else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) {
  alert(` Your BMI is ${BMI}
  you are HEALTHY! :)`);
} else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) {
  alert(` Your BMI is ${BMI}
  you are HEALTHY! :)`);
} else if (age >= 65 && BMI >= 24 && BMI <= 29) {
  alert(` Your BMI is ${BMI}
  you are HEALTHY! :)`);
} else {
  alert(` Your BMI is ${BMI}
  you are NOT HEALTHY! :(`);
}


}