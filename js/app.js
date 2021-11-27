//INITIALIZE //
const $submitButton = $("button.submitButton");
let $playerName; // Declared later.

// GAME STARTS WITH NAME
$submitButton.on("click", function logPlayerName () {
    $playerName = document.getElementById('petName').value;
    firstPet = new Player ()
    collectName();
    boredTimer();
    hungerTimer();
    sleepTimer();
    setTimer(); 
    $("#input-form").remove();
    $('#egg').show();
});



/* If user clicks Enter key, same as button click $submitButton */
$("#petName").keyup(function(event) {
    if (event.keyCode === 13) {
        $($submitButton).click();
    }
});


// Collect Name Function and append it to the name field in the header
const collectName = function collectName() {
    // console.log("sanity check");
    firstPet.name = $('#petName').val();
    $('#span-name').text(`    ${firstPet.name}`);
};

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
            // prompt("Game Over");
            gameOver();
            // deathScreen();
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
            // prompt("Game Over");
            gameOver();
            // deathScreen();
        }
     

    };
    timers.hunger = setInterval (updateHungerTime, 3 * 1000);   
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
            // prompt("Game Over");
            gameOver();
            // deathScreen();
        }
     
    };
    timers.sleep = setInterval (updateSleepTime, 4 * 1000);   
};


// Age Timer/

let time = 0; 

const setTimer = function setTimer() {
    const updateTime = function updateTime() {
        time++;
        firstPet.age++; 
        $("#ageTimer").text(`Age: ${time} Days`);
        if (time >= 3) {
            console.log("changed image should show up. Time is now:", time);
            petTransformHatch();
            petTransform1();
        
        }
    };
    timers.age = setInterval (updateTime, 2 * 1000);
};

// const petTransform = function petTransform() {
//     console.log("Chicken-show sanity check");
//     let img = document.getElementById('hatch');
//    img.style.visibility ='visible';
// };

// Two iterations of pet transformations. There has to be a better way to do this.//


const petTransformHatch= function petTransform() {
    console.log("Chick-sanity check");
    $('#hatch').show(); 
};

const petTransform1 = function petTransformEgg() {
    console.log("Egg-sanity check");
    $('#egg').hide(); 
};


// const petTransform2 = function petTransform() {
//     console.log("Chick-sanity check");
//     $('#hatch').show(); 
// };

// const petTransformStand= function petTransform() {
//     console.log("Chick-sanity check");
//     $('#hatch').show(); 
// };

// const petTransformEgg = function petTransformEgg() {
// console.log("Egg-hidesanity check");
//    let img = document.getElementById('egg');
//    img.style.visibility ='hidden';
// };

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
    if (boredCount < 1) {
        $(".boredBox").css("pointer-events:", "none;");
    
    } else if (boredCount > 1) {
        boredCount--;
    firstPet.boredLevel--;
    $("#boredTimer").text(`Bored Level: ${firstPet.boredLevel}`)
        
    }
});

//Event Listener for reducing hunger timer//

$(".hungerBox").on("click",function playerHunger(){
    if (hungerCount < 1) {
        $(".hungerBox").css("pointer-events:", "none;");
    
    } else if (hungerCount > 1) {
        hungerCount--;
        firstPet.hungerLevel--;
        $("#hungerTimer").text(`Hunger Level: ${firstPet.hungerLevel}`)
    }
});


// Event Listener for reducing sleep timer//
$(".sleepBox").on("click",function playerSleep(){
    if (sleepCount < 1) {
        $(".sleepBox").css("pointer-events:", "none;");
    $("#sleepTimer").text(`Sleep Level: ${firstPet.sleepLevel}`)

    } else if (sleepCount > 1) {
        sleepCount--;
        firstPet.sleepLevel--;
        $("#sleepTimer").text(`Sleep Level: ${firstPet.sleepLevel}`)
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

  //GAME END SCREEN. DEFAULT WITH PROMPT AND RESET TIMERS
    function deathScreen(){
    clearInterval(timers.bored);
    clearInterval(timers.hunger);
    clearInterval(timers.sleep);
    clearInterval(timers.age);
   
  } 

  // HIDE PET IMAGES AND SHOW WHEN TRANSFORM
$('#hatch').hide(); 
$('#egg').hide(); 

//BUTTON ANIMATIONS//FUNCTIONS
// $('$hungerBox').on("click",function animeFeedButton() {
//    addClass('animate_bounce animate_faster');
//     setTimeout(function () { 
//     removeClass('animate_bounce animate_faster'); 
// }, 1000); 
// })

//EVENT LISTENERS FOR BUTTONS//


//Will this work if I get it out of the function//

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


    
 //TO TOGGLE TO DARK
//To toggle to dark with light button

$("#chk").on("click",function myFunction(){
    let element = document.body;
    element.classList.toggle("dark-mode");
 });


//Button animations//
 $(".sleepBox").on("click",function myFunction(){
    let element = document.body;
    element.classList.toggle("dark-mode");
 });


//FUNCTION GAME OVER//

function gameOver () {
    $("#quit-game").css('display', 'flex');
    $('#hatch').hide(); 
    deathScreen();
}
