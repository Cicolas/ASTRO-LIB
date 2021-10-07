import GameTest from './game';
import { Keyboard } from './lib/Keyboard';
import { Vector2 } from './lib/Mathf';
import { Mouse } from './lib/Mouse';

const canvasElement: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;
canvasElement.width = 500;
canvasElement.height = 500;
const canvas: CanvasRenderingContext2D = canvasElement.getContext("2d");
canvas.imageSmoothingEnabled = false;

const  a = new GameTest(canvas);
console.log(a);
a.load();
// setInterval(a.update, (1/75)*1000);
// setInterval(a.draw, (1/75)*1000);
function UpdateNRender() {
    requestAnimationFrame((t) => {
        UpdateNRender();
        a.update();
        a.draw();
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