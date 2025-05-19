const display = document.querySelector('#display');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

//* le btn Egal 

const Egal = document.querySelector('#Egal')
