//RESPONSIVE NAVIGATION
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s  ease forwards  ${index / 7 + 0.3}s`;
        }
    });
    burger.classList.toggle('toggle');
});

//FOR OPEN AND CLOSE PROJECTS PAGE
var project = document.getElementById('project');
var openBtn = document.getElementById('opn-btn')
var closeBtn = document.getElementsByClassName("close-btn")[0];

openBtn.addEventListener('click',openProject); 
function openProject() {
    project.style.display = "block";
}
closeBtn.addEventListener('click',closeProject);
function closeProject() {
    project.style.display = "none";
}


//Add & remove name
function removename() {
   document.getElementById('myname').style.display = "none";
}
function addname() {
    document.getElementById('myname').style.display = "block";
} 