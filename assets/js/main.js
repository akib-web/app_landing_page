(function($) {
    "use strict";
    $(document).ready(function() {
        // ==============sticky-menu==============  
        $("header").sticky({
            zIndex: 9999999
        });
        // ==========mean-meanu===========
        $('.main-menu').meanmenu({
            meanMenuContainer: '.menu-area',
            meanScreenWidth: "991",
            onePage: true
        });
        // ==============jQueryui tab===============
        $("#tabs").tabs({
            show: { effect: "fade", duration: 1000 }
        });
        // =============tab slider===========
        var sliderA = tns({
            container: '.my-slider',
            // items: 3,
            axis: "vertical",
            swipeAngle: false,
            speed: 400,
            autoplay: false,
            loop: false,
            mouseDrag: true,
            arrowKeys: false,
            controlsText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            nav: false,
            items: 1,
            responsive: {
                768: {
                    items: 3,
                    controlsText: ["<i class='fas fa-chevron-up'></i>", "<i class='fas fa-chevron-down'></i>"],

                },
            }
        });
        // ============clients-slider===========
        if ($('.clients-slider').length) {
            var sliderB = tns({
                container: '.clients-slider',
                swipeAngle: false,
                loop: true,
                items: 1,
                speed: 400,
                mouseDrag: true,
                controls: false,
                nav: true,
                navPosition: 'bottom',
                // responsive: {
                //     640: {
                //         controlsText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                //     }
                // }
            });
        }
        // ================magnific-popup================
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            iframe: {
                patterns: {
                    youtube: {

                        src: '//www.youtube.com/embed/6R9KdzYgHoE?autoplay=1' // URL that will be set as a source for iframe.
                    }

                    // you may add here more sources

                },

                srcAction: 'popup-youtube', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            },
            fixedContentPos: false
        });
        var mySwiper = new Swiper('#app-screen-1', {
            slidesPerView: 5,
            loop: true,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-prev',
                prevEl: '.swiper-button-next',
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                640: {
                    slidesPerView: 3,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                440: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                }
            }


        });

        var mySwiper2 = new Swiper('#app-screen', {
            slidesPerView: 5,
            loop: true,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-prev',
                prevEl: '.swiper-button-next',
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 50,
                depth: 250,
                modifier: .4,
                slideShadow: false,
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                    // spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    // spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    // spaceBetween: 20,
                },
                520: {
                    slidesPerView: 1,
                    // spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    // spaceBetween: 10,
                }
            }
        });

    });
    $(window).on('load', function() {

    });
})(jQuery)