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
  /* Close the hamburger menu when a link is clicked */
    document.querySelectorAll('#myNav a:not(.icon)').forEach(link => {
      link.addEventListener('click', function() {
          var x = document.getElementById("myNav");
          x.className = "topnav";
      });
  });


  // About section //
  document.addEventListener('DOMContentLoaded', function() {
    const readMoreLink = document.querySelector('.read-more');
    const moreContent = document.querySelector('.more-content');

    readMoreLink.addEventListener('click', function(e) {
        e.preventDefault(); 
        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'block';
            readMoreLink.textContent = 'read less'; // Change link text
        } else {
            moreContent.style.display = 'none';
            readMoreLink.textContent = 'continue reading'; // Change link text
        }
    });
});



  // animation containers //
    document.addEventListener("mousemove", function (e) {
      const MAX_FLOWERS = 20;
      let body = document.querySelector("#animation");
      let flower = document.createElement("div");
      flower.classList.add("flower"); 
      let x = e.offsetX;
      let y = e.offsetY;
    
      flower.style.left = x + "px";
      flower.style.top = y + "px";
    
      let size = Math.random() * 80;
      flower.style.width = 20 + size + "px";
      flower.style.height = 20 + size + "px";
    
      let rotation = Math.random() * 360;
      flower.style.transform = `rotate(${rotation}deg)`;
    
      body.appendChild(flower);

      if (body.children.length > MAX_FLOWERS) {
        // Remove the oldest flower to maintain the maximum limit
        body.firstChild.remove();
    }
  })

  document.addEventListener("mousemove", function (e) {
    const MAX_FLOWERS = 20;
    let body = document.querySelector("#animation_2");
    let flower = document.createElement("div");
    flower.classList.add("flower"); 
    let x = e.offsetX;
    let y = e.offsetY;
  
    flower.style.left = x + "px";
    flower.style.top = y + "px";
  
    let size = Math.random() * 80;
    flower.style.width = 20 + size + "px";
    flower.style.height = 20 + size + "px";
  
    let rotation = Math.random() * 360;
    flower.style.transform = `rotate(${rotation}deg)`;
  
    body.appendChild(flower);

    if (body.children.length > MAX_FLOWERS) {
      
      body.firstChild.remove();
  }
})


// Experience section //

function jobs(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
 
} 

/*how .card class ensures that the details are hidden when the page first loads?*/
 /* or how to disable the buttons of cards in experience section when the page is refreshed? 
window.onload = function refreshPage() {
  document.getElementsByClassName("card").disabled = true;
}
  */
/* or 
window.onload = function() {
  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].disabled = true;
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



// leave a message section //

const messageForm = document.getElementById("leave_a_message");
messageForm.addEventListener("submit", submitFunction);

function submitFunction(e){
  e.preventDefault();
  /* get the form fields values */
  const name = e.target.usersName.value;
  const email = e.target.usersEmail.value;
  const message = e.target.usersMessage.value;;
  console.log(name);
  console.log(email);
  console.log(message);



// messages section //

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement ("li");
  newMessage.innerHTML = `<a href = "mailto: ${email}"> ${name}</a>
  <span class="message-text">${message}</span>`;
  
  /* Edit button */
  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.setAttribute("type", "button");
  editButton.addEventListener("click", function() {

    /* show the current message text */
    const messageText = newMessage.querySelector(".message-text");
    const currentMessage = messageText.textContent;

    /* Remove the edit button */
    newMessage.removeChild(editButton);

    /* Create a new input field for editing */
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = currentMessage;
      editInput.classList.add("edit-input"); // Apply the CSS class
      newMessage.appendChild(editInput);

  /* Save button */
  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  saveButton.setAttribute("type", "button");

  saveButton.addEventListener("click", function() {
    const newMessageText = editInput.value;
    messageText.textContent = newMessageText;

    /* Remove input and save button */
    newMessage.removeChild(editInput);
    newMessage.removeChild(saveButton);

    /* Re-add edit button */
      newMessage.appendChild(editButton);
      });
      newMessage.appendChild(saveButton);
  
  });
  
  
  /* Remove button */
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", function() {
      messageList.removeChild(newMessage);
  });
  
  /* Append buttons to the new message item */
  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  
  /* Append new message item to the list */
  messageList.appendChild(newMessage);

  /* Reset form fields after submission */
  e.target.reset();

}

// projects section //

const url = "https://api.github.com/users/Elena-Nam/repos";
fetch(url)
  .then(response => response.json())
  .then(repos => {
  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");
  for (let i = 0; i < repos.length; i++){
    const project = document.createElement("li");
   
    project.innerHTML += `<a href = "${repos[i].html_url}" target="_blank"> ${repos[i].name}  <br> <img src = "images/${repos[i].name}.png"></a>`;
    projectList.appendChild(project);
  

    const lastProject = document.getElementById("last_project");
    const lastRepo = repos[repos.length - 1];
    const lastRepoLink = document.createElement("p");
    const myNewProject = document.createElement("h3");
    const lastRepoParagraph = document.createElement("p");

    myNewProject.innerText = `My new project`;
    lastRepoLink.innerHTML += `<a href = "${lastRepo.html_url}" target="_blank"> ${lastRepo.name}  <br> <img src = "images/${lastRepo.name}.png"></a>`;

    lastRepoParagraph.appendChild(myNewProject);
    lastRepoParagraph.appendChild(lastRepoLink);
    lastProject.innerHTML = ''; // Clear previous content
    lastProject.appendChild(lastRepoParagraph);
    }

})
  .catch((e) => console.log(e));


