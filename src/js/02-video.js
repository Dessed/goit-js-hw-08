import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const VIDEO_TIME_KEY = "videoplayer-current-time";

const player = new Player("vimeo-player");

player.on('play', () => console.log('played the video!'));

player.on('timeupdate', (evt) => localStorage.setItem(VIDEO_TIME_KEY, JSON.stringify(evt.seconds)));

const savedTimeVideo = localStorage.getItem(VIDEO_TIME_KEY);

player.setCurrentTime(savedTimeVideo).then(function(seconds) {
    seconds = savedTimeVideo;
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            alert ('The time was less than 0 or greater than the video’s duration');
            break;

        default:
            alert ('some other error occurred');
            break;
    }
});
