const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const logiBtn = document.getElementById('login');

registerBtn.addEventListener("click", () => {
    container.classList.add('active')
})

logiBtn.addEventListener("click" , () => {
    container.classList.remove('active')
})