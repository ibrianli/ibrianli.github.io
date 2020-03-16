// Brian Li

// Initialize helperApp
$(document).ready(function() {
    helperApp.init();
});

(function( helperApp, $ ) {

    var $cache = {};
    var initialized = false;

    function runThisFirst() {
        helperApp.initialized = true;
    }

    helperApp.init = function () {
        if (!initialized) {
            runThisFirst();
        }
    };
}( window.helperApp = window.helperApp || {}, jQuery ));


// helperApp.hamburger
(function( helperApp, $ ) {

    function initHamburger() {
        // Toggles the Hamburger Menu
        $('#nav-icon3').on('click', function(){
            $(this).toggleClass('open');
            $('.nav-background').toggleClass('open');
        });
        // Toggles the Navigation
        $('.hamburger-nav-button').on('click', function() {
            if ( $('.nav-menu').is(":visible") ) {
                $('.nav-menu').toggleClass('slideIn');
            } else {
                $('.nav-menu').toggle();
                $('.nav-menu').toggleClass('slideIn');
            }
        });
        $('.menu-items a').on('click', function(){
            $( "#nav-icon3" ).trigger( "click" );
        });
        $('.nav-background').click( function() {
            $( "#nav-icon3" ).trigger( "click" );
        });
    }

    helperApp.hamburger = {
        init : function () {
            initHamburger();
        }
    };

}( window.helperApp = window.helperApp || {}, jQuery ));


// helperApp.imageGallery
(function( helperApp, $ ) {
    var $cache = {};

    // Initializes Image Gallery
    function initGalleryLoader() {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var options = {
            index: 0,
            history: false
        };
        $('.work-image-banner').click(function() {
            // Read the title and determine the gallery to load
            var imageBrand = $(this).find('.work-brand').text();
            var items = [];
            switch(imageBrand) {
                case 'Bicycling':
                    {
                        items.push({ src: 'content/images/Work/OGs/full/cropped/Bicycling.jpg', w:1168, h:1922 });
                    }
                    break;
                case 'Prevention':
                    {
                        items.push({ src: 'content/images/Work/OGs/full/cropped/Prevention.jpg', w:1168, h:1794 });
                    }
                    break;
                case 'Runner\'s World':
                    {
                        items.push({ src: 'content/images/Work/OGs/full/cropped/Runner-s-World.jpg', w:1164, h:1763 });
                    }
                    break;
                case 'Men\'s Health':
                    {
                        items.push({ src: 'content/images/Work/OGs/full/cropped/Men-s-Health.jpg', w:1144, h:1746 });
                    }
                    break;
                case 'Crashstreet':
                    {
                        items.push({ src: 'content/images/Work/OGs/full/cropped/crashstreet.jpg', w:1013, h:2103 });
                    }
                    break;
                case 'Rodale Store':
                    {
                        items.push({ src: 'content/images/Work/OGs/full/cropped/Rodale-Store.jpg', w:1173, h:2062 });
                    }
                    break;
                case 'Steven Alan':
                    {
                        items.push({ src: 'content/images/Work/OGs/full/cropped/Steven-Alan.jpg', w:1002, h:3560 });
                    }
                    break;
                case 'Rodale\'s':
                    {
                        items.push({ src: 'content/images/Work/OGs/full/cropped/Rodales.jpg', w:1231, h:3791 });
                    }
                    break;
                case 'Women\'s Health':
                    {
                        items.push({ src: 'content/images/Work/OGs/full/cropped/Women-s-Health.jpg', w:1167, h:1844 });
                    }
                    break;
                default:
                    {}
            }
            // Initializes and opens PhotoSwipe on click.
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            if (items.length > 0) {
                gallery.init();
            }
        });
    }

    // public imageGallery object
    helperApp.imageGallery = {
        init : function () {
            initGalleryLoader();
        }
    };

}( window.helperApp = window.helperApp || {}, jQuery ));

// helperApp.navigation
(function( helperApp, $ ) {

    function updateActiveNav() {
        var hash = window.location.hash;
        var pageName = hash.substring(2);
        // clear current active class
        $('.header-nav div').removeClass('active');
        switch(pageName) {
            case 'bio': {
                    $('.header-nav .bio-link').addClass('active');
                }
                break;
            case 'experience': {
                    $('.header-nav .experience-link').addClass('active');
                }
                break;
            case 'work': {
                    $('.header-nav .work-link').addClass('active');
                }
                break;
            case 'contact': {
                    $('.header-nav .contact-link').addClass('active');
                }
                break;
            default: {
                break;
            }
        }
    }

    // public function
    helperApp.navigation = {
        init : function () {
            updateActiveNav();
        }
    };

}( window.helperApp = window.helperApp || {}, jQuery ));


// helperApp.workPage
(function( helperApp, $ ) {
    // Workpage Hover effects
    function workPageInit() {
        // Work Page Image Effects
        $('.work-image').hover( function() {
            // On Hover
            $('.work-detail', this).addClass('highlight');
        }, function() {
            // Off Hover
            $('.work-detail', this).removeClass('highlight');
        });
    }

    helperApp.workPage = {
        init : function() {
            workPageInit();
        }
    };

}( window.helperApp = window.helperApp || {}, jQuery ));
    