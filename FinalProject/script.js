const back = document.getElementById('back');
const bar = document.getElementById('bar');
const nav = document.getElementById('nav-bar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (back) {
    back.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}