import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


    player.on('play', function() {
        console.log('played the video!');
    });

function savePlayedTime(event) {
     localStorage.setItem("videoplayer-current-time", event.seconds);
  }

    player.on('timeupdate', throttle(savePlayedTime, 1000));

const savedPlayedTime = localStorage.getItem("videoplayer-current-time");
        console.log(savedPlayedTime);

player.setCurrentTime(savedPlayedTime);

