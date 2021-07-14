(function($) {
    "use strict";
    $(window).on('load', function() {
        $('#preloader').fadeOut();
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });
        $('.mobile-menu').slicknav({
            prependTo: '.navbar-header',
            parentTag: 'liner',
            allowParentLinks: true,
            duplicate: true,
            label: '',
            closedSymbol: '<i class="lni-chevron-right"></i>',
            openedSymbol: '<i class="lni-chevron-down"></i>',
        });
        var wow = new WOW({
            mobile: false
        });
        wow.init();
        $('.lightbox').nivoLightbox({
            effect: 'fadeScale',
            keyboardNav: true,
        });
        $('.counterUp').counterUp({
            delay: 10,
            time: 1000
        });
        var owl = $("#testimonials");
        owl.owlCarousel({
            navigation: true,
            pagination: true,
            slideSpeed: 1000,
            stopOnHover: true,
            autoPlay: true,
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsTablet: [767, 1],
            itemsTabletSmall: [480, 1],
            itemsMobile: [479, 1],
        });
        $("#new-products").owlCarousel({
            navigation: true,
            pagination: false,
            slideSpeed: 1000,
            stopOnHover: true,
            autoPlay: false,
            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsTablet: [767, 1],
            itemsTabletSmall: [480, 1],
            itemsMobile: [479, 1],
        });
// Testimonial Slider    
	$("#testimonial-block-slider").owlCarousel({
		loop: true,
		items: 1,
		dots: true,
		nav: true,
		autoplayTimeout: 10000,
		smartSpeed: 2000,
		autoHeight: false,
		touchDrag: true,
		mouseDrag: true,
		margin: 0,
		autoplay: true,
		slideSpeed: 600,
		navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: true,
			},
			600: {
				items: 1,
				nav: false,
				dots: true,
			},
			768: {
				items: 1,
				nav: false,
				dots: true,
			},
			1100: {
				items: 1,
				nav: false,
				dots: true,
			}
		}
	});

    // Testimonial Slider    
    $("#client-block-slider").owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        nav: true,
        autoplayTimeout: 10000,
        smartSpeed: 2000,
        autoHeight: false,
        touchDrag: true,
        mouseDrag: true,
        margin: 0,
        autoplay: true,
        slideSpeed: 600,
        navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            600: {
                items: 2,
                nav: false,
                dots: true,
            },
            768: {
                items: 3,
                nav: false,
                dots: true,
            },
            1100: {
                items: 4,
                nav: false,
                dots: true,
            }
        }
    });


        $("#search-carousel").owlCarousel({
            navigation: true,
            pagination: true,
            slideSpeed: 1000,
            stopOnHover: true,
            autoPlay: false,
            items: 1,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTablet: [767, 1],
            itemsTabletSmall: [480, 1],
            itemsMobile: [479, 1],
        });

        $("#new-products-new").owlCarousel({
            navigation: false,
            pagination: false,
            slideSpeed: 1000,
            stopOnHover: true,
            autoPlay: false,
            items: 1,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsTablet: [767, 1],
            itemsTabletSmall: [480, 1],
            itemsMobile: [479, 1],
        });
        var newProducts = $('.new-products');
        newProducts.find('.owl-prev').html('<i class="lni-chevron-left"></i>');
        newProducts.find('.owl-next').html('<i class="lni-chevron-right"></i>');
 
        var testiCarousel = $('.testimonials-carousel');
        testiCarousel.find('.owl-prev').html('<i class="lni-chevron-left"></i>');
        testiCarousel.find('.owl-next').html('<i class="lni-chevron-right"></i>');
        $('#new-products').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
        $('#new-products').find('.owl-next').html('<i class="lni-chevron-right"></i>');
        $('#search-carousel').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
        $('#search-carousel').find('.owl-next').html('<i class="lni-chevron-right"></i>');
        $('#new-products-new').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
        $('#new-products-new').find('.owl-next').html('<i class="lni-chevron-right"></i>');
        var owl;
        $(document).ready(function() {
            owl = $("#owl-demo");
            owl.owlCarousel({
                navigation: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                afterInit: afterOWLinit,
                afterUpdate: afterOWLinit
            });

            function afterOWLinit() {
                $('.owl-controls .owl-page').append('<a class="item-link" />');
                var pafinatorsLink = $('.owl-controls .item-link');
                $.each(this.owl.userItems, function(i) {
                    $(pafinatorsLink[i]).css({
                        'background': 'url(' + $(this).find('img').attr('src') + ') center center no-repeat',
                        '-webkit-background-size': 'cover',
                        '-moz-background-size': 'cover',
                        '-o-background-size': 'cover',
                        'background-size': 'cover'
                    }).click(function() {
                        owl.trigger('owl.goTo', i);
                    });
                });
                $('.owl-pagination').prepend('<a href="#prev" class="prev-owl"/>');
                $('.owl-pagination').append('<a href="#next" class="next-owl"/>');
                $(".next-owl").click(function() {
                    owl.trigger('owl.next');
                });
                $(".prev-owl").click(function() {
                    owl.trigger('owl.prev');
                });
            }
        });
        var matchHeight = function () {
    
    function init() {
        eventListeners();
        matchHeight();
    }
    
    function eventListeners(){
        $(window).on('resize', function() {
            matchHeight();
        });
    }
    
    function matchHeight(){
        var groupName = $('[data-match-height]');
        var groupHeights = [];
        
        groupName.css('min-height', 'auto');
        
        groupName.each(function() {
            groupHeights.push($(this).outerHeight());
        });
        
        var maxHeight = Math.max.apply(null, groupHeights);
        groupName.css('min-height', maxHeight);
    };
    
    return {
        init: init
    };
    
} ();

$(document).ready(function() {
    matchHeight.init();
});


/*$('.searchKeyword').on('change', function() {
  
console.log("on change");
});
*/
        // $('#summernote').summernote({
        //     height: 250,
        //     minHeight: null,
        //     maxHeight: null,
        //     focus: true
        // });
        var offset = 200;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });
        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        var itemList = $('.item-list');
        var gridStyle = $('.grid');
        var listStyle = $('.list');
        $('.list,switchToGrid').on('click', function(e) {
            e.preventDefault();
            itemList.addClass("make-list");
            itemList.removeClass("make-grid");
            itemList.removeClass("make-compact");
            gridStyle.removeClass("active");
            listStyle.addClass("active");
        });
        gridStyle.on('click', function(e) {
            e.preventDefault();
            listStyle.removeClass("active");
            $(this).addClass("active");
            itemList.addClass("make-grid");
            itemList.removeClass("make-list");
            itemList.removeClass("make-compact");
        });
    });
}(jQuery));


