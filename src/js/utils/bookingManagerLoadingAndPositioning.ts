const smallSearchWrapper = $('.small-search__wrapper');
const largeSearchWrapper = $('.booking-manager__container--large');

function getSmallIframeHeight(screenWidth: number) {
    if (screenWidth < 560)
        return 227;

    if (screenWidth < 620)
        return 176;

    return 125;
}

function hideSpinnerAfterIframeLoads($iframe: JQuery<HTMLElement>, $spinner: JQuery<HTMLElement>, topSpinnerPosition?: number) {
    const iframeHeight = getSmallIframeHeight($(window).width());
    const spinnerHeight = $spinner.height();
    const spinnerTopBottomPadding = (iframeHeight - spinnerHeight) / 2;

    $spinner.css({
        paddingTop: topSpinnerPosition || spinnerTopBottomPadding,
        paddingBottom: spinnerTopBottomPadding,
    });

    $iframe.on('load', () => {
        $spinner.remove();
        $iframe.show();
    });
}

function positionSmallSearch() {
    const coverVideo = $('#cover-video');
    const coverVideoHeading = $('#cover-video-heading');
    const bookingManagerIframe = $('iframe#booking-manager');
    const bookingManagerContainer = $('.booking-manager__container--small');

    const screenWidth = $(window).width();
    bookingManagerIframe.height(getSmallIframeHeight(screenWidth));

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

if (smallSearchWrapper) {
    positionSmallSearch();
    hideSpinnerAfterIframeLoads($('iframe#booking-manager'), $('.booking-manager__container--small .spinner'));
    $(window).resize(positionSmallSearch);
}

if (largeSearchWrapper) {
    hideSpinnerAfterIframeLoads($('iframe#vysledky'), $('.booking-manager__container--large .spinner'), 60);
}
