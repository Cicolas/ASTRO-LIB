export interface ColorInterface {
    r: number,
    g: number,
    b: number,
    a?: number
}

export default class Color implements ColorInterface{
    _: number[] = [];
    
    public get r(): number {
        return this._[0];
    }
    public set r(v: number) {
        this._[0] = v;
    }
    public get g(): number {
        return this._[1];
    }
    public set g(v: number) {
        this._[1] = v;
    }
    public get b(): number {
        return this._[2];
    }
    public set b(v: number) {
        this._[2] = v;
    }
    public get a(): number {
        return this._[2];
    }
    public set a(v: number) {
        this._[2] = v;
    }

    constructor (r: number = 0, g: number = 0, b: number = 0, a: number = 1){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /**
     * sum to vectors
     * @param value other vector to add
     * @returns return the sum of the two vectors
     */
    add(other: Color): Color {
        const v = new Color();
        v._[0] = this._[0] + (other._[0] ? other._[0] : 0);
        v._[1] = this._[1] + (other._[1] ? other._[1] : 0);
        v._[2] = this._[2] + (other._[2] ? other._[2] : 0);        
        v._[3] = this._[3] + (other._[3] ? other._[3] : 0);
        return v;
    }

    /**
     * subtract to vectors
     * @param value other vector2 to subtract
     * @returns return the subtract of the two vectors
     */
    subtract(other: Color): Color {
        const v = new Color();
        v._[0] = this._[0] - (other._[0] ? other._[0] : 0);
        v._[1] = this._[1] - (other._[1] ? other._[1] : 0);
        v._[2] = this._[2] - (other._[2] ? other._[2] : 0);        
        v._[3] = this._[3] - (other._[3] ? other._[3] : 0);
        return v;
    }

    /**
     * multiply to vectors
     * @param value value to multiply
     * @returns return the multiplicated vector
     */
    multiply(value: number): Color {
        const v = new Color();
        v._[0] = this._[0] * value;
        v._[1] = this._[1] * value;
        v._[2] = this._[2] * value;        
        v._[3] = this._[3] * value;
        return v;
    }

    /**
     * divide to vectors
     * @param value value to divide
     * @returns return the divided vector
     */
    divide(value: number): Color {
        const v = new Color();
        v._[0] = this._[0] / value;
        v._[1] = this._[1] / value;
        v._[2] = this._[2] / value;        
        v._[3] = this._[3] / value;
        return v;
    }
}