const gameindex = document.querySelector('.gameindex');
const playwithComputer = document.querySelector('.PlayComputer');
const playwithFriend = document.querySelector('.PlayFriend');
const win = document.querySelector('.Win');
const lose = document.querySelector('.lose');
const hint = document.querySelector('.hint');
const InputNumber = document.querySelector('.inputNum');
const ComNumber = document.querySelector('.Comnumber');
const lifeCount = document.querySelector('.lifeCount');

const btnComputer = document.getElementById('Pcomputer');
const btnFriend = document.getElementById('Pfriend');
const btnSubmit = document.getElementById('Submit');
const btnAgain = document.querySelectorAll('.Again');


playwithComputer.style.visibility = "hidden";
playwithFriend.style.visibility = "hidden";
win.style.visibility = "hidden";
lose.style.visibility = "hidden";
gameindex.style.visibility = "visible";

let life = 2;

btnComputer.addEventListener('click', function () {
    playwithComputer.style.visibility = "visible";
    playwithFriend.style.visibility = "hidden";
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
            console.log("Please write something");
            InputNumber.value = '';
        } else if (isNaN(InputNumber.value)) {
            console.log("Please number something");
            InputNumber.value = '';
        } else if (!(InputNumber.value > 0 && InputNumber.value <= 10)) {
            console.log("Enter A number Between 0 to 10");
            InputNumber.value = '';
        } else {

            if (life > 1) {
                life--
                lifeCount.innerText = `0${life}`
                if (InputNumber.value === ComNumber.innerText) {
                    win.style.visibility = "visible";
                    playwithComputer.style.visibility = "hidden";
                } else {
                }
            } else { 
                lose.style.visibility = "visible";
                playwithComputer.style.visibility = "hidden";

            }
            InputNumber.value = '';


        }
    });


})

function PlayAgain() {
    playwithComputer.style.visibility = "hidden";
    playwithFriend.style.visibility = "hidden";
    win.style.visibility = "hidden";
    lose.style.visibility = "hidden";
    gameindex.style.visibility = "visible";

    life = 2
    lifeCount.innerText = `0${life}`
    InputNumber.value = '';
};



btnFriend.addEventListener('click', function () {
    playwithComputer.style.visibility = "hidden";
    playwithFriend.style.visibility = "visible";
    gameindex.style.visibility = "hidden";

})