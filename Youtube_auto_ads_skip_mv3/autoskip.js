
window.onload = function(){
    setInterval(function () {
        if (document.getElementsByClassName("ytp-ad-skip-button")[0] != undefined) {
            console.log('Find Video Ads & Run Auto Skip');
            document.getElementsByClassName("html5-main-video")[0].currentTime = 999;
            document.getElementsByClassName("html5-main-video")[0].play();
            document.getElementsByClassName("ytp-ad-skip-button-modern")[0].click();
            document.getElementsByClassName("ytp-ad-skip-button")[0].click();
        }

        if (document.getElementsByClassName("ytp-ad-overlay-close-button")[0] != undefined) {
            console.log('Find Popup Ads & Close Popup Ads');
            document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
        }

        if (document.getElementsByClassName("ytp-ad-player-overlay-skip-or-preview")[0] != undefined) {
            console.log('Find Short Video Ads & Skip');
            document.getElementsByClassName("html5-main-video")[0].currentTime = 999;
        }

        document.getElementsByClassName("ytp-ad-skip-button-modern")[0].click();
        document.getElementsByClassName("ytp-ad-skip-button")[0].click();

    }, 250);
}   
