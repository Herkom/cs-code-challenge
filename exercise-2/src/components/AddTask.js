const AddTask = () =>{

    const view = `
        <h1>TODO list</h1>
        <section class="container">
              <form class="addTask" onsubmit="onSubmit(event)">
                <label id="new-task-label" for="new-task" class="sectionTitle">Add new TODO</label>
                <div>
                  <input id="new-task" name="new-task" type="text" required minlength="5" maxlength="45">
                  <button type="submit" form="addTask" value="Add" >Add</button>
                </div>

              </form>
        </section>
    `;

    return view;
};

export { AddTask }