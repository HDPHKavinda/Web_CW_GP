// Feedback Page — live char counter, validation, confirmation

const messageEl = document.getElementById('message');
const charCountEl = document.getElementById('charCount');
const MAX_CHARS = 300;

messageEl.addEventListener('input', function () {
    const remaining = MAX_CHARS - messageEl.value.length;
    charCountEl.textContent = remaining;
});

const form = document.getElementById('feedbackForm');
const fullNameEl = document.getElementById('fullName');
const emailEl = document.getElementById('email');
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const confirmationEl = document.getElementById('formConfirmation');

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    confirmationEl.textContent = '';

    let hasError = false;

    if (fullNameEl.value.trim() === '') {
        fullNameError.textContent = 'Please enter your name.';
        hasError = true;
    } else {
        fullNameError.textContent = '';
    }

    if (!isValidEmail(emailEl.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        hasError = true;
    } else {
        emailError.textContent = '';
    }

    if (messageEl.value.trim() === '') {
        messageError.textContent = 'Please add a short comment before submitting.';
        hasError = true;
    } else {
        messageError.textContent = '';
    }

    if (hasError) {
        return;
    }

    // No server
    confirmationEl.textContent = 'Thank you for your feedback! We’ve received it.';
    form.reset();
    charCountEl.textContent = MAX_CHARS;
});
