var share="hello js1"
function addDigits(n) {
  return n
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

function calculateBirthdateSum(birthdate, gender) {
  // Split birthdate into day, month, and year
  let [year, month, day] = birthdate.split("-");

  // Add all digits of the entire birthdate
  let total = addDigits(day + month + year);
  let totalSum = [addDigits(total)].toString();
  
  // Add digits of each part =>   
  //=> Day
  let day_1 = addDigits(day);
  let daySum = [addDigits(day_1)].toString();
  
  //=> Year
  let yearrrr = addDigits(year);
  let yer = addDigits(yearrrr);

  //Checking Kunno Number via gender
  let yearSum_1;
  let yearSum;
  if (gender == "male") {
    yearSum_1 = Math.abs(yer - 6);
    yearSum = [addDigits(yearSum_1)].toString();
    console.log("Kuno male", yearSum);
  } else {
    yearSum_1 = Math.abs(yer + 4);
    yearSum = [addDigits(yearSum_1)].toString();
    console.log("Kuno female", yearSum);
  }

  console.log(`Day Sum: ${daySum}`);
  console.log(`Year Sum: ${yearSum}`);
  console.log(`Total Birthdate Sum: ${totalSum}`);

  let g1 = document.getElementById("r1");
  let g2 = document.getElementById("r2");
  let g3 = document.getElementById("r3");
  let gg1 = document.getElementById("rr1");
  let gg2 = document.getElementById("rr2");
  let gg3 = document.getElementById("rr3");
  let ggg1 = document.getElementById("rrr1");
  let ggg2 = document.getElementById("rrr2");
  let ggg3 = document.getElementById("rrr3");

  let n1 = document.getElementById("number1")
  let n2 = document.getElementById("number2")
  let n3 = document.getElementById("number3")
  let n4 = document.getElementById("number4")
  let n5 = document.getElementById("number5")
  let n6 = document.getElementById("number6")
  let n7 = document.getElementById("number7")
  let n8 = document.getElementById("number8")
  let n9 = document.getElementById("number9")
  
  let a = [day, month, year].toString().split("");
  console.log(typeof a, a);

  //Placing Each digit of Birthdate
  let z1 = a.filter((value) => value == 1);
    console.log(z1);
  ggg2.innerText = z1.length > 0 ? z1.join("") : "*";
  let z2 = a.filter((value) => value == 2);
    console.log(z2);
  g3.innerText = z2.length > 0 ? z2.join("") : "*";
  let z3 = a.filter((value) => value == 3);
    console.log(z3);
  gg1.innerText = z3.length > 0 ? z3.join("") : "*";
  let z4 = a.filter((value) => value == 4);
    console.log(z4);
  g1.innerText = z4.length > 0 ? z4.join("") : "*";
  let z5 = a.filter((value) => value == 5);
    console.log(z5);
  gg2.innerText = z5.length > 0 ? z5.join("") : "*";
  let z6 = a.filter((value) => value == 6);
    console.log(z6);
  ggg3.innerText = z6.length > 0 ? z6.join("") : "*";
  let z7 = a.filter((value) => value == 7);
    console.log(z7);
  gg3.innerText = z7.length > 0 ? z7.join("") : "*";
  let z8 = a.filter((value) => value == 8);
    console.log(z8);
  ggg1.innerText = z8.length > 0 ? z8.join("") : "*";
  let z9 = a.filter((value) => value == 9);
    console.log(z9);
  g2.innerText = z9.length > 0 ? z9.join("") : "*";

  // Placing Day
  if (daySum == 1) {
    z1.push(daySum);
    console.log(z1);
    ggg2.innerText = z1.length > 0 ? z1.join("") : " ";
  } else if (daySum == 2) {
    z2.push(daySum);
    console.log(z2);
    g3.innerText = z2.length > 0 ? z2.join("") : " ";
  } else if (daySum == 3) {
    z3.push(daySum);
    console.log(z3);
    gg1.innerText = z3.length > 0 ? z3.join("") : " ";
  } else if (daySum == 4) {
    z4.push(daySum);
    console.log(z4);
    g1.innerText = z4.length > 0 ? z4.join("") : " ";
  } else if (daySum == 5) {
    z5.push(daySum);
    console.log(z5);
    gg2.innerText = z5.length > 0 ? z5.join("") : " ";
  } else if (daySum == 6) {
    z6.push(daySum);
    console.log(z6);
    ggg3.innerText = z6.length > 0 ? z6.join("") : " ";
  } else if (daySum == 7) {
    z7.push(daySum);
    console.log(z7);
    gg3.innerText = z7.length > 0 ? z7.join("") : " ";
  } else if (daySum == 8) {
    z8.push(daySum);
    console.log(z8);
    ggg1.innerText = z8.length > 0 ? z8.join("") : " ";
  } else if (daySum == 9) {
    z9.push(daySum);
    console.log(z9);
    g2.innerText = z9.length > 0 ? z9.join("") : " ";
  }

  //Placing Year
  if (yearSum == 1) {
    z1.push(yearSum);
    console.log(z1);
    ggg2.innerText = z1.length > 0 ? z1.join("") : " ";
  } else if (yearSum == 2) {
    z2.push(yearSum);
    console.log(z2);
    g3.innerText = z2.length > 0 ? z2.join("") : " ";
  } else if (yearSum == 3) {
    z3.push(yearSum);
    console.log(z3);
    gg1.innerText = z3.length > 0 ? z3.join("") : " ";
  } else if (yearSum == 4) {
    z4.push(yearSum);
    console.log(z4);
    g1.innerText = z4.length > 0 ? z4.join("") : " ";
  } else if (yearSum == 5) {
    z5.push(yearSum);
    console.log(z5);
    gg2.innerText = z5.length > 0 ? z5.join("") : " ";
  } else if (yearSum == 6) {
    z6.push(yearSum);
    console.log(z6);
    ggg3.innerText = z6.length > 0 ? z6.join("") : " ";
  } else if (yearSum == 7) {
    z7.push(yearSum);
    console.log(z7);
    gg3.innerText = z7.length > 0 ? z7.join("") : " ";
  } else if (yearSum == 8) {
    z8.push(yearSum);
    console.log(z8);
    ggg1.innerText = z8.length > 0 ? z8.join("") : " ";
  } else if (yearSum == 9) {
    z9.push(yearSum);
    console.log(z9);
    g2.innerText = z9.length > 0 ? z9.join("") : " ";
  }

  //Placing Total_SUM
  if (totalSum == 1) {
    z1.push(totalSum);
    console.log(z1);
    ggg2.innerText = z1.length > 0 ? z1.join("") : " ";
  } else if (totalSum == 2) {
    z2.push(totalSum);
    console.log(z2);
    g3.innerText = z2.length > 0 ? z2.join("") : " ";
  } else if (totalSum == 3) {
    z3.push(totalSum);
    console.log(z3);
    gg1.innerText = z3.length > 0 ? z3.join("") : " ";
  } else if (totalSum == 4) {
    z4.push(totalSum);
    console.log(z4);
    g1.innerText = z4.length > 0 ? z4.join("") : " ";
  } else if (totalSum == 5) {
    z5.push(totalSum);
    console.log(z5);
    gg2.innerText = z5.length > 0 ? z5.join("") : " ";
  } else if (totalSum == 6) {
    z6.push(totalSum);
    console.log(z6);
    ggg3.innerText = z6.length > 0 ? z6.join("") : " ";
  } else if (totalSum == 7) {
    z7.push(totalSum);
    console.log(z7);
    gg3.innerText = z7.length > 0 ? z7.join("") : " ";
  } else if (totalSum == 8) {
    z8.push(totalSum);
    console.log(z8);
    ggg1.innerText = z8.length > 0 ? z8.join("") : " ";
  } else if (totalSum == 9) {
    z9.push(totalSum);
    console.log(z9);
    g2.innerText = z9.length > 0 ? z9.join("") : " ";
  }
  
  
  let sun ="You have Prominant Career, Success, Job, Business, Communication, Individuality "
  let moon="You have Prominant Marriage, Love, Relationship, Sensitivity, Intuition, Mother"
  let jupiatr="You have Prominant Health, Planning, Imagination, Family, Wisdom, Past"
  let rahu ="You have Prominant Luck, Money, Discipline, Self-worth, Power"
  let mercury="You have Prominant Balance, Stability, Fortune, Mental health, Freedom"
  let venus="You have Prominant Friends, Travelling, New beginnings, Spirituality, Father"
  let ketu="You have Prominant Children, Creativity, Disappointments, Entertainment, Future"
  let saturn="You have Prominant Knowledge, Motivation, Intuition, Organized, Spirituality, Study"
  let mars="You have Prominant Prosperity, Humanity, Social life, Fame, Reputation"
  
  let sun_n="Lack in Career, Success, Job, Business, Communication, Individuality"
  let moon_n="Lack in Marriage, Love, Relationship, Sensitivity, Intuition, Mother"
  let jupiatr_n="Lack in Health, Planning, Imagination, Family, Wisdom, Past"
  let rahu_n ="Lack in Luck, Money, Discipline, Self-worth, Power"
  let mercury_n="Lack in Balance, Stability, Fortune, Mental health, Freedom"
  let venus_n="Lack in Friends, Travelling, New beginnings, Spirituality, Father "
  let ketu_n="Lack in Creativity, Children , Disappointments, Entertainment, Future"
  let saturn_n="Lack in Knowledge, Motivation, Intuition, Organized, Spirituality, Study"
  let mars_n="Lack in Prosperity, Humanity, Social life, Fame, "
  
  let p=[yearSum,totalSum,daySum,day,year,month].toString().split("");
  console.log(p,typeof p);
  
  let p1 = p.filter((value) => value == 1);
  console.log(p1);
  n8.innerHTML = p1.length>0 ? `<h2>Number 1 is Present ! </h2>${sun}`:`<h2 class="newh2">Number 1 is Missing !</h2>${sun_n}`;
   
  let p2 = p.filter((value) => value == 2);
  console.log(p2);
  n3.innerHTML = p2.length > 0 ? `<h2>Number 2 is Present ! </h2>${moon}` :`<h2 class="newh2">Number 2 is Missing !</h2>${moon_n}`;
  
  let p3 = p.filter((value) => value == 3);
  console.log(p3);
  n4.innerHTML = p3.length > 0 ? `<h2>Number 3 is Present! </h2>${jupiatr}` : `<h2 class="newh2">Number 3 is Missing !</h2>${jupiatr_n}`;
  
  let p4 = p.filter((value) => value == 4);
  n1.innerHTML = p4.length > 0 ? `<h2>Number 4 is Present ! </h2>${ketu}` : `<h2 class="newh2">Number 4 is Missing !</h2>${ketu_n}`;
  
  let p5 = p.filter((value) => value == 5);
  console.log(p5);
  n5.innerHTML = p5.length > 0 ? `<h2>Number 5 is Present ! </h2>${mercury}` : `<h2 class="newh2">Number 5 is Missing !</h2>${mercury_n}`;
  
  let p6 = p.filter((value) => value == 6);
  console.log(p6);
  n9.innerHTML = p6.length > 0 ? `<h2>Number 6 is Present ! </h2>${venus}` : `<h2 class="newh2">Number 6 is Missing !</h2>${venus_n}`;
  
  let p7 = p.filter((value) => value === "7");
  console.log(p7);
  n6.innerHTML = p7.length > 0 ? `<h2>Number 7 is Present ! </h2>${rahu}` : `<h2 class="newh2">Number 7 is Missing !</h2>${rahu_n}`;
  
  let p8 = p.filter((value) => value == 8);  
  console.log(p8);
  n7.innerHTML = p8.length > 0 ? `<h2>Number 8 is Present ! </h2>${saturn}` : `<h2 class="newh2">Number 8 is Missing !</h2>${saturn_n}`;
  
  let p9 = p.filter((value) => value == 9);
  console.log(p9);
  n2.innerHTML = p9.length > 0 ? `<h2>Number 9 is Present ! </h2>${mars}` : `<h2 class="newh2">Number 9 is Missing !</h2>${mars_n}`;
  
  }

function processData(event) {
  event.preventDefault();
  
  let nameee = document.getElementById("uname").value;
  let birthdate = document.getElementById("bdate").value;
  console.log(birthdate);
  
  let gender = document.querySelector('input[name="gend"]:checked')?.value;
  console.log(typeof gender, gender);
  
  let namee = document.getElementById("nam");
  let [year, month, day] = birthdate.split("-");
  
  namee.innerHTML = `${nameee} <br> ${day}-${month}-${year}`;
  calculateBirthdateSum(birthdate, gender);
}
