let container=document.querySelector('.container');
let ulContainer=document.querySelector('.container-lists');
let liContainer=document.querySelector('.container-list');
let liAll=document.querySelectorAll('.container-list');

liAll.forEach(li =>{
    li.addEventListener('click', function(e){
        li.classList.toggle('active');
    })   
})




