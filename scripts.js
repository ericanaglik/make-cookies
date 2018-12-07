 /******************
    COOKIE CLICKER
  *****************/
 
 //declare default variables
 let cookieCount = 0;
 

//declare DOM variables 
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
     

//CookieCounter.innerHTML = cookieCount;
 
//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount()
})

//Refresh cookies
let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
}



/******************
    CLICK POWER
*****************/

//default variables 
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

//declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//Buy click power
buyClickPower.addEventListener("click", function() {
    if (cookieCount >= clickPowerPriceAmount) {
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;

        //update cookie counter
        refreshCookieCount()

        //Upgrade power level
        clickPowerLevelNumber += 1;

        //Update click price 
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

        //Update Click Power 
        clickPower += 1;

        //refresh shop item
        refreshPowerClick();

        console.log("Item successfully Bought");
    } else {
        console.log("You don't have enough cookies!");
    }
})

//Refresh click power
let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}

/******************
    GRANDMAS
*****************/

//set default values
let grandmaAuto = false;
let grandmaPower = 100;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

//buy a grandma
buyGrandma.addEventListener("click", function() {

    //turn autoGrandma on!
    autoGrandma = true 
    autoGrandmaStart();
    
    //make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= grandmaPriceAmount) {
        // Subtract cookies from the price of the item. 
        cookieCount += - grandmaPriceAmount;
        refreshCookieCount()

        //upgrade power level
        grandmaLevelNumber += 1;

        //update price
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    }

    

    //update grandma power
    grandmaPower += 10;

    //turn autoGrandma on! 

    //refresh shop item 
    refreshGrandma();

})

let refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaLevelNumber;
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;
}

window.setInterval(function() {
    //executing code loop goes here
}, numberOfMilliSeconds)

let autoGrandmaStart = function() {
   let grandmaInt = window.setInterval(function(){
       cookieCount += grandmaPower;
       refreshCookieCount();
   }, 1000); 
}

/******************
    FACILITIES
*****************/

//set default variables
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies 

    //upgrade power level

    //update price 

    //update facility power 

    //turn autoFacility on!

    //refresh shop item
    
})

//game loop

//refresh shop