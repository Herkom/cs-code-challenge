import { renderUsers } from "../utils/usersRenderer"

const Template = async() =>{
    const users =  await renderUsers();

    const view = `
        <h1>Users List</h1>
        <section>
            <ul id="list" class="usersList">
                ${users}
            </ul>            
        </section>
    `;
    return view;
};

export {Template}
