// Open Modal
function openModal() {
    document.getElementById('cancelModal').style.display = 'flex'; // Ensure it uses flex to center
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