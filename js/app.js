//INITIALIZE //

let $playerName; // Declared later.
const $submitButton = $("button.submitButton");
// const playFx = new Audio('./Audio/Early-morning-sounds-in-the-village.mp3');

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


// Collect Name Function to append it to the name field in the header
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
        console.log("Every 2 seconds, character's bored level increases by 1. The count is now:", boredCount);
        boredCount++;
        firstPet.boredLevel++;
        $("#boredTimer").text(`Bored Level: ${firstPet.boredLevel}`)
        if (boredCount >= 10) {
            gameOver();
            
        }
     

    };
    timers.bored = setInterval (updateBoredTime, 1 * 1000);   
};

// Hunger Timer 
let hungerCount = 0; 

const hungerTimer = function hungerTimer () { 
    const updateHungerTime = function updateHungerTime () {
        console.log("Every 3 seconds, character's bored level increases by 1. The count is now:", hungerCount);
        hungerCount++;
        firstPet.hungerLevel++;
        $("#hungerTimer").text(`Hunger Level: ${firstPet.hungerLevel}`)
        if (hungerCount >= 10) {
            gameOver();
         
        }
     

    };
    timers.hunger = setInterval (updateHungerTime, 2 * 1000);   
};

//Sleep Timer//
let sleepCount = 0; 

const sleepTimer = function sleepTimer () { 
    const updateSleepTime = function updateSleepTime () {
        console.log("Every 4 seconds, character's sleep level increases by 1. The count is now:", sleepCount);
        sleepCount++;
        firstPet.sleepLevel++;
        $("#sleepTimer").text(`Sleep Level: ${firstPet.sleepLevel}`)
        if (sleepCount >= 10) {
            gameOver();
            
        }
     
    };
    timers.sleep = setInterval (updateSleepTime, 3 * 1000);   
};


// Age Timer/

let time = 0; 

const setTimer = function setTimer() {
    const updateTime = function updateTime() {
        time++;
        firstPet.age++; 
        $("#ageTimer").text(`Age: ${time} Days`);
        if (time >= 7) {
            console.log("first transformation image should show up. Time is now:", time);
            petTransformHatch();
            petTransform1();
        if (time >= 13) {
            console.log("second transformation image should show up. Time is now:", time);
            petTransformStand();
            petTransform2();
        if (time >= 20) {
            console.log("You are winning the game. Time is now:", time);
            gameWon();
            

        };

        };   
        
        };
    };
    timers.age = setInterval (updateTime, 2 * 1000);
};


// ALL TIMERS HERE
const timers = {
    bored: null,
    hunger: null,
    sleep: null, 
    age: null,
}



//Two iterations of pet transformations. There has to be a better way to do this.//


const petTransformHatch= function petTransform() {
    console.log("Chick-sanity check");
    $('#hatch').show(); 
};

const petTransform1 = function petTransformEgg() {
    console.log("Egg-sanity check");
    $('#egg').hide(); 
};

const petTransformStand = function petTransform() {
    console.log("Chick-sanity check");
    $('#stand').show(); 
};

const petTransform2 = function petTransform() {
    console.log("Chick-sanity check");
    $('#hatch').hide(); 
};



// EVENT LISTENERS FOR REDUCING TIMERS ON CLICK//

// Event Listener for reducing bored timer//
$(".boredBox").on("click",function playerBored(){
    if (boredCount < 1) {
        $(".boredBox").css("pointer-events:", "auto;");
    
    } else if (boredCount > 1) {
        boredCount--;
        firstPet.boredLevel--;
    $("#boredTimer").text(`Bored Level: ${firstPet.boredLevel}`)
        
    }
});

//Event Listener for reducing hunger timer//

$(".hungerBox").on("click",function playerHunger(){
    if (hungerCount < 1) {
        $(".hungerBox").css("pointer-events:", "auto;");
    
    } else if (hungerCount > 1) {
        hungerCount--;
        firstPet.hungerLevel--;
        $("#hungerTimer").text(`Hunger Level: ${firstPet.hungerLevel}`)
    }
    
});


// Event Listener for reducing sleep timer//
$(".sleepBox").on("click",function playerSleep(){
    if (sleepCount < 1) {
        $(".sleepBox").css("pointer-events:", "auto;");
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

  //GAME END SCREENS. RESETS TIMERS//
    function deathScreen(){
    clearInterval(timers.bored);
    clearInterval(timers.hunger);
    clearInterval(timers.sleep);
    clearInterval(timers.age);
   
  } 

    //PROMPT ON LOOSING GAME OVER//
    function gameOver () {
    $("#quit-game").css('display', 'flex');
    $('#egg').hide(); 
    $('#hatch').hide(); 
    $('#stand').hide();
    deathScreen();
}
    //PROMPT ON WINNING GAME RESTART//
    function gameWon () {
    $("#win-game").css('display', 'flex');
    $('#stand').hide(); 
    deathScreen();
    }


  // HIDE PET IMAGES AT START AND SHOW AS THEY TRANSFORM
    $('#egg').hide(); 
    $('#hatch').hide(); 
    $('#stand').hide(); 

    
 //TO TOGGLE TO DARK//
//To toggle to dark with light button

$("#chk").on("click",function myFunction(){
    let element = document.body;
    element.classList.toggle("dark-mode");
 });

//TO TOGGLE TO DARK//
//To toggle to dark with sleep button//
 $(".sleepBox").on("click",function myFunction(){
    let element = document.body;
    element.classList.toggle("dark-mode");
 });

//TO TOGGLE TO SOUND PLAY//
//To toggle to bird sounds with play button//
$('#play-Btn').on("click",function togglePlay () {
    return playFx.paused ? playFx.play() : playFx.pause();
});

//TO FLASH MOVE DANCE//
// To toggle to dancing bird on feed button//
$('#feed-Btn').on("click", function feedDance() {
    $('#egg, #hatch, #stand').addClass('flash');
    setTimeout(function () { $('#egg, #hatch, #stand').removeClass('flash'); }, 500);
});

//CODE FOR PREVENTING DOUBLE CLICKING, FOR LATER//
// $('#feed-Btn').click(function(event) {
//     if(!event.detail || event.detail == 1){ return true; }
//     else { return false; }
//   });

//   $('#play-btn').click(function(event) {
//     if(!event.detail || event.detail == 1){ return true; }
//     else { return false; }
//   });

//   $('#sleep-btn').click(function(event) {
//     if(!event.detail || event.detail == 1){ return true; }
//     else { return false; }
//   });

//BUTTON ANIMATIONS//FUNCTIONS, CODE TO TRY OUT LATER//
// Tried this but it would not toggle on click//
// Feed button animated, TO REVISIT FOR SET TIMEOUT, IT NEEDS TO ALWAYS PLAY ON CLICK//
// $('#feed-Btn').on("click",function animateFeedButton() {
//     $(".pet-area").addClass('flash');
//     setTimeout(function () { 
   
// }, 1000); 
// })

// ALTERNATIVE CODE FOR PET TRNSFORMATION LOGIC//

// const petTransform = function petTransform() {
//     console.log("Chicken-show sanity check");
//     let img = document.getElementById('hatch');
//    img.style.visibility ='visible';
// };

// const petTransformEgg = function petTransformEgg() {
// console.log("Egg-hidesanity check");
//    let img = document.getElementById('egg');
//    img.style.visibility ='hidden';
// };

//EVENT LISTENERS FOR BUTTONS FOR THE FUTURE, TO CHANGE IMAGES ON CLICK//
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