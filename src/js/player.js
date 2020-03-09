// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
//
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '360',
        width: '640',
        videoId: 'THuXFMrVd8Y',
        events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
        }
    });
}


