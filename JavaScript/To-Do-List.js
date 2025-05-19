const Form = document.querySelector('#Form');
const Task = document.querySelector('#Task');
const list = document.querySelector('#Task-List');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(Task.value); //* affiche dans la console

    const li = document.createElement('li');
    li.textContent = Task.value;
    list.append(li); 
});
