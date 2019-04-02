/* Sticky Header on load and resize ***************************************************************************/
$(document).ready(stickySubNav = function() {
	var subNav = '.js-stickySubNav';
    var gap ='.js-stickySubNav-gap';
    var subNavHeight = $(subNav).outerHeight();
    var header = '.js-stickyHeader';
    var headerHeight = $(header).outerHeight();
    var brandHeader = '.js-brandHeader';
    var offset = $(brandHeader).outerHeight();

    var resize = function() {
        $(window).resize(function() {
            var subNavHeight = $(subNav).outerHeight();
            var headerHeight = $(header).outerHeight();
            var offset = $(brandHeader).outerHeight();

            $(window).scroll(function() {
                if ($(this).scrollTop() >= offset) {
                    $(subNav).addClass('subNav_fixed');
                    $(subNav).css('top', headerHeight + "px");
                    $(gap).css('height', subNavHeight);
                } else {
                    $(subNav).removeClass('subNav_fixed');
                    $(gap).css('height', '0');
                }
            });
        });

    };

    //resize();

    $(window).scroll(function() {
        if ($(this).scrollTop() >= offset) {
            $(subNav).addClass('subNav_fixed');
            $(subNav).css('top', headerHeight + "px");
            $(gap).css('height', subNavHeight);
        } else {
            $(subNav).removeClass('subNav_fixed');
            $(gap).css('height', '0');
        }
    });

});

module.exports = stickySubNav;