// header //

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function hamburger() {
  var x = document.getElementById("myNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  } 


// Experience section //

function myFunction1() {
  var x = document.getElementById("tjx");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function myFunction2() {
  var x = document.getElementById("miru-mir");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function myFunction3() {
  var x = document.getElementById("alter-ego");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function myFunction4() {
  var x = document.getElementById("hansung");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function myFunction5() {
  var x = document.getElementById("variant-optima");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function myFunction6() {
  var x = document.getElementById("school");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

/*
function myFunction(element, id) {

  var x = document.getElementById();
  
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
*/


// skills section //
let skills = [
  "HTML",
  "CSS",
  "JavaScript"
];
const skillsSection = document.getElementById("skills");
const skillList = document.querySelector("ul");
for (let i = 0; i < skills.length; i++){
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillList.appendChild(skill);
  console.log(skillList);
}

/* add some style to each skill */
const skillStyle = document.getElementsByTagName("li");
for (let i = 0; i < skillStyle.length; i++) {
  skillStyle[0].style.cssText = "border-radius: 5px; border-radius: 5px; background: rgb(159, 77, 137); padding: .5em; text-align: center;";
  skillStyle[1].style.cssText = "border-radius: 5px; border-radius: 5px; background: rgb(159, 77, 137); padding: .5em; text-align: center;";
  skillStyle[2].style.cssText = "border-radius: 5px; border-radius: 5px; background: rgb(159, 77, 137); padding: .5em; text-align: center;";

}


// footer section //
var footerSection = document.createElement("footer");
document.body.appendChild(footerSection);

/* create the current year and the copyright sign*/
var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector("footer");
var copyright = document.createElement("p");
copyright.innerHTML = `Elena Nam  &copy; ${thisYear}`;
footer.appendChild(copyright);



// top button //
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



/* not finished
// messages section //
let messageForm = document.querySelector(`form[name = "leave_message"]`);
messageForm.addEventListener("submit", submitFunction());
function submitFunction(){
  e.preventDefault();
  const name = e.target.usersName.value;
  const email = e.target.usersEmail.value;
  const message = e.target.usersMessage.value;
  console.log(name);
  console.log(email);
  console.log(message);
}
*/