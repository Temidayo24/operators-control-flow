//Assignment3
let studentDept = document.getElementById("studentDept");
let studentInfo = document.getElementById("studentInfo");
let artSubjects = "Government, Economics, Literature, History";
let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let generalSubjects = "English and Mathematics";
let msg = ""

document.getElementById("submit-btn").addEventListener("click", () => {
  //the .value attribute displays the input of the user on the browser. I added it inside the function because it didn't work outside of the function
  studentDept = studentDept.value;
  msg = studentDept + " subjects are ";

  if (studentDept === "Arts" || studentDept === "arts") {
    studentInfo.textContent = msg + artSubjects + ", " + generalSubjects + ".";
    console.log(studentInfo.textContent);
  } else if (
    studentDept === "Social Science" ||studentDept === "social science") {
    studentInfo.textContent = msg + socialScienceSubjects + ", " + generalSubjects + ".";
    console.log(studentInfo.textContent);
  } else if (studentDept === "Science" || studentDept === "science") {
    studentInfo.textContent = msg + scienceSubjects + ", " + generalSubjects + ".";
    console.log(studentInfo.textContent);
  } else {
    studentInfo.textContent = msg + generalSubjects;
    console.log(studentInfo.textContent);
  }

});


//Assignment5
function highestPowerof2(num) {
  let res = 1

  for (let i = 0; i < 10; i++) {
    let curr = 1 << i;

    if (curr > num){
      break;
    }

    res = curr;
  }

  return res;

}

let num = 10

let pwr = highestPowerof2(num)


console.log("The number " + pwr +" is the power of 2 nearest to " + num);



