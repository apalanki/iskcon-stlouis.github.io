(function ($) {

    skel
        .breakpoints({
            desktop: '(min-width: 737px)',
            tablet: '(min-width: 737px) and (max-width: 1200px)',
            mobile: '(max-width: 736px)'
        })
        .viewport({
            breakpoints: {
                tablet: {
                    width: 1080
                }
            }
        });

    $(function () {

        var $window = $(window),
            $body = $('body');

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on mobile.
        skel.on('+mobile -mobile', function () {
            $.prioritize(
                '.important\\28 mobile\\29',
                skel.breakpoint('mobile').active
            );
        });

        // Calender Javascript
        $('#content #calender').fullCalendar({
            defaultDate: new Date(),
            editable: false,
            googleCalendarApiKey: 'AIzaSyBeiPDzl4NZynytrYAA_mLpoFt3EXTVVu0',
            events: {
                googleCalendarId: 'lho0jgesg477kb4batmfe55dv8@group.calendar.google.com',
                className: 'gcal-event' // an option!
            },
            eventClick: function (event) {
                if (event.url) {
                    window.open(event.url);
                    return false;
                }
            }
        });

        // Dropdowns.
        $('#page-header nav > ul').dropotron({
            offsetY: -13
        });

        // Off-Canvas Navigation.

        // Title Bar.
        $(
            '<div id="titleBar">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '<span class="title">' + $('#logo').html() + '</span>' +
            '</div>'
        )
            .appendTo($body);

        // Navigation Panel.
        $(
            '<div id="navPanel">' +
            '<nav>' +
            $('#nav').navList() +
            '</nav>' +
            '</div>'
        )
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'left',
                target: $body,
                visibleClass: 'navPanel-visible'
            });

        // Fix: Remove transitions on WP<10 (poor/buggy performance).
        if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
            $('#titleBar, #navPanel, #page-wrapper')
                .css('transition', 'none');

        // Banner.
        var $banner = $('#banner');
        if ($banner.length > 0) {
            $banner.slidertron({
                mode: 'fade',
                viewerSelector: '.viewer',
                reelSelector: '.viewer .reel',
                slidesSelector: '.viewer .reel .slide',
                navNextSelector: '.nav-next',
                navPreviousSelector: '.nav-previous',
                slideCaptionSelector: '.caption-',
                captionLineSelector: '.caption-line-',
                captionLines: 2,
                advanceDelay: 5000,
                speed: 500,
                autoFit: true,
                autoFitAspectRatio: (1200 / 440),
                seamlessWrap: true
            });
            $window
                .on('resize load', function () {
                    $banner.trigger('slidertron_reFit');
                })
                .trigger('resize');
        }
    });

})(jQuery);