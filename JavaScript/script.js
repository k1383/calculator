//* Display of numbers and signs

const display = document.querySelector('#display');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click',  () => {
        display.textContent += button.textContent;
    });
});

//* The Equal button

const Egal = document.querySelector('#Egal')
