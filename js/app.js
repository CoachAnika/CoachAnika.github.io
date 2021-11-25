//Initialize game with name submit//

const $submitButton = $("button.submitButton");

let $playerName;

$submitButton.on("click", function logPlayerName () {
    $playerName = document.getElementById('petName').value;
    firstPet = new Player ()
    setTimer();
    sleepTimer();
});

//Timer for Sleep//

let sleepCount = 0; 

const sleepTimer = function sleepTimer () { 
    const updateSleepTime = function updateSleepTime () {
        console.log("Every 5 seconds, character's sleep level increases by 1. The count is now:", sleepCount);
        sleepCount++;
        firstPet.sleepLevel++;
        $("#sleepTimer").text(`Sleep Level: ${firstPet.sleepLevel}`)
        if (sleepCount >= 10) {
            prompt("Game Over");
            deathScreen();
        }
     

    };
    timers.sleep = setInterval (updateSleepTime, 2 * 1000);   
};

// ALL TIMERS HERE

const timers = {
    
    
    sleep: null, 
    age: null,
}

// Event Listener for reducing sleep timer//
$(".sleepBox").on("click",function playerSleep(){
    // $("#stand img").hide();
    // $("#eat img").hide();
    // $("#play img").hide();
    // $("#sleep img").fadeIn(1000);
    if (sleepCount > 1) {
    sleepCount--;
    firstPet.sleepLevel--;
    $("#sleepTimer").text(`Sleep Level: ${firstPet.sleepLevel}`)
    } else if (sleepCount < 1) {
        $(".sleepBox").css("pointer-events:", "auto:");
    }
});


// Age Timer, setTimer for Game//

let time = 1; 

const setTimer = function setTimer() {
    const updateTime = function updateTime() {
        console.log("Every 15 seconds, character's age is 1 day older", time);
        $("#ageTimer").text(`Age: ${time} Days`);
        time++;
        firstPet.age++;
    };
    timers.age = setInterval (updateTime, 10 * 1000);
};

class Player {
    constructor() {           
      // default props
    this.sleepLevel = sleepCount;
    this.age = time;
      // assigned props
    this.name =  $playerName;
      
    }
    /* Class Player for later operational use */
  };
    function deathScreen(){
    clearInterval(timers.sleep);
    clearInterval(timers.age);
  } 


//   Change Image on Event Listener for sleep
// $(".sleepBox").on("click",function playerSleep(){
    // $("#stand img").hide();
    // $("#eat img").hide();
    // $("#play img").hide();
    // $("#sleep img").fadeIn(1000);
// });

    
    
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


    
 
//To toggle to dark 

$("#chk").on("click",function myFunction(){
    let element = document.body;
    element.classList.toggle("dark-mode");
 });


//Event Listeners for Sleep Button

 $(".sleepBox").on("click",function myFunction(){
    let element = document.body;
    element.classList.toggle("dark-mode");
 });

 $(".sleepBox").on("click",function playerSleep(){
    $("#stand img").hide();
    $("#eat img").hide();
    $("#play img").hide();
    $("#sleep img").fadeIn(1000);
 });   