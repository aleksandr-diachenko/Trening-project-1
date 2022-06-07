const btnBurger = document.querySelector('.btn-burger');
const mobileNav = document.querySelector('.mobile-nav');
const burgerLink = document.querySelectorAll('.mobile-link');

btnBurger.addEventListener('click', function() {
    mobileNav.classList.toggle('mobile-nav-active');
    btnBurger.classList.toggle('btn-burger-close');
});

burgerLink.forEach(function (item) {
    item.addEventListener('click', function () {
        mobileNav.classList.toggle('mobile-nav-active');
        btnBurger.classList.toggle('btn-burger-close');
    })
})


