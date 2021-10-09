import GameTest from './game';
import Graphics from './lib/Graphics';
import Keyboard from './lib/Keyboard';
import Mouse from './lib/Mouse';
import { Vector2 } from './lib/Mathf';

const canvasElement: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;
const c: CanvasRenderingContext2D = canvasElement.getContext("2d");
c.imageSmoothingEnabled = false;
console.log(c);

let dt: number = 0;
let _timeElapsed = 0;
const  a = new GameTest();
console.log(a);
a.load();

Graphics.canvas = c;

function UpdateNRender() {
    requestAnimationFrame((t) => {
        dt = (t-_timeElapsed)/1000;
        _timeElapsed = t;
        
        a.update(dt);
        a.draw();

        UpdateNRender();
    });
}
UpdateNRender();

document.addEventListener("keydown", (k) => {
    if (!k.repeat) {
        if (a.onKeyDown)
            a.onKeyDown(k);

        Keyboard._addKey(k.key);
        
        // console.log("down");
    }
    Keyboard.isDown(k.key);
});
document.addEventListener("keyup", (k) => {
    if (!k.repeat) {
        if (a.onKeyUp)
            a.onKeyUp(k);

        Keyboard._removeKey(k.key);
        // console.log("up");
        
    }
});

canvasElement.addEventListener("mousedown", (b) => {
    if (a.onMouseDown)
        a.onMouseDown(b);
    Mouse._addButton(b.button);
    b.preventDefault();
});
canvasElement.addEventListener("mouseup", (b) => {
    if (a.onMouseUp)
        a.onMouseUp(b);
    Mouse._removeButton(b.button);
});
canvasElement.addEventListener("mousemove", (m) => {
    Mouse.position = new Vector2(m.offsetX, m.offsetY);
});

export default canvasElement;