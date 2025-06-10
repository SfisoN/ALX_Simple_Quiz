// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    let correctAnswer = "4";

    // Retrieve the selected answer from radio buttons
    let userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Ensure an answer is selected
    if (userAnswer) {
        userAnswer = userAnswer.value;

        // Compare user's answer with correct answer
        let feedback = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Inform user to select an answer before submitting
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Adding an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);