import Game from './lib/Game';
import { Keyboard } from './lib/Keyboard';
import {Primitives} from './lib/Primitives';

class GameTest extends Game {
    x: number = 0;
    y: number = 0;
    r: Primitives.Rectangle = new Primitives.Rectangle(200, 200, 100, 100);
    
    constructor(canvas: CanvasRenderingContext2D) {
        super(canvas);
    }
    
    public override load = () => {
        console.log("load");
    }

    public override update = () => {
        if (Keyboard.isDown("w")) {
            this.y -= 2;
        }
        if (Keyboard.isDown("s")) {
            this.y += 2;
        }
        if (Keyboard.isDown("a")) {
            this.x -= 2;
        }
        if (Keyboard.isDown("d")) {
            this.x += 2;
        }

        // this.r.x = this.x;
        // this.r.y = this.y;
    }
    
    public override draw = () => {
        this.canvas.clearRect(0, 0, 9999, 9999);

        this.canvas.fillStyle = "red";
        this.r.draw(this.canvas); 

        requestAnimationFrame(this.draw);
    }
}

export default GameTest;
