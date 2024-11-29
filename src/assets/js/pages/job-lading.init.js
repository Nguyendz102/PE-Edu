function windowScroll() {
    var e = document.getElementById("navbar");
    if (e) {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            e.classList.add("is-sticky");
        } else {
            e.classList.remove("is-sticky");
        }
    }
}

window.addEventListener("scroll", function (e) {
    e.preventDefault();
    windowScroll();
});

var swiper = new Swiper(".candidate-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1445: {
            slidesPerView: 4,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        }
    }
});

var mybutton = document.getElementById("back-to-top");
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {

        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};
