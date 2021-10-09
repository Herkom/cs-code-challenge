import { Template } from "./templates/Template";
import { displayMoreData } from "./utils/displayMoreData";
import './styles/main.css';

(async function App() {
    window.displayMoreData = displayMoreData;

    const main = null || document.querySelector('#main');
    main.insertAdjacentHTML('afterbegin', await Template());
})();
