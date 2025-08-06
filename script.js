// Number guessing game 

// first we need to set the min and max in our num guessing game

const minNum = 1
const maxNum = 100
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

let attempts = 0 // to keep tract of attempts it takes the user to guess 
let guess;
let running = true //so we can exit exit the game when its over (running = false)

// to keep the game running we will use a while loop

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if(isNaN(guess)){ //so the user cant enter anything other than number
        window.alert("Please enter a valid number")
    }
    else if (guess < minNum || guess > maxNum){ // so the user cant enter below of above the number range
        window.alert("Please enter a valid number")
    }
    else{
        attempts++
        if(guess < answer){
            window.alert(`TOO LOW! TRY AGAIN!`)
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!")
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`)
            running = false;
        }
    }

}
