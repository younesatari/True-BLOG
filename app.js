const burgerBtn = document.querySelector('.burger');
const lists = document.querySelector('.lists');

// Event Listener
burgerBtn.addEventListener('click',()=>{
   lists.classList.toggle('transform');
})