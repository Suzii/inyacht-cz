const smallSearchWrapper = $('.small-search__wrapper');

if (smallSearchWrapper) {
    function positionSmallSearch() {
        const coverVideo = $('#cover-video');
        const coverVideoHeading = $('#cover-video-heading');
        const bookingManagerIframe = $('iframe#booking-manager');
        const bookingManagerContainer = $('.booking-manager__container--small');


        const screenWidth = $(window).width();

        if (screenWidth < 560) {
            bookingManagerIframe.height(227);
        }
        else if (screenWidth < 620) {
            bookingManagerIframe.height(176);
        } else {
            bookingManagerIframe.height(125);
        }

        if (screenWidth < 768) {
            coverVideoHeading.removeClass('overlay');
            bookingManagerContainer.removeClass('overlay');
            smallSearchWrapper.removeClass('overlay').css({top: 0});
        } else {
            const iframeHeight = bookingManagerIframe.height();
            const videoHeight = coverVideo.height();
            const positionTop = -(videoHeight / 2 + iframeHeight / 2) - coverVideoHeading.outerHeight();

            coverVideoHeading.addClass('overlay');
            bookingManagerContainer.addClass('overlay');
            smallSearchWrapper.addClass('overlay').css({top: positionTop});
        }
    }

    positionSmallSearch();
    $(window).resize(positionSmallSearch);
}
