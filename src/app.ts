import Astro from './lib/Game';
import Graphics from './lib/Graphics';
import Keyboard from './lib/Keyboard';
import Primitives from './lib/Primitives';
import FileLoader from './lib/FileLoader';
import { Vector2 } from './lib/Mathf';

import perfil from './img/Perfil.png';

const a = new Astro.Game(800, 600);

const r: Primitives.Rectangle =  new Primitives.Rectangle(new Vector2(250, 250), 100, 100);
let i = new FileLoader.ImageLoader(perfil);
let ip: Vector2 = new Vector2();

a.load = () => {
    return;
};

a.update = (dt) => {
    const vel: Vector2 = new Vector2();
        
    if (Keyboard.isDown("w"))
        vel.y--;
    if (Keyboard.isDown("s"))
        vel.y++;
    if (Keyboard.isDown("a"))
        vel.x--;
    if (Keyboard.isDown("d"))
        vel.x++;

    ip = ip.add((vel.normalize().multiply(200*dt)));
};

a.draw = () => {
    Graphics.clear();
    Graphics.backgroundColorString("gainsboro");

    Graphics.drawImage(i.getImageElement(), ip, 0, new Vector2(), .5);
    // Graphics.canvas.drawImage(i, 0, 0);
};

export default a;
