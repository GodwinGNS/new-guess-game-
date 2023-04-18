'use strict';



let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof guess);

        // nuber is empty
        if (!guess) {
            displayMessage('⛔ No Number')


            // number is the same
        } else if (guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor
                = '#60b347';
            document.querySelector('.number').style.width
                = '30rem'
            displayMessage('🎉🎉 Curret Guess');

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent
                    = highscore;
            }
        }

        //            wrong guess
        else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? `📈number is high` : `📉number is low`);

                score--;
                document.querySelector('.score').textContent
                    = score;
            } else {
                displayMessage(' 💥You loss the game ')
                document.querySelector('.score').textContent = 0;
            }


        }

    })

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222'

})


/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color(#222) and number width(15rem)
GOOD LUCK �
*/

