import Astro from "./lib/Game";
import Graphics from "./lib/Graphics";
import Keyboard from "./lib/Keyboard";
import Primitives, { FillMode } from "./lib/Primitives";
import FileLoader from "./lib/FileLoader";
import { Vector2 } from "./lib/Mathf";

import tile from "./img/tile.jpg";

const a = new Astro.Game(800, 600);

a.load = () => {

    return;
};

a.update = (dt) => {
    // console.clear();
    if (a.fps < 30) {
        // console.log(a.fps, "FPS");
    }
    const vel: Vector2 = new Vector2();

    if (Keyboard.isDown("w")) vel.y--;
    if (Keyboard.isDown("s")) vel.y++;
    if (Keyboard.isDown("a")) vel.x--;
    if (Keyboard.isDown("d")) vel.x++;

    return;
};

a.draw = () => {
    Graphics.clear();
    Graphics.backgroundColorString("gainsboro");

    Graphics.setColorString("black");
};
