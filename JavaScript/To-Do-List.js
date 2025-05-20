const Form = document.querySelector('#Form');
const Task = document.querySelector('#Task');
const list = document.querySelector('#Task-List');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(Task.value); //* affiche dans la console

    //* Creation of the li element
    const li = document.createElement('li');
    li.textContent = Task.value;
    list.append(li); 
    
    //* Creation of the Delete icon
    list.insertAdjacentHTML('beforeend' ,`<i id="Delete" class="fa-solid fa-trash"></i>`)

    //* Function to delete list items
    function Delete(li) { 
        
        

        Delete.addEventListener('click', (e) => {
            e.preventDefault()
            li.remove()
        })
    }
});



// list.addEventListener('click', (e) => {
//     e.preventDefault()
//     list.remove()
// })