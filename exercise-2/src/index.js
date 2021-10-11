import { statusToggler, render, onSubmit, editTask, updateTask, deleteTask } from './components/Context';

import './styles/main.sass'

(async function App() {
  window.statusToggler = statusToggler;
  window.onSubmit = onSubmit;
  window.editTask = editTask;
  window.updateTask = updateTask;
  window.deleteTask = deleteTask;

  window.addEventListener('load', ()=>{
    render();
  })  
})();