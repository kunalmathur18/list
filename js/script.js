// const inputBox = document.getElementById('inputBox');
// const addlist = document.getElementById('addlist');
// const dolist = document.getElementById('dolist');
// let edititem=null;
// const updateAddButton=()=>{
//     if(edititem){
//         addlist.innerHTML='<i class="fa-solid fa-pen"></i>';
//     }
//     else{
//         addlist.innerHTML ='<i class="fa-solid fa-plus" > </i>';
//     }

// }


// const addtolist  = ()=>{
//    const inputText = inputBox.value.trim();
//    if(inputText.length<=0){
//     alert('You must write some thing');
//     return false;
//    }
//    if(edititem){
//     edititem.querySelector('p').textContent=inputText;
//     edititem=null;
//    }
//    else{
//    const li = document.createElement("li");
//    const p = document.createElement("p");
//    p.innerHTML = inputText;
//    li.appendChild(p);

//    const deletebtn = document.createElement("span");
//    deletebtn.innerHTML = '<i class="fa-solid fa-trash" ></i>';
   
//    deletebtn.classList.add("btn","del");
//    li.appendChild(deletebtn);

//    const editbtn = document.createElement("span");
//    editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
//    editbtn.classList.add("btn","ed");
//    li.appendChild(editbtn);

//    dolist.appendChild(li);
//    }
//    inputBox.value= "";
//    inputBox.focus();
//    updateAddButton();
// }
// const updateTodo = (e)=>{
//     // console.log(e.target.innerHTML);
//     // console.log(e.target.parentElement);
//     // if(e.target.innerHTML==='<i class="fa-solid fa-trash" ></i>'){
//     //     console.log(e.target.parentElement);
//     //     dolist.removeChild(e.target.parentElement);
//     // }
//     if (e.target.closest('.del')) {
//         const li = e.target.closest('li');
//         dolist.removeChild(li);
//         if(edititem ===li){
//             edititem=null;
//             updateAddButton();

//         }
//     }
//     if(e.target.closest('.ed')){
//         // i
//         editingItem = e.target.closest('li'); // Set the item being edited
//         inputBox.value = editingItem.querySelector('p').textContent;
//         inputBox.focus();
//         // addlist.value='.ed';
//         updateAddButton();
//     }



// }
// // const remove = (e)=>{
// //     // dolist.removeChild(e.target.parentElement);
// //     console.log(e.target.parentElement);
// // }


// addlist.addEventListener('click',addtolist);
// dolist.addEventListener('click',updateTodo);


// const inputBox = document.getElementById('inputBox');
// const addlist = document.getElementById('addlist');
// const dolist = document.getElementById('dolist');
// let editingItem = null; // Variable to keep track of the item being edited

// const updateAddButton = () => {
//     if (editingItem) {
//         addlist.innerHTML = '<i class="fa-solid fa-check"></i> '; // Change to "Update" icon or text
//     } else {
//         addlist.innerHTML = '<i class="fa-solid fa-plus"></i> '; // Default "Add" icon or text
//     }
// };

// const addtolist = () => {
//     const inputText = inputBox.value.trim();

//     if (inputText.length <= 0) {
//         alert('You must write something');
//         return;
//     }

//     if (editingItem) {
//         // Update the text of the existing item
//         editingItem.querySelector('p').textContent = inputText;
//         editingItem = null; // Clear editingItem after updating
//     } else {
//         // Create a new list item
//         const li = document.createElement("li");
//         const p = document.createElement("p");
//         p.textContent = inputText; // Use textContent for text
//         li.appendChild(p);

//         const deletebtn = document.createElement("span");
//         deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
//         deletebtn.classList.add("btn", "del");
//         li.appendChild(deletebtn);

//         const editbtn = document.createElement("span");
//         editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
//         editbtn.classList.add("btn", "ed");
//         li.appendChild(editbtn);

//         dolist.appendChild(li);
//     }

//     inputBox.value = ""; // Clear the input box
//     inputBox.focus(); // Focus the input box for the next entry
//     updateAddButton(); // Update the button icon or text
// };

