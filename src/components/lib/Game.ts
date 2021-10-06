/**
 * Game class, it's an abstract class that describe your game cycle
 */
export default abstract class Game {
    protected canvas: CanvasRenderingContext2D;
    
    constructor(canvas: CanvasRenderingContext2D) {
        this.canvas = canvas;
    }

    /** Load callback is called once time, on load, your game */
    public abstract load: () => void;

    /** Update callback is called 60 times per second your main game logic should be here */
    public abstract update: () => void;

    /** 
     *  Draw callback is where all your drawable stuffs should be 
     *  @param time it return how time elapsed since start
    */
    public abstract draw: (time: number) => void;

    /** 
     *  onKeyDown callback is called when a key is pressed 
     *  @param key your keyboard event of your key
    */
    public onKeyDown?: (key: KeyboardEvent) => void;
    /** 
     *  onKeyDown callback is called when a key is released
     *  @param key your keyboard event of your key 
     */
    public onKeyUp?: (key: KeyboardEvent) => void;

    /** 
     *  onKeyDown callback is called when a key is pressed 
     *  @param key your keyboard event of your key
    */
    public onMouseDown?: (button: MouseEvent) => void;
    /** 
      *  onKeyDown callback is called when a key is released
      *  @param key your keyboard event of your key 
      */
    public onMouseUp?: (button: MouseEvent) => void;
}