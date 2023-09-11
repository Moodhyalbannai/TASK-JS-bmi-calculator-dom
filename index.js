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

 let Underweight = "Not Healthy"
 


if(BMI < 18.5) {
  alert(BMI + `
  Underweight!`)
} else if (BMI >= 18.5 && BMI <= 24.9){
  alert(BMI + `
  Healthy Weight`)
} else if (BMI >= 25.0 && BMI <= 29.9){
  alert(BMI + `
  Overweight`)
} else if (BMI >= 30.0){
  alert(BMI + `
  Above Obesity!`)
};


if(age >= 19 && age <= 24){
  alert(`Your BMI is ` + BMI + `
  Healthy Weight` + `
  Not Healthy :(`)
} else if (age >= 25 && age <= 34){
alert(`BMI is = ` + BMI + `
Healthy Weight` + `
Healthy`)
} else if (age >= 35 && age <= 44){
  alert(`BMI is = ` + BMI + `
  Healthy Weight` + `
  Healthy! :)`)
} else if (age >= 45 && age <= 54){
  alert(`BMI is = ` + BMI + `
  Over Weight` + `
  Not Healthy! :(`)  
} else if (age >= 55 && age <= 64){
  alert(`BMI is = ` + BMI + `
  Over Weight` + `
  Not Healthy! :(`)  

}