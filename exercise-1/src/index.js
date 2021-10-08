import { Template } from "./templates/Template";

(async function App() {
    function displayMoreData(id){
        document.querySelector(`#${CSS.escape(id)}`).classList.toggle('beingClicked');
    }
    
    const main = null || document.querySelector('#main');
    main.insertAdjacentHTML('afterbegin', await Template());
})();
