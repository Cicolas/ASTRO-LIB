import GameTest from './game';
import { Keyboard } from './lib/Keyboard';

const canvasElement: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;
canvasElement.width = 500;
canvasElement.height = 500;

const canvas: CanvasRenderingContext2D = canvasElement.getContext("2d");
canvas.imageSmoothingEnabled = false;

const  a = new GameTest(canvas);
console.log(a);

a.load();
setInterval(a.update, (1/60)*1000);
requestAnimationFrame(a.draw);

document.addEventListener("keydown", (k) => {
    if (!k.repeat) {
        if (a.onKeyDown)
            a.onKeyDown(k);

        Keyboard._addKey(k.key);
        
        console.log("down");
    }
    Keyboard.isDown(k.key);
});

document.addEventListener("keyup", (k) => {
    if (!k.repeat) {
        if (a.onKeyUp)
            a.onKeyUp(k);

        Keyboard._removeKey(k.key);
        console.log("up");
        
    }
});

export default canvasElement;