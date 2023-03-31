'use strict';

const modal =document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const btnsCloseModal=document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);


for(let i =0; i< btnsOpenModal.length;i++)
btnsOpenModal[i].addEventListener('click',function(){
  console.log('btn click');
  // here remove function remove the hidden class. it means display are not none
  modal.classList.remove('hidden');
  // here remove function remove the hidden class. it means display are not none. which looks blur
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click',function(){
  modal.classList.add('hidden');
  overlay.classList.remove('overlay');
})
// More readable than above
const closeModal =function(){
  modal.classList.add('hidden')
  overlay.classList.add('hidden');
}
 btnsCloseModal.addEventListener('click',closeModal);
// {
//   // here remove function remove the hidden class. it means display are none. .hidden class are active
//   modal.classList.add('hidden');
//   // here remove function remove the hidden class. it means display are none
//   overlay.classList.add('hidden');
// });
