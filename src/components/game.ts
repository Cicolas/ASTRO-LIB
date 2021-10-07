import { transform } from 'typescript';
import Game from './lib/Game';
import { Keyboard } from './lib/Keyboard';
import { Random, Vector2, Vector3 } from './lib/Mathf';
import {Primitives} from './lib/Primitives';

class GameTest extends Game {
    r: Primitives.Rectangle = new Primitives.Rectangle(new Vector2(250, 250), 24, 24);
    
    private _timeElapsed: number = new Date().getTime();
    deltaTime: number = 0;
    fps: number = 0;

    constructor(canvas: CanvasRenderingContext2D) {
        super(canvas);
    }
    
    public override load = async () => {
    }

    public override update = () => {
        this.deltaTime = (new Date().getTime() - this._timeElapsed)/1000;
        this.fps = 1/(this.deltaTime*60)*60;        
        this._timeElapsed = new Date().getTime();
        
        let vel: Vector2 = new Vector2();
        
        if (Keyboard.isDown("w")) {
            vel.y--;
        }
        if (Keyboard.isDown("s")) {
            vel.y++;
        }
        if (Keyboard.isDown("a")) {
            vel.x--;
        }
        if (Keyboard.isDown("d")) {
            vel.x++;
        }

        if (vel.x != 0 || vel.y != 0) {
            this.r.transform.position.x += vel.normalize().x*100*this.deltaTime;
            this.r.transform.position.y += vel.normalize().y*100*this.deltaTime;
        }        
    }
    
    public override draw = () => {
        this.canvas.clearRect(0, 0, 9999, 9999);

        this.canvas.fillStyle = "red";
        this.r.draw(this.canvas); 

        this.canvas.fillStyle = "#00f";
        Primitives.Circle.draw(this.canvas, new Vector2(50, 50), 25);

        // requestAnimationFrame(this.draw);
    }
}

export default GameTest;