// const updateTodo = (e) => {
//     if (e.target.closest('.del')) {
//         const li = e.target.closest('li');
//         dolist.removeChild(li);
//         if (editingItem === li) {
//             editingItem = null; // Clear editingItem if the edited item is deleted
//             updateAddButton(); // Reset the button to "Add"
//         }
//     }

//     if (e.target.closest('.ed')) {
//         editingItem = e.target.closest('li'); // Set the item being edited
//         inputBox.value = editingItem.querySelector('p').textContent; // Populate input box with item text
//         inputBox.focus(); // Focus the input box for editing
//         updateAddButton(); // Change button to "Update"
//     }
// };

// // Initialize button with default "Add" state
// updateAddButton();

// addlist.addEventListener('click', addtolist);
// dolist.addEventListener('click', updateTodo);
// const inputBox = document.getElementById('inputBox');
// const addlist = document.getElementById('addlist');
// const dolist = document.getElementById('dolist');
// let editingItem = null;

// const updateAddButton = () => {
//     if (editingItem) {
//         addlist.innerHTML = '<i class="fa-solid fa-pen"></i> ';
//     } else {
//         addlist.innerHTML = '<i class="fa-solid fa-plus"></i> ';
//     }
// };

// const addtolist = () => {
//     const inputText = inputBox.value.trim();

//     if (inputText.length <= 0) {
//         alert('You must write something');
//         return;
//     }

//     if (editingItem) {
//         editingItem.querySelector('p').textContent = inputText;
//         editingItem = null;
//     } else {
//         const li = document.createElement("li");
//         const p = document.createElement("p");
//         p.textContent = inputText;
//         li.appendChild(p);

//         const deletebtn = document.createElement("span");
//         deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
//         deletebtn.classList.add("btn", "del");
//         li.appendChild(deletebtn);

//         const editbtn = document.createElement("span");
//         editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
//         editbtn.classList.add("btn", "ed");
//         li.appendChild(editbtn);

//         dolist.appendChild(li);
//     }

//     inputBox.value = "";
//     inputBox.focus();
//     updateAddButton();
// };

// const updateTodo = (e) => {
//     if (e.target.closest('.del')) {
//         const li = e.target.closest('li');
//         dolist.removeChild(li);
//         if (editingItem === li) {
//             editingItem = null;
//             updateAddButton();
//         }
//     }

//     if (e.target.closest('.ed')) {
//         editingItem = e.target.closest('li');
//         inputBox.value = editingItem.querySelector('p').textContent;
//         inputBox.focus();
//         updateAddButton();
//     }
// };

// updateAddButton();

// addlist.addEventListener('click', addtolist);
// dolist.addEventListener('click', updateTodo);


// const inputBox = document.getElementById('inputBox');
// const addlist = document.getElementById('addlist');
// const dolist = document.getElementById('dolist');
// let editingItem = null;

// const updateAddButton = () => {
//     if (editingItem) {
//         addlist.innerHTML = '<i class="fa-solid fa-check"></i> ';
//     } else {
//         addlist.innerHTML = '<i class="fa-solid fa-plus"></i> ';
//     }
// };

// const addtolist = () => {
//     const inputText = inputBox.value.trim();

//     if (inputText.length <= 0) {
//         alert('You must write something');
//         return;
//     }

//     if (editingItem) {
//         editingItem.querySelector('p').textContent = inputText;
//         editingItem = null;
//     } else {
//         const li = document.createElement("li");
//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.classList.add("checkbox");
//         li.appendChild(checkbox);

//         const p = document.createElement("p");
//         p.textContent = inputText;
//         li.appendChild(p);

//         const deletebtn = document.createElement("span");
//         deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
//         deletebtn.classList.add("btn", "del");
//         li.appendChild(deletebtn);

//         const editbtn = document.createElement("span");
//         editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
//         editbtn.classList.add("btn", "ed");
//         li.appendChild(editbtn);

//         dolist.appendChild(li);
//     }

//     inputBox.value = "";
//     inputBox.focus();
//     updateAddButton();
// };

// const updateTodo = (e) => {
//     if (e.target.classList.contains('checkbox')) {
//         // Toggle the 'checked' class based on the checkbox state
//         e.target.parentElement.classList.toggle('completed', e.target.checked);
//     }

