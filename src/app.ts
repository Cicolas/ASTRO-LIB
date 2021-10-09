import './app.css';
import canvasElement from './components/index';

class App {
    render(): HTMLElement {
        const element = document.createElement('div');
        element.className = "content";

        element.appendChild(canvasElement);
        return element;
    }
}

document.body.appendChild(new App().render());
