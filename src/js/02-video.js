



const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', function(evt) {
    console.log(evt);
    localStorage.setItem("videoplayer-current-time", evt);
});


// player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });
