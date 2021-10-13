( function( $ ) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetCMSItemCarouselHandler = function( $scope, $ ) {
        var breakpoints = elementorFrontend.config.breakpoints;
        var carousel = $scope.find(".cms-slick-carousel");
        var data = carousel.data();
        if (typeof data != 'undefined'){
            var slickOptions = {
                slidesToShow: data.slidestoshow,
                slidesToScroll: data.slidestoscroll,
                autoplay: true === data.autoplay,
                autoplaySpeed: data.autoplayspeed,
                infinite: true === data.infinite,
                pauseOnHover: true === data.pauseonhover,
                speed: data.speed,
                arrows: true === data.arrows,
                dots: true === data.dots,
                responsive: [{
                    breakpoint: breakpoints.lg,
                    settings: {
                        slidesToShow: data.slidestoshowtablet,
                        slidesToScroll: data.slidestoscrolltablet,
                    }
                }, {
                    breakpoint: breakpoints.md,
                    settings: {
                        slidesToShow: data.slidestoshowmobile,
                        slidesToScroll: data.slidestoscrollmobile,
                    }
                }]
            };
            carousel.slick(slickOptions);
        }

    };
    var WidgetCMSTimeline = function( $scope, $ ) {
        var year_carousel = $scope.find(".cms-company-timeline .timeline-years");
        var content_carousel = $scope.find(".cms-company-timeline .timeline-content-items");
        var year_items = year_carousel.data('items');
        year_carousel.slick({
            slidesToShow: year_items,
            slidesToScroll: 1,
            asNavFor: '.cms-company-timeline .timeline-content-items',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            infinite:false,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]

        });
        content_carousel.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            fade: true,
            draggable: false,
            cssEase: 'linear',
            infinite:false,
            arrows: true,
            prevArrow: "<div class='cms-slick-prev'><i class='zmdi zmdi-chevron-left'></i></div>",
            nextArrow: "<div class='cms-slick-next'><i class='zmdi zmdi-chevron-right'></i></div>",
            asNavFor: '.cms-company-timeline .timeline-years'
        });
    };
    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_testimonial_carousel.default', WidgetCMSItemCarouselHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_company_time_line.default', WidgetCMSTimeline );
    } );
} )( jQuery );