document.addEventListener("DOMContentLoaded", function() {

    const searchTrigger = document.getElementById("search-trigger"), 
        search = document.querySelector(".header__menu__search"),
        closeTrigger = document.getElementById("close-trigger");

    function toggle(arr) {
        arr.forEach(item => {
            item.classList.toggle("active");
        });
    }
    if(searchTrigger && search && closeTrigger) {
        searchTrigger.addEventListener("click", () => {
            toggle([searchTrigger, search]);
        });
        closeTrigger.addEventListener("click", () => {
            toggle([searchTrigger, search]);
        });
    }
    $(".main-banner__slider").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.main-banner-nav__wrapp .slick-prev'),
        nextArrow: $('.main-banner-nav__wrapp .slick-next'),
        appendDots: $(".main-banner-nav__wrapp .dots"),
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $(".special-offer__row").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $(".clients__row").slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    });
    const  mainMenu = document.querySelector(".catalog-menu");
    /* большое меню */
    if (mainMenu) {
        const catalogBtn = document.querySelector(".catalog-btn");

        if (catalogBtn) {
            const ul = mainMenu.querySelector("ul.categories");

            if (ul) {
                

                const windowWidth = window.screen.width;

                if (windowWidth >= 992) {
                    catalogBtn.addEventListener("mouseover", function () {
                        mainMenu.classList.add("active");
                    });
                    ul.addEventListener("mouseover", function() {
                        mainMenu.classList.add("active");
                    });
                    ul.addEventListener("mouseout", function () {
                        mainMenu.classList.remove("active");
                    });
                } else {
                    const back = document.createElement("a");
                    back.classList.add("back");
                    back.innerHTML = "<span>Назад</span> / Каталог";
                    ul.prepend(back);
                }
            }
            
        }
    }
    /* .большое меню */
    /* мобильное меню */
    const hamburger = document.querySelector(".hamburger"),
        mobileMenu = document.querySelector(".header__menu__nav");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            mobileMenu.classList.toggle("active");
            document.body.classList.toggle("hidden");

            const catalogBtn = document.querySelector(".catalog-btn-next"),
                catalogMenu = document.querySelector(".catalog-menu"),
                back = document.querySelector(".back");
            
            if (catalogBtn && catalogMenu && back) {
                catalogBtn.addEventListener("click", () => {
                    catalogMenu.classList.add("active");

                });
                back.addEventListener("click", () => {
                    catalogMenu.classList.remove("active");
                });
                
                const subs = catalogMenu.querySelectorAll(".has-sub");

                if (subs) {
                    subs.forEach(item => {
                        
                        const text = item.querySelector("a").textContent,
                            next = item.querySelector("span"),
                            ul = item.querySelector("ul");
                        let backBtn = null;

                        if (!(item.querySelector(".back"))) {
                            backBtn = document.createElement("a");
                            backBtn.classList.add("back");
                            backBtn.innerHTML = "<span>Назад</span> / " + text;
                            ul.prepend(backBtn);
                        } else {
                            backBtn = item.querySelector(".back");
                        }
                        
                        next.addEventListener("click", () => {
                            ul.classList.add("active");
                        });

                        backBtn.addEventListener("click", () => {
                            ul.classList.remove("active");
                        });
                    });
                    
                }
            }
        });
    }
});