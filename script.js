let menu_nav =document.querySelector('.menu');
let sidebar = document.querySelector('nav');
let close= document.querySelector('.fa');
menu_nav.addEventListener('click',()=>{
    sidebar.classList.add('active');
    menu_nav.style="display:none";
})
close.addEventListener('click',()=>{
    sidebar.classList.remove('active');
    menu_nav.style="display:block"; 
})