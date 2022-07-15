const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
    if (window.scrollY >= 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', function () {

    backToTop();

})

