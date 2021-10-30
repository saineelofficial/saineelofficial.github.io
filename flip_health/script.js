
    
$(document).ready(function(){
    let match = window.matchMedia('(max-width:375px)')
    $(".owl-carousel").owlCarousel({
        items: match.matches? 1 : 2,
        loop:true,
        dots:true,
        margin:60,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
});
let button = document.querySelector('.subscribe')
let input = document.querySelector('.tips-input input')
button.addEventListener('click',()=>
{
    input.value = ''
})