// Open Modal
function openModal() { // Fix function name to match what is used in the HTML
    document.getElementById('cancelModal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('cancelModal').style.display = 'none';
}

// Handle Submission
function submitCancel() {
    alert("Your cancellation request has been submitted.");
    closeModal();
}
