const Form = document.querySelector('#Form');
const Task = document.querySelector('#Task');
const list = document.querySelector('#Task-List');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(Task.value); // Affiche la tâche tapée dans la console
});
