const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')



for (const element of toggle) {

    element.addEventListener('click', function () {
        nav.classList.toggle('show')

    })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}





const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    if (window.scrollY >= 200) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function menssagem() {
    return alert("Menssagem enviada com sucesso");
}

window.addEventListener('scroll', function () {

    backToTop();

})


