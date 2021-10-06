import Game from './lib/Game';
import { Keyboard } from './lib/Keyboard';
import { Random, Vector2, Vector3, Vector4 } from './lib/Mathf';
import {Primitives} from './lib/Primitives';

class GameTest extends Game {
    // r: Primitives.Rectangle = new Primitives.Rectangle(200, 200, 100, 100);

    constructor(canvas: CanvasRenderingContext2D) {
        super(canvas);
    }
    
    public override load = async () => {
        const a = new Random.WeightedRandom(
            {obj: 1, weight: 1}, 
            {obj: 2, weight: 2},
            {obj: 3, weight: 3},
        );

        for (let i = 0; i < 10; i++) {
            // a.GetRandom();
            // console.log(a.GetRandom()); 
        }
    }

    public override update = () => {
        // if (Keyboard.isDown("w")) {
        //     this.y -= 2;
        // }
        // if (Keyboard.isDown("s")) {
        //     this.y += 2;
        // }
        // if (Keyboard.isDown("a")) {
        //     this.x -= 2;
        // }
        // if (Keyboard.isDown("d")) {
        //     this.x += 2;
        // }

        // this.r.x = this.x;
        // this.r.y = this.y;
    }
    
    public override draw = () => {
        // this.canvas.clearRect(0, 0, 9999, 9999);

        // this.canvas.fillStyle = "red";
        // this.r.draw(this.canvas); 

        requestAnimationFrame(this.draw);
    }
}

export default GameTest;
