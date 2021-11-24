/*GLOBAL VARIABLES*/
let time = 0;

// Setting Object

class Tamagotchi {
    constructor() {
        this.hunger = 0,
        this.fatigue = 0,
        this.boredom = 0,
        this.age = 1,
        this.alive = true
        this.image = "",
        this.stage = 0,
        this.evolutionOne = ""
    }

    // have to add tamagotchi functions here.
};

//Adding Event Listeners
// Can I call two functions in an event listener.

// const feedBtn = document.getElementById("feed-Btn");
// feedBtn.addEventListener("click", function(evt) {
//     console.log(evt);
// });

// const playBtn = document.getElementById("play-Btn");
// playBtn.addEventListener("click", function(evt) {
//     console.log(evt);
// });

// const sleepBtn = document.getElementById("sleep-Btn");
// sleepBtn.addEventListener("click", function(evt) {
//     console.log(evt);
// });

// Change Level on Event Listener
// let boredCount = 1;
// const firstPlayer = new Tamagotchi()
// const boredTimer = function boredTimer() {
//     console.log("Every 30 seconds, characters boredom level increases by 1. The count is now:", boredCount);
//     boredCount++
//     firstPlayer.boredLevel++;
//     $("#boredTimer").text(`Boredom Level: ${firstPlayer.boredLevel}.`)
// };

// document.getElementById('play-Btn').onclick=function(){
//     let boredomLevel = parseInt(document.getElementById("boredTimer").innerHTML);
//     boredTimer++
//     document.getElementById("boredTimer").innerHTML= boredomLevel;
// }
// Default pet-area
// $("#eat img").hide();
// $("#play img").hide();
// $("#sleep img").hide();
// $("#stand img").fadeIn(1000);


// Change Image on Event Listener for sleep
$("#sleep-Btn").on("click",function playerSleep(){
    $("#stand img").hide();
    $("#eat img").hide();
    $("#play img").hide();
    $("#sleep img").fadeIn(1000);
});
   
// Change Image on Event Listener for play
$("#play-Btn").on("click",function playerPlay(){
    $("#stand img").hide();
    $("#eat img").hide();
    $("#sleep img").hide();
    $("#play img").fadeIn(1000);
});

// Change Image on Event Listener for eat
$("#feed-Btn").on("click",function playerEat(){
    $("#stand img").hide();
    $("#play img").hide();
    $("#sleep img").hide();
    $("#eat img").fadeIn(1000);
});





