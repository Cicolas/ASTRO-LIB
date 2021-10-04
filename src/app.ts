import './app.css';
import canvasElement from './components/index';

class App {
    render(): HTMLElement {
        const element = document.createElement('div');
        element.className = "content";

        const s = document.createElement("h1")
        s.className = "centralize";
        s.innerHTML = "GameTest";


        element.appendChild(s);
        element.appendChild(canvasElement);
        return element;
    }
}

document.body.appendChild(new App().render());
