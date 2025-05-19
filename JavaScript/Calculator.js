//* Display of numbers and signs
const display = document.querySelector('#display');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click',  () => {
        display.textContent += button.textContent;  //* += Because otherwise only one digit appears
    });
});


//* The buttons (Division, Multiplication, Subtraction, Addition, Equal, Delete)

//* Division
const Division = document.querySelector('#Division')


//* Multiplication
const Multiplication = document.querySelector('#Multiplication')

//* Subtraction
const Soustraction = document.querySelector('#Soustraction')

//* Addition
const Addition = document.querySelector('#Addition')


//* Equal
const Egal = document.querySelector('#Egal')


//* Deleted
const Delete = document.querySelector('#Delete')
Delete.addEventListener('click', () => {
    display.textContent = '';
})