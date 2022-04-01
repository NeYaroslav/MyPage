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

// let bg = document.querySelector(".main_bg__block img")
// var bg_height = document.querySelector(".main_bg__block img").clientHeight
// window.addEventListener("scroll", ()=> {
//     if(bg_height > scrollY){
//         bg.style.top =  scrollY/1.75 + 'px'
//     }
//     if(!scrollY == 0) {
//         document.querySelector('.go__up').classList.add('show')
//     }
//     else {
//         document.querySelector('.go__up').classList.remove('show')
//     }
// })



