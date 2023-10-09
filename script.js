const play = document.getElementById('play');
const forward = document.getElementById('forward');
const previous = document.getElementById('previous');
const music = document.querySelector('audio');
const img = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
    {
        name: 'Brown Rang',
        title: 'Brown Rang',
        artist: 'Yo Yo Honey Singh'   
    },
    {
        name: 'kuley kuley',
        title: 'Kuley Kuley',
        artist: 'Honey 3.0'
    },
    {
        name: 'Billo Tu Aag',
        title: 'Billo Tu Aag',
        artist: 'Honey 2.0'
    }
];


let isPlaying = false;

const playMusic=()=>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime');
    
};

const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('anime');
};

play.addEventListener('click',()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }

    isPlaying ? pauseMusic() : playMusic();

});
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = 'Audios/'+songs.name+'.mp3';
    img.src = 'Images/'+songs.name+'.jpg';
};

songIndex = 0;

const forwSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

forward.addEventListener('click', forwSong);
previous.addEventListener('click', prevSong);