
function checkAnswer() {
    
    let correctAnswer = "4";

    
    let userAnswer = document.querySelector('input[name="quiz"]:checked');

    
    if (userAnswer) {
        userAnswer = userAnswer.value;

        
        let feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Adding an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);