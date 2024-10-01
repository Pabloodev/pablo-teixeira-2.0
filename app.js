document.addEventListener("DOMContentLoaded", () => {
    alert('Olá galera! O site ainda está em desenvolvimento então algumas coisas ainda não funcionam. Espero que gostem!👉👈')
})


// Button to open menu bar

const menuBtn = document.getElementById('menu')
const menu = document.getElementById('menu-container')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

// Buttons do change theme

const clearTheme = document.getElementById('clear-btn');
const darkTheme = document.getElementById('dark-btn');

const body = document.getElementById('general-document')

clearTheme.addEventListener('click', () => {
    body.classList.add('white-theme')
})

darkTheme.addEventListener('click', () => {
    body.classList.remove('white-theme')
})

