import { useLocalStorage } from "./UseLocalStorage";
import { Main } from "../template/Main";

class Task {
    constructor(text) {
      this.text = text;
      this.status = false;
    }
}

let tasks = [];

const {
    saveItem: saveItem,
    getTasks: getTasks
} = useLocalStorage('TODOS_V1', []);

const render = () => {
    tasks = getTasks();
    const main = null || document.querySelector('#main');
    main.innerHTML = Main();
};

const getLastIdTask = () => {
    let sortable = [];
    for(let item of tasks){
        sortable.push(item.id);
    };
    sortable.sort((a,b)=>{
        return a - b;
    });
    const lastId = sortable.pop();

    return lastId
}

const registerTask = (element) =>{
    const TasksArray = [...tasks]

    const newTask = new Task(element.value);
    const lastId = getLastIdTask();
    newTask.id =  lastId == undefined ?  0 : lastId + 1 ;

    TasksArray.push(newTask);

    saveItem(TasksArray);
}

const deleteTask = (id) => {
    console.log(id);
    const TasksArray = [...tasks];

    const tasksWithoutTheDeletedOne = TasksArray.filter( obj => obj.id !== id );

    saveItem(tasksWithoutTheDeletedOne);

    render();
}

const statusToggler = (id) => {
    const TasksArray = [...tasks];

    const task = TasksArray.filter( obj => obj.id === id);
    const index = TasksArray.findIndex( obj => obj.id === id )
    TasksArray[index].status = !task[0].status;

    saveItem(TasksArray);

    render();                                                       
}

const onSubmit = (event) => {
    event.preventDefault();
    
    const element = event.target[0];
    registerTask(element);

    render();
}

const updateTask = (id) => {
    const TasksArray = [...tasks]
    const inputValue = document.querySelector(`li#${CSS.escape(id)} input[type='text']`);

    const taskId = TasksArray.findIndex( element => element.id === id );
    TasksArray[taskId].text = inputValue.value;

    saveItem(TasksArray);

    render();
}

const editTask = (id) => {
    const li = document.querySelector(`li#${CSS.escape(id)}`);
    const button = document.querySelector(`li#${CSS.escape(id)} button.edit`);
    li.classList.add('editMode');
    button.innerHTML = "Save";
    button.attributes.onclick.value = `updateTask(${id})`;
}

export { tasks, statusToggler, render, onSubmit, editTask, updateTask, deleteTask }