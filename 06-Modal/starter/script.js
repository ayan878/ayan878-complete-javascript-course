'use strict';

const modal =document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const btnsCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);


for(let i =0; i< btnsOpenModal.length;i++)
btnsOpenModal[i].addEventListener('click',function(){
    console.log('btn click');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    
});
btnsCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