//     if (e.target.closest('.del')) {
//         const li = e.target.closest('li');
//         dolist.removeChild(li);
//         if (editingItem === li) {
//             editingItem = null;
//             updateAddButton();
//         }
//     }

//     if (e.target.closest('.ed')) {
//         editingItem = e.target.closest('li');
//         inputBox.value = editingItem.querySelector('p').textContent;
//         inputBox.focus();
//         updateAddButton();
//     }
// };

// updateAddButton();

// addlist.addEventListener('click', addtolist);
// dolist.addEventListener('click', updateTodo);






// const inputBox = document.getElementById('inputBox');
// const addlist = document.getElementById('addlist');
// const dolist = document.getElementById('dolist');
// const totalCounter = document.getElementById('totalCounter');
// const completedCounter = document.getElementById('completedCounter');
// let editingItem = null;

// const savetask = (todo) =>{
//     let todos =[];
//     if(localStorage.getItem("todos")===null){
//         todos=[];
//     }
//     else{
//         todos =JSON.parse(localStorage.getItem("todos"));

//     }
   
//     todos.push(todo);
//     localStorage.setItem("todos",JSON.stringify(todos));
// }
// const getlocalTodos =(todo) =>{
//     let todos =[];
//     if(localStorage.getItem("todos")===null){
//         todos=[];
//     }
//     else{
//         todos =JSON.parse(localStorage.getItem("todos"));
//         todos.forEach(todo => {
//             const li = document.createElement("li");
//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.classList.add("checkbox");
//         li.appendChild(checkbox);

//         const p = document.createElement("p");
//         p.textContent = todo;
//         li.appendChild(p);

//         const deletebtn = document.createElement("span");
//         deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
//         deletebtn.classList.add("btn", "del");
//         li.appendChild(deletebtn);

//         const editbtn = document.createElement("span");
//         editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
//         editbtn.classList.add("btn", "ed");
//         li.appendChild(editbtn);

//         dolist.appendChild(li);
            
//         });

//     }

// }
// const deletelocaltodos =(todo)=>{
//     let todos =[];
//     if(localStorage.getItem("todos")===null){
//         todos=[];
//     }
//     else{
//         todos =JSON.parse(localStorage.getItem("todos"));

//     }
//     let todoText = todo.children[0].innerHTML;
//     let todoindex = todos.indexOf(todoText);
//     // console.log(todoindex);
//     todos.splice(todoindex,1);
//     localStorage.setItem("todos",JSON.stringify(todos));
//     // console.log(todoText);

// }
// const updateAddButton = () => {
//     if (editingItem) {
//         addlist.innerHTML = '<i class="fa-solid fa-check"></i> ';
//     } else {
//         addlist.innerHTML = '<i class="fa-solid fa-plus"></i> ';
//     }
// };

// const updateCounters = () => {
//     const totalTasks = dolist.children.length;
//     const completedTasks = dolist.querySelectorAll('.checkbox:checked').length;
//     totalCounter.textContent = `Total Tasks: ${totalTasks}`;
//     completedCounter.textContent = `Completed Tasks: ${completedTasks}`;
// };

// const addtolist = () => {
//     const inputText = inputBox.value.trim();

//     if (inputText.length <= 0) {
//         alert('You must write something');
//         return;
//     }

//     if (editingItem) {
//         editingItem.querySelector('p').textContent = inputText;
//         editingItem = null;
//     } else {
//         const li = document.createElement("li");
//         const checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.classList.add("checkbox");
//         li.appendChild(checkbox);

//         const p = document.createElement("p");
//         p.textContent = inputText;
//         li.appendChild(p);

//         const deletebtn = document.createElement("span");
//         deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
//         deletebtn.classList.add("btn", "del");
//         li.appendChild(deletebtn);

//         const editbtn = document.createElement("span");
//         editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
//         editbtn.classList.add("btn", "ed");
//         li.appendChild(editbtn);

//         dolist.appendChild(li);

//     }

//     inputBox.value = "";
//     inputBox.focus();
//     updateAddButton();
//     updateCounters();
//     savetask(inputText);
// };

