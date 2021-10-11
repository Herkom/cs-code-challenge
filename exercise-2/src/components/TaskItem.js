
const TaskItem = (props) => {

    const view = `
        <li id="${props.id}" class="">
            <input onclick="statusToggler(${props.id})" type="checkbox" ${props.status? "checked":'' }>
            <label>${props.text}</label>
            <input type="text" value="${props.text}">
            <button onclick="editTask(${props.id})" class="edit">Edit</button>
            <button onclick="deleteTask(${props.id})" class="delete">Delete</button>
        </li>
    `;

    return view.toString().replace(/\n   |\t/g, "").trim();
};

export { TaskItem }