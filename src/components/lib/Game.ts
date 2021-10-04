export default abstract class Game {
    protected canvas: CanvasRenderingContext2D;
    
    constructor(canvas: CanvasRenderingContext2D) {
        this.canvas = canvas;
    }

    public abstract load: () => void;

    public abstract update: () => void;

    public abstract draw: (time: number) => void;

    public onKeyDown?: (key: KeyboardEvent) => void;
    public onKeyUp?: (key: KeyboardEvent) => void;
}