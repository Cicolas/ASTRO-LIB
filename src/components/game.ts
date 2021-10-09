import Color from './lib/Color';
import Game from './lib/Game';
import Graphics from './lib/Graphics';
import Keyboard from './lib/Keyboard';
import { Vector2 } from './lib/Mathf';
import { Primitives } from './lib/Primitives';

class GameTest extends Game {
    r: Primitives.Rectangle = new Primitives.Rectangle(new Vector2(250, 250), 100, 100);
    l: Primitives.Line = new Primitives.Line(new Vector2(250, 250), new Vector2(350, 350));

    constructor() {
        super();
    }
    
    public override load = () => {
    }

    public override update = (dt: number) => {
        let vel: Vector2 = new Vector2();
        
        if (Keyboard.isDown("w"))
            vel.y--;
        if (Keyboard.isDown("s"))
            vel.y++;
        if (Keyboard.isDown("a"))
            vel.x--;
        if (Keyboard.isDown("d"))
            vel.x++;

        if (vel.x != 0 || vel.y != 0) {
            this.r.transform.position.x += vel.normalize().x*200*dt;
            this.r.transform.position.y += vel.normalize().y*200*dt;
        }        
    }
    
    public override draw = () => {
        Graphics.clear();

        Graphics.setColorString("red");
        this.r.draw(); 

        Graphics.setColor(new Color(0, 0, 0));
        Primitives.Circle.draw(new Vector2(50, 50), 25);
    
        Graphics.setColorString("black");
        Graphics.canvas.lineWidth = 2;
        Primitives.Line.draw(new Vector2(50, 50), new Vector2(this.r.transform.position.x, this.r.transform.position.y));
    }
}

export default GameTest;
