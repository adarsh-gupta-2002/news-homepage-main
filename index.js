

const open = document.getElementById('open-menu')
const close = document.getElementById('close-menu')
const nav = document.getElementById('nav')
 
const body = document.querySelector('body')

open.addEventListener('click' , () =>{
    nav.classList.remove('show')
    body.classList.add("menu-open")
    
     
 
})
close.addEventListener('click' , ()=>{
    nav.classList.add('show')
    body.classList.remove("menu-open")
})

 
 