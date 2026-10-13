const form = document.querySelector('.feedback-form');
const input = document.getElementsByName('email');
input[0].placeholder = 'Type area';

const localData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
form.email.value = localData.email || '';
form.message.value = localData.message || '';

form.addEventListener('input', (event) => {
    const currentData = {
        email: form.email.value.trim(),
        message: form.message.value.trim()
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(currentData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (email !== '' && message !== '') {
        console.log({ email, message });
        localStorage.clear();
        form.reset();
    } else {
        alert("Please fill fields!");
    }
});