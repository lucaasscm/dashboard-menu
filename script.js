const menu = document.querySelector('.hamburger')
const sidebar = document.querySelector('section')
const elements = document.querySelectorAll('.hide')

menu.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar')
    sidebar.classList.toggle('sidebar-small')
    elements.forEach(element => {
        element.classList.toggle('hide')
    })
})
