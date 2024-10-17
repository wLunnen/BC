function sum()

function updatePollResults(choice) {
  // Get the existing count for the chosen option
  const countElement = document.getElementById(`count-${choice}`);
  let currentCount = parseInt(countElement.textContent);

  // Increment the count
  currentCount++;

  // Update the count in the HTML
  countElement.textContent = currentCount;
}
