class TaskItem extends HTMLElement{
    constructor() {
        super()
    }
    static get observedAttributes(){
        return["text", "status"]
    }
    attributeChangeCallback(attr, oldVal, newVal){
        if (oldVal !== newVal) {
            this[attr] = newVal
        }
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
            <li class="editMode">
                <input type="checkbox" ${this.status? "checked":'' }>
                <label>${this.text}</label>
                <input type="text" value="${this.text}">
                <button class="edit">Save</button>
                <button class="delete">Delete</button>
            </li>
        `;
        return template
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
    disconnectedCallback(){

    }
}

customElements.define("task-custom-element", TaskItem);

//document.querySelector("task-custom-element").remove();