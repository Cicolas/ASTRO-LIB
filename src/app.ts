import Astro from "./lib/Game";
import Graphics from "./lib/Graphics";
import Keyboard from "./lib/Keyboard";
import { Vector2 } from "./lib/Mathf";

const a = new Astro.Game(800, 600);

a.load = () => {
};

a.update = (dt) => {
    const vel: Vector2 = new Vector2();

    if (Keyboard.isDown("w")) vel.y--;
    if (Keyboard.isDown("s")) vel.y++;
    if (Keyboard.isDown("a")) vel.x--;
    if (Keyboard.isDown("d")) vel.x++;
};

a.draw = () => {
    Graphics.clear();
    Graphics.backgroundColorString("gainsboro");

    Graphics.setColorString("black");
};
