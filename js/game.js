// Containers---------------
const gameindex = document.querySelector('.gameindex');
const playwithComputer = document.querySelector('.PlayComputer');
const playwithFriend = document.querySelector('.PlayFriend');
const Opponent = document.querySelector('.Opponent');
const win = document.querySelector('.Win');
const lose = document.querySelector('.lose');
// Containers---------------

// Elements----------
const hint = document.querySelector('.hint');
const InputNumber = document.querySelector('.inputNum');
const ComNumber = document.querySelector('.Comnumber');
const lifeCount = document.querySelector('.lifeCount');
const InputFROMPlayone = document.querySelector('.inputPone');
const OpponentInput = document.querySelector('.OpponentInput');
const hintForOpponent = document.querySelector('.hintForOpponent');
const lifeofOpponent = document.querySelector('.lifeofOpponent');
const inputerror = document.querySelector('.inputerror');
const ChallagerError = document.querySelector('.ChallagerError');
const OpponentError = document.querySelector('.OpponentError');
// Elements----------

// Buttons---------------
const btnComputer = document.getElementById('Pcomputer');
const btnFriend = document.getElementById('Pfriend');
const btnSubmit = document.getElementById('Submit');
const btnCSubmit = document.getElementById('ChallageSubmit');
const OpponentCheck = document.getElementById('OpponentCheck');
// Buttons---------------

// Visibility Set---------------
playwithComputer.style.visibility = "hidden";
playwithFriend.style.visibility = "hidden";
win.style.visibility = "hidden";
lose.style.visibility = "hidden";
Opponent.style.visibility = "hidden";
gameindex.style.visibility = "visible";
// Visibility Set---------------


// play with Computer----------
let life = 2;
btnComputer.addEventListener('click', function () {
    playwithComputer.style.visibility = "visible";
    gameindex.style.visibility = "hidden";

    const randomNumber = Math.round(Math.random() * 11);
    ComNumber.innerText = randomNumber;
    
    if (randomNumber % 2 == 0) {
        hint.innerText = "I Select A Even Number"
    } else {
        hint.innerText = "I Select A Odd Number"
    }

    btnSubmit.addEventListener("click", function () {
        if (!InputNumber.value) {
            inputerror.innerText = "Please write something";    
        } else if (isNaN(InputNumber.value)) {
            inputerror.innerText = "Please number something";   
            InputNumber.value = '';
        } else if (!(InputNumber.value > 0 && InputNumber.value <= 10)) {
            inputerror.innerText = "Enter A number Between 0 to 10";   
            InputNumber.value = '';
        } else {
            if (life > 1) {
                life--
                lifeCount.innerText = `0${life}`
                if (InputNumber.value === ComNumber.innerText) {
                    win.style.visibility = "visible";
                    playwithComputer.style.visibility = "hidden";
                }
            } else {
                lose.style.visibility = "visible";
                playwithComputer.style.visibility = "hidden";
            }
            InputNumber.value = '';
        }
    });
})
// play with Computer----------

// play with Friend----------
btnFriend.addEventListener('click', function () {
    playwithComputer.style.visibility = "hidden";
    playwithFriend.style.visibility = "visible";
    gameindex.style.visibility = "hidden";
})

btnCSubmit.addEventListener('click', function () {
    const ChallengingNumber = InputFROMPlayone.value;
    


    if (ChallengingNumber % 2 == 0) {
        hintForOpponent.innerText = "I Select A Even Number"
    } else {
        hintForOpponent.innerText = "I Select A Odd Number"
    }


    if (!ChallengingNumber) {
        ChallagerError.innerText='Please write something';
    } else if (isNaN(ChallengingNumber)) {
        ChallagerError.innerText='Please number something';        
        InputFROMPlayone.value = "";
    } else if (!(ChallengingNumber > 0 && ChallengingNumber <= 10)) {
        ChallagerError.innerText='Enter A number Between 0 to 10';
        InputFROMPlayone.value = "";
    } else {
        Opponent.style.visibility = 'visible';
        playwithFriend.style.visibility = "hidden";
    }
})

let OppLife = 3;

OpponentCheck.addEventListener('click', function () {
    const OpponentNumber = OpponentInput.value;

    if (!OpponentNumber) {
        OpponentError.innerText="Please write something";
    } else if (isNaN(OpponentNumber)) {
        OpponentError.innerText="Please number something";
        OpponentInput.value = "";
    } else if (!(OpponentNumber > 0 && OpponentNumber <= 10)) {
        OpponentError.innerText="Enter A number Between 0 to 10";
        OpponentInput.value = "";
    } else {
        
        if (OppLife > 0) {
            OppLife--;
            lifeofOpponent.innerText =`0${OppLife}`;
            
            if (OpponentInput.value === InputFROMPlayone.value) {
                win.style.visibility = "visible";
                Opponent.style.visibility = "hidden";
            }
        } else {
            lose.style.visibility = "visible";
            Opponent.style.visibility = "hidden";
        }
        
        OpponentInput.value = "";
        

    }
    

})




function PlayAgain() {
    playwithComputer.style.visibility = "hidden";
    playwithFriend.style.visibility = "hidden";
    win.style.visibility = "hidden";
    lose.style.visibility = "hidden";
    gameindex.style.visibility = "visible";

    life = 2
    OppLife = 3
    lifeCount.innerText = `0${life}`
    lifeofOpponent.innerText = `0${OppLife}`

    inputerror.innerText = "";
    ChallagerError.innerText = "";
    OpponentError.innerText = "";

    InputNumber.value = '';
    InputFROMPlayone.value = '';
    OpponentInput.value = '';
};