let music = [
    [new Audio("audio/F-777-WhamWham.mp3"), "1. Wham Wham"],
    [new Audio("audio/F-777-Ultra.mp3"), "2. Ultra"],
    [new Audio("audio/F-777-ElementofDance2.mp3"),"3. Element of Dance 2"],
    [new Audio("audio/F-777-ToInfinity&BuzzLightyear.mp3"), "4. To Infinity & Buzz Lightyear"],
    [new Audio("audio/F-777-ImSoClassy.mp3"), "5. Im So Classy"],
    [new Audio("audio/F-777-NeedsKetchup--F-777&Aminta-.mp3"), "6. Needs Ketchup - [F-777 & Aminta]"],
    [new Audio("audio/F-777-LostConnection.mp3"), "7. Lost Connection"],
    [new Audio("audio/F-777-Cluster.mp3"), "8. Cluster"],
    [new Audio("audio/F-777-Slurpee.mp3"), "9. Slurpee"],
    [new Audio("audio/F-777-Deadlocked.mp3"), "10. Deadlocked"],
    [new Audio("audio/F-777-Deadlocked(AriRemix).mp3"), "11. Deadlocked (Ari Remix)"],
    [new Audio("audio/F-777-PartyTime.mp3"), "12. Party Time"],
    [new Audio("audio/F-777-DarkAngel(PianoVersion).mp3"), "13. DarkAngel (Piano Version)"],
    [new Audio("audio/F-777-SystemSplit.mp3"), "14. System Split"],
    [new Audio("audio/F-777-Deadlocked(AmintaRemix).mp3"), "15. Deadlocked (Aminta Remix)"] 
];

let count = 0;
let play_status = "pause";


function mute(){
     let soundButtton = document.getElementById("sound_button");

    document.getElementById("sound_img").setAttribute("src", "img/mute.png");
    soundButtton.setAttribute("onclick", "unmute()");

    music[count][0].volume = 0.0;
}

function unmute(){
    let soundButtton = document.getElementById("sound_button");

    document.getElementById("sound_img").setAttribute("src", "img/audio.png");
    soundButtton.setAttribute("onclick", "mute()");

    music[count][0].volume = 1.0;
}

function previous(){
    if(count != 0) {
        music[count][0].currentTime = 0;
        music[count][0].pause();
        count--;
        document.getElementById("play_img").setAttribute("src", "img/pause.png");
        document.getElementById("song-name").innerHTML = music[count][1];
        music[count][0].play();
    }
}

function next(){
    if(count != (music.length-1)) {
        music[count][0].currentTime = 0;
        music[count][0].pause();
        count++;
        document.getElementById("play_img").setAttribute("src", "img/pause.png");
        document.getElementById("song-name").innerHTML = music[count][1];
        music[count][0].play();
    }
}

function play(){
    let playButtton = document.getElementById("play_button");

    document.getElementById("play_img").setAttribute("src", "img/pause.png");
    playButtton.setAttribute("onclick", "pause()");

    music[count][0].play();
}

function pause(){
    let playButtton = document.getElementById("play_button");

    document.getElementById("play_img").setAttribute("src", "img/play.png");
    playButtton.setAttribute("onclick", "play()");

    music[count][0].pause();
}
