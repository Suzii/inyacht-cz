var smallSearchWrapper = $('.small-search__wrapper');
if (smallSearchWrapper) {
    function positionSmallSearch() {
        var coverVideo = $('#cover-video');
        var coverVideoHeading = $('#cover-video-heading');
        var bookingManagerIframe = $('iframe#booking-manager');
        var bookingManagerContainer = $('.booking-manager__container--small');
        var screenWidth = $(window).width();
        if (screenWidth < 560) {
            bookingManagerIframe.height(227);
        }
        else if (screenWidth < 620) {
            bookingManagerIframe.height(176);
        }
        else {
            bookingManagerIframe.height(125);
        }
        if (screenWidth < 768) {
            coverVideoHeading.removeClass('overlay');
            bookingManagerContainer.removeClass('overlay');
            smallSearchWrapper.removeClass('overlay').css({ top: 0 });
        }
        else {
            var iframeHeight = bookingManagerIframe.height();
            var videoHeight = coverVideo.height();
            var positionTop = -(videoHeight / 2 + iframeHeight / 2) - coverVideoHeading.outerHeight();
            coverVideoHeading.addClass('overlay');
            bookingManagerContainer.addClass('overlay');
            smallSearchWrapper.addClass('overlay').css({ top: positionTop });
        }
    }
    positionSmallSearch();
    $(window).resize(positionSmallSearch);
}
