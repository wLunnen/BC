function submitSurvey() {
    // Get survey form
    const form = document.getElementById('survey-form');
    
    // Collect form data
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.getElementById('q3').value;

    // Validate form submission
    if (!q1 || !q2) {
        alert("Please answer all the questions.");
        return;
    }

    // Hide survey and show thank you message
    form.style.display = 'none';
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';

    // Log the answers (for demonstration purposes)
    console.log("Survey Submitted:");
    console.log("Q1: " + q1.value);
    console.log("Q2: " + q2.value);
    console.log("Q3: " + q3);
}
