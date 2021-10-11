import { TaskItem } from "./TaskItem";
import { tasks } from "./Context";

const CompletedTasks = () => {

    let completedTasks = "";

    for (const item of tasks){
        item.status ?  
        completedTasks = completedTasks + TaskItem(item):
        completedTasks = completedTasks;
    }

    const view = `
        <section class="container">
            <h2 class="sectionTitle">
                <b>Completed</b>
            </h2>
            <ul class="completed-tasks">
                ${completedTasks}
            </ul>
        </section>
    `;

    return view;
};

export { CompletedTasks }