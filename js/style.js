let bot_search = document.querySelector('.bot_search')
let show_search = document.querySelector('.search')
let icon_open = document.querySelector('.navbar-toggler'),
    body = document.body,
    p = document.querySelector('.main'),
    nav = document.querySelector('nav.navbar'),
    ul = document.querySelector(' ul.navbar-nav'),
    logo = document.querySelector('.logo'),
    div = document.querySelector('.collapse div')
bot_search.addEventListener('click', function() {
    show_search.style.visibility = 'visible'
    bot_search.style.marginLeft = '-50px'
})
icon_open.addEventListener('click', () => {
    //console.log(icon_open);
    body.classList.add('body')
    nav.classList.add('tranparent')
    logo.classList.add('logo_index')
})

p.addEventListener('click', () => {
    body.classList.remove('body')
    ul.classList.add('close')
})