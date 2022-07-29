document.addEventListener("DOMContentLoaded", function(event) {
console.log('works')
//variable declarations 

// const Rating = document.querySelector('.val');

// const upvote = document.querySelector('.up');

// const downvote = document.querySelector('.down');

//logic: select the classname vote-tgl
// const Rating = document.querySelectorAll(".vote-tgl");

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
    console.log('s');
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

//if responselist is greater than 4, hide additional entries with an i >=3, also append total amount of responses to the ## responses

//1st Card
const Resp = document.querySelectorAll('.question .replies');
const target = 4;

for (let i=0; i < Resp.length; i++) {
    if (Resp[i].children.length <= target) {
        document.querySelector('#question-1 .response-btn').style.visibility = "hidden"; 
    } else {
        document.querySelector("#question-1 .response-amt").innerHTML = Resp[i].children.length - target;
    }
}

document.querySelector('#question-1 .total-responses').innerHTML = Resp[0].children.length;


// const Responses = document.querySelectorAll('#question-1 .reply');

// if (Resp[0].children.length <= target) {
//     document.querySelector('#question-1 .response-btn').hidden = true;
// } else {
//     document.querySelector("#question-1 .response-btn .response-amt").innerHTML = Resp[0].children.length - target;
// }

//Second Card
const Responses2 = document.querySelectorAll('#question-2 .reply');
const Resbutn2 = document.querySelector('#question-2 .response-btn');
document.querySelector('#question-2 .total-responses').innerHTML = Responses2.length;

if (Responses2.length <= target ) {
    Resbutn2.style.visibility = "hidden";
} else {
    document.querySelector("#question-2 .response-btn .response-amt").innerHTML = Responses2.length - target;
    for (let i=target; i< Responses2.length; i++) {
        Responses2[i].style.display = "none";       
    }
    Resbutn2.addEventListener('click', () => {
        for (let i=target; i< Responses2.length; i++) {
            Responses2[i].style.display = "block";;        
        }
        Resbutn2.style.visibility = "hidden";  
    })
}

// upvote.addEventListener('click', function() {

//     const score = Number(Rating.textContent);

//     if (upvote.classList.contains('active')) {
//         upvote.classList.remove('active');
//         Rating.textContent = score - 1;
//         console.log(Rating);
//     } else if (downvote.classList.contains('active')){
//         upvote.classList.add('active');
//         downvote.classList.add('active');
//         Rating.textContent = score + 2;

//     } else {
//         upvote.classList.add('active');
//         Rating.textContent = score + 1;
//         console.log(Rating);
//     }
// })

// downvote.addEventListener('click', function() {
//     const score = Number(Rating.textContent);

//     if (downvote.classList.contains('active')) {
//         downvote.classList.remove('active');
//         Rating.textContent = score + 1;
//     } else if (upvote.classList.contains('active')){
//         downvote.classList.add('active');
//         upvote.classList.remove('active');
//         Rating.textContent = score - 2;
//     } else {
//         downvote.classList.add('active');
//         Rating.textContent = score - 1;
//         console.log(Rating);
//     }
// })

});