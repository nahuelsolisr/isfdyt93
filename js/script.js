let navbar = document.querySelector('.navbar');
let menuButton = document.querySelector('#menu-btn');

menuButton.addEventListener('click', (event) => {
  console.log(event.target);
  navbar.classList.toggle('active-nav');

  // Desactivar la clase 'active' en el formulario de inicio de sesión
  loginForm.classList.remove('active');
  // Desactivar la clase 'active' en el formulario de registro
  registerForm.classList.remove('active');
});

let loginForm = document.querySelector('.login-form');
let loginButton = document.querySelector('#login-btn');

loginButton.onclick = () => {
  loginForm.classList.toggle('active');

  // Desactivar la clase 'active-nav' en la barra de navegación
  navbar.classList.remove('active-nav');
  // Desactivar la clase 'active' en el formulario de registro
  registerForm.classList.remove('active');
};

let registerForm = document.querySelector('.register-form');
let registerButton = document.querySelector('.register .btn');

registerButton.onclick = () => {
  registerForm.classList.toggle('active');

  // Desactivar la clase 'active-nav' en la barra de navegación
  navbar.classList.remove('active-nav');
  // Desactivar la clase 'active' en el formulario de inicio de sesión
  loginForm.classList.remove('active');
};