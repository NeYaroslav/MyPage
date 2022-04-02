var swiper = new Swiper(".mySwiper", {
  	loop: true,
	autoHeight: true,
	pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const burger = document.querySelector(".header__burger")

burger.addEventListener("click", ()=>{
	document.querySelector("body").classList.toggle("show_menu")
})
const links = document.querySelectorAll(".header__nav__menu__link a")
for(let index = 0; index < links.length; index++){
    if(document.querySelector("body").contains("show_menu")) {
        links[index].addEventListener("click", ()=>{
	document.querySelector("body").classList.remove("show_menu")
})
    }
}



window.addEventListener("scroll", ()=> {
    if(!scrollY == 0) {
        document.querySelector('.go__up').classList.add('show')
    }
    else {
        document.querySelector('.go__up').classList.remove('show')
    }
})



