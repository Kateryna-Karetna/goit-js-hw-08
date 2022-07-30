import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onUpdateTime, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);
player.setCurrentTime(currentTime ?? 0);

function onUpdateTime(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}