// const updateTodo = (e) => {
//     if (e.target.classList.contains('checkbox')) {
//         const li = e.target.parentElement;
//         if (e.target.checked) {
//             li.classList.add('completed');
//         } else {
//             li.classList.remove('completed');
//         }
//         updateCounters();
//         savetask(inputText)
//     }

//     if (e.target.closest('.del')) {
//         const li = e.target.closest('li');
//         dolist.removeChild(li);
//         deletelocaltodos(li);
//         if (editingItem === li) {
//             editingItem = null;
//             updateAddButton();
//         }
//         updateCounters();
//         // savetask(inputText);
//     }

//     if (e.target.closest('.ed')) {
//         editingItem = e.target.closest('li');
//         inputBox.value = editingItem.querySelector('p').textContent;
//         inputBox.focus();
//         updateAddButton();
//     }
// };

// updateAddButton();
// updateCounters();

// document.addEventListener('DOMContentLoaded',getlocalTodos);
// addlist.addEventListener('click', addtolist);
// dolist.addEventListener('click', updateTodo);






const inputBox = document.getElementById('inputBox');
const addlist = document.getElementById('addlist');
const dolist = document.getElementById('dolist');
const totalCounter = document.getElementById('totalCounter');
const completedCounter = document.getElementById('completedCounter');
let editingItem = null;

const saveTasks = () => {
    const tasks = Array.from(dolist.children).map(li => {
        return {
            text: li.querySelector('p').textContent,
            completed: li.querySelector('.checkbox').checked
        };
    });
    localStorage.setItem('todos', JSON.stringify(tasks));
};

const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('todos')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkbox.checked = task.completed;
        li.appendChild(checkbox);

        const p = document.createElement('p');
        p.textContent = task.text;
        li.appendChild(p);

        const deletebtn = document.createElement('span');
        deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deletebtn.classList.add('btn', 'del');
        li.appendChild(deletebtn);

        const editbtn = document.createElement('span');
        editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
        editbtn.classList.add('btn', 'ed');
        li.appendChild(editbtn);

        if (task.completed) {
            li.classList.add('completed');
        }

        dolist.appendChild(li);
    });
    updateCounters();
};

const updateCounters = () => {
    const totalTasks = dolist.children.length;
    const completedTasks = dolist.querySelectorAll('.checkbox:checked').length;
    totalCounter.textContent = `Total Tasks: ${totalTasks}`;
    completedCounter.textContent = `Completed Tasks: ${completedTasks}`;
};

const addtolist = () => {
    const inputText = inputBox.value.trim();

    if (inputText.length <= 0) {
        alert('You must write something');
        return;
    }

    if (editingItem) {
        editingItem.querySelector('p').textContent = inputText;
        editingItem = null;
    } else {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        li.appendChild(checkbox);

        const p = document.createElement('p');
        p.textContent = inputText;
        li.appendChild(p);

        const deletebtn = document.createElement('span');
        deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deletebtn.classList.add('btn', 'del');
        li.appendChild(deletebtn);

        const editbtn = document.createElement('span');
        editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
        editbtn.classList.add('btn', 'ed');
        li.appendChild(editbtn);

        dolist.appendChild(li);
    }

    inputBox.value = '';
    inputBox.focus();
    updateAddButton();
    updateCounters();
    saveTasks();
};

const updateTodo = (e) => {
    if (e.target.classList.contains('checkbox')) {
        const li = e.target.parentElement;
        if (e.target.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
        updateCounters();
        saveTasks();
    }

    if (e.target.closest('.del')) {
        const li = e.target.closest('li');
        dolist.removeChild(li);
        if (editingItem === li) {
            editingItem = null;
            updateAddButton();
        }
        updateCounters();
        saveTasks();
    }

    if (e.target.closest('.ed')) {
        editingItem = e.target.closest('li');
        inputBox.value = editingItem.querySelector('p').textContent;
        inputBox.focus();
        updateAddButton();
    }
};

const updateAddButton = () => {
    if (editingItem) {
        addlist.innerHTML = '<i class="fa-solid fa-pen"></i> ';
    } else {
        addlist.innerHTML = '<i class="fa-solid fa-plus"></i> ';
    }
};

document.addEventListener('DOMContentLoaded', loadTasks);
addlist.addEventListener('click', addtolist);
dolist.addEventListener('click', updateTodo);
