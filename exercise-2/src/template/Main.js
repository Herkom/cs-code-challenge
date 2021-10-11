import {AddTask} from '../components/AddTask.js';
import {CompletedTasks} from '../components/CompletedTasks.js';
import {IncompletedTasks} from '../components/IncompletedTasks.js';

const Main = () => {
    const view = `${AddTask()} ${IncompletedTasks()} ${CompletedTasks()}`;
    return view;
}

export { Main }