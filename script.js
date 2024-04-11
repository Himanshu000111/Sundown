// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

var elems = document.querySelector(".elems")
var elementsC = document.querySelectorAll(".elems-contain")
var fixed = document.querySelector(".fixed-image")
//var image = document.getAttribute("data-image")

elems.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elems.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

elementsC.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
        fixed.style.backgroundSize = "cover"
        fixed.style.backgroundRepeat = "no-repeat"
    }) 
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });

  var loader = document.querySelector('.loader')
setTimeout(function(){
loader.style.top = "-100%"
},4000)

