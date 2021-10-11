import { TaskItem } from "./TaskItem";
import { tasks } from "./Context";

const IncompletedTasks = () => {

    let incompletedTasks = "";

    for (const item of tasks){
        !item.status ?  
        incompletedTasks = incompletedTasks + TaskItem(item):
        incompletedTasks = incompletedTasks;
    }

    const view = `
        <section class="container">
            <h2 class="sectionTitle">
                <b>Todo</b>
            </h2>
            <ul id="incomplete-tasks">
                ${incompletedTasks}
            </ul>
        </section>
    `;

    return view.toString().replace(/\n   |\t/g, "").trim();
};

export { IncompletedTasks }