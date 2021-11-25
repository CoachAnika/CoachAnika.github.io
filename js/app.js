//Initialize game with name submit//

const $submitButton = $("button.submitButton");

let $playerName; // Declared later.

$submitButton.on("click", function logPlayerName () {
    $playerName = document.getElementById('petName').value;
    firstPet = new Player ()
    boredTimer();
    hungerTimer();
    sleepTimer();
    setTimer(); 
});

// ALL TIMERS HERE//

//Bored Timer//
let boredCount = 0; 

const boredTimer = function boredTimer () { 
    const updateBoredTime = function updateBoredTime () {
        console.log("Every 1 seconds, character's bored level increases by 1. The count is now:", boredCount);
        boredCount++;
        firstPet.boredLevel++;
        $("#boredTimer").text(`Bored Level: ${firstPet.boredLevel}`)
        if (boredCount >= 10) {
            prompt("Game Over");
            deathScreen();
        }
     

    };
    timers.bored = setInterval (updateBoredTime, 2 * 1000);   
};

// Hunger Timer 
let hungerCount = 0; 

const hungerTimer = function hungerTimer () { 
    const updateHungerTime = function updateHungerTime () {
        console.log("Every 2 seconds, character's bored level increases by 1. The count is now:", hungerCount);
        hungerCount++;
        firstPet.hungerLevel++;
        $("#hungerTimer").text(`Hunger Level: ${firstPet.hungerLevel}`)
        if (hungerCount >= 10) {
            prompt("Game Over");
            deathScreen();
        }
     

    };
    timers.hunger = setInterval (updateHungerTime, 4 * 1000);   
};

//Sleep Timer//
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
    timers.sleep = setInterval (updateSleepTime, 6 * 1000);   
};


// Age Timer/

let time = 1; 

const setTimer = function setTimer() {
    const updateTime = function updateTime() {
        console.log("Every 15 seconds, character's age is 1 day older", time);
        $("#ageTimer").text(`Age: ${time} Days`);
        time++;
        firstPet.age++;
    };
    timers.age = setInterval (updateTime, 6 * 1000);
};

// ALL TIMERS HERE

const timers = {
    
    bored: null,
    hunger: null,
    sleep: null, 
    age: null,
}




// EVENT LISTENERS FOR REDUCING TIMERS//

// Event Listener for reducing bored timer//
$(".boredBox").on("click",function playerBored(){
    if (boredCount > 1) {
    boredCount--;
    firstPet.boredLevel--;
    $("#boredTimer").text(`Bored Level: ${firstPet.boredLevel}`)
    } else if (boredCount < 1) {
        $(".boredBox").css("pointer-events:", "auto:");
    }
});

//Event Listener for reducing hunger timer//

$(".hungerBox").on("click",function playerHunger(){
    if (hungerCount > 1) {
    hungerCount--;
    firstPet.hungerLevel--;
    $("#hungerTimer").text(`Hunger Level: ${firstPet.hungerLevel}`)
    } else if (hungerCount < 1) {
        $(".hungerBox").css("pointer-events:", "auto:");
    }
});


// Event Listener for reducing sleep timer//
$(".sleepBox").on("click",function playerSleep(){
    if (sleepCount > 1) {
    sleepCount--;
    firstPet.sleepLevel--;
    $("#sleepTimer").text(`Sleep Level: ${firstPet.sleepLevel}`)
    } else if (sleepCount < 1) {
        $(".sleepBox").css("pointer-events:", "auto:");
    }
});

// Class Player for later operational use //

class Player {
    constructor() {           
      // default props
    this.boredLevel = boredCount;
    this.hungerLevel = hungerCount;
    this.sleepLevel = sleepCount;
    this.age = time;
      // assigned props
    this.name =  $playerName;
      
    }
    /* Class Player for later operational use */
  };
    function deathScreen(){
    clearInterval(timers.bored);
    clearInterval(timers.hunger);
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
// $("#play-Btn").on("click",function playerPlay(){
//     $("#stand img").hide();
//     $("#eat img").hide();
//     $("#sleep img").hide();
//     $("#play img").fadeIn(1000);
// });

// Change Image on Event Listener for eat
// $("#feed-Btn").on("click",function playerEat(){
//     $("#stand img").hide();
//     $("#play img").hide();
//     $("#sleep img").hide();
//     $("#eat img").fadeIn(1000);
// });


    
 
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

