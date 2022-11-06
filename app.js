const sign_in_btn =document.querySelector('#sign-in-button');
const sign_up_btn =document.querySelector('#sign-up-button');
const page=document.querySelector('.page');

sign_up_btn.addEventListener('click',()=>{
    page.classList.add('sign-up-mode');

});
sign_in_btn.addEventListener('click',()=>{
    page.classList.remove('sign-up-mode');

});