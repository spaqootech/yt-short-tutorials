const video = document.getElementById('video')
const button = document.getElementById('button')

function pauseAndPlay(){
    if(video.paused){
        video.play();
        button.innerHTML="Pause";
    }else{
        video.pause();
        button.innerHTML="Play";
    }
}