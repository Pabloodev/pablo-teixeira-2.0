document.addEventListener("DOMContentLoaded", () => {
    alert('Esse portfólio ainda está em desenvolvimento, então é provável que algumas coisas não funcionem')
})

const menuBtn = document.getElementById('menu')
const menu = document.getElementById('menu-container')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

