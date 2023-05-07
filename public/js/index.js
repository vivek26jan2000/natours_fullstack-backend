/*eslint-disable*/
import '@babel/polyfill';
import { login,logout } from './login.js';
import { updateSettings } from './updateSettings.js';


const loginForm = document.querySelector('.form--login');
const logoutBtn=document.querySelector('.nav__el--logout');
const updateForm=document.querySelector('.form-user-data');
const userPasswordForm=document.querySelector('.form-user-password');

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if(logoutBtn){
    logoutBtn.addEventListener('click',logout)
}

if(updateForm)
updateForm.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  updateSettings({name,email},'data');
})
if(userPasswordForm)
userPasswordForm.addEventListener('submit',async e=>{
  e.preventDefault();
  document.querySelector('.btn--save-password').innerHTML='Updating...'
  const password=document.getElementById('password').value;
  const passwordCurrent=document.getElementById('password-current').value;
  const passwordConfirm=document.getElementById('password-confirm').value;
   await updateSettings({passwordCurrent,password,passwordConfirm},'password');

  document.querySelector('.btn--save-password').innerHTML='SAVE PASSWORD'
  document.getElementById('password').value='';
  document.getElementById('password-confirm').value='';
  document.getElementById('password-current').value='';

})


