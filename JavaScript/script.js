//* Display of numbers and signs
const display = document.querySelector('#display');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click',  () => {
        display.textContent += button.textContent;  //* += Because otherwise only one digit appears
    });
});


//* The buttons (Division, Multiplication, Subtraction, Addition, Equal, Delete)
const Division = document.querySelector('#Division')
const Multiplication = document.querySelector('#Multiplication')
const Soustraction = document.querySelector('#Soustraction')
const Addition = document.querySelector('#Addition')
const Egal = document.querySelector('#Egal')
const Delete = document.querySelector('#Delete')


//* When you click on Delete, the elements are deleted
Delete.addEventListener('click', () => {
    display.textContent = '';
})