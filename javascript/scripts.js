document.addEventListener("DOMContentLoaded", function(event) {
console.log('works')
//variable declarations 
const UpSelector = document.querySelectorAll(".up");
const DownSelector = document.querySelectorAll(".down");
const RatingSelector = document.querySelectorAll('.val');


//Vote function
const vote = (type, i) => {
const buttons = { '1': UpSelector[i], '-1': DownSelector[i]}
const score = Number(RatingSelector[i].textContent);

if (buttons[type].classList.contains('active')) {
    RatingSelector[i].textContent = score - type;
    buttons[type].classList.remove('active');
}
else if (buttons[-type].classList.contains('active')) {
    RatingSelector[i].textContent = score + 2 * type;
    buttons[-type].classList.remove('active');
    buttons[type].classList.add('active');
} else {
    RatingSelector[i].textContent = score + type;
    buttons[type].classList.add('active');
}
}

//Iterate through each up/downvote selector and callback vote function
// const RatingList = document.querySelectorAll(".val");

for (let i=0; i < UpSelector.length; i++) {
    UpSelector[i].addEventListener('click', () => {
    vote(1,i);
    })       
}

for (let i=0; i < DownSelector.length; i++) {
    DownSelector[i].addEventListener('click', () => {
    vote(-1,i);
    })
}

//logic below if # of responses is greater than 4, show first 4 and hide the remaining until user clicks on button.

//1st Card
const Resp = document.querySelectorAll('.question .replies');
const Resbutn = document.querySelector('#question-1 .response-btn');
const Resbutn2 = document.querySelector('#question-2 .response-btn');
const target = 4;

    if (Resp[0].children.length <= target) {
        document.querySelector('#question-1 .response-btn').style.visibility = "hidden"; //hides view responses btn
    } else {
        document.querySelector("#question-1 .response-amt").innerHTML = Resp[0].children.length - target; //displays view responses btn
        for (let i=target; i< Resp[0].children.length; i++) {
            Resp[0].children[i].style.display = "none";       
        }
        Resbutn.addEventListener('click', () => { //on click display all responses
            for (let i=target; i< Resp[0].children.length; i++) {
                Resp[0].children[i].style.display = "block";        
            }
            Resbutn2.style.visibility = "hidden"; 
        })
    }

//Second Card

    if (Resp[1].children.length <= target ) {
        Resbutn2.style.visibility = "hidden"; //hides view responses btn
    } else {
        document.querySelector("#question-2 .response-btn .response-amt").innerHTML = Resp[1].children.length - target; //displays view responses btn
        for (let i=target; i< Resp[1].children.length; i++) {
            Resp[1].children[i].style.display = "none";       
        }
        Resbutn2.addEventListener('click', () => { //on click display all responses
            for (let i=target; i< Resp[1].children.length; i++) {
                Resp[1].children[i].style.display = "block";        
            }
            Resbutn2.style.visibility = "hidden";  
        })
    }

//renders amt of responses on DOM
document.querySelector('#question-1 .total-responses').innerHTML = Resp[0].children.length;
document.querySelector('#question-2 .total-responses').innerHTML = Resp[1].children.length;


});