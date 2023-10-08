/*Sidebarmenu*/
let toggleNavStatus = false;

let toggleNav = function() {
  let getSideBar = document.querySelector(".nav-sidebar");
  let getSideBarUl = document.querySelector(".nav-sidebar ul");
  let getSideBarTitle = document.querySelector(".nav-sidebar span");
  /* Gets the link nav */
  let getSideBarUla = document.querySelectorAll(".nav-sidebar a");



/* This function is the reason why if the user clicks on the menu icon it opens and closes */
  if(toggleNavStatus == false) {
    getSideBarUl.style.visibility = "visible";
    getSideBar.style.width = "272px";
    getSideBarTitle.style.opacity = "0.5";

    let arrayLength = getSideBarUla.length;
    for (let i = 0; i < arrayLength; i++){
      getSideBarUla[i].style.opacity = "1"
    }    

    toggleNavStatus = true;
  }

  else if (toggleNavStatus == true) {
    
    getSideBar.style.width = "60px";
    getSideBarTitle.style.opacity = "0.5";

    let arrayLength = getSideBarUla.length;
    for (let i = 0; i < arrayLength; i++){
      getSideBarUla[i].style.opacity = "0"
    }    
    
    getSideBarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }



}

document.querySelectorAll('.nav-link','.nav-side-menu').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})
document.querySelectorAll('.nav-side-menu').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})