/*
    Transform, Rotation, Vectors, Random, Weighted Random
*/

//----------------------------------------------------------------------
// Vectors
//----------------------------------------------------------------------

class Vectors {
    _: number[];
    constructor(size: number) {
        this._ = new Array<number>(size);
    }    

    /**
     * sum to vectors
     * @param value other vector to add
     * @returns return the sum of the two vectors
     */
    add(other: Vectors): Vectors{
        const v = new Vectors(this._.length);
        for (let i = 0; i < this._.length; i++) {
            v._[i] = this._[i]+(other._[i]?other._[i]: 0);
        }
        return v;
    }
    
    /**
     * subtract to vectors
     * @param value other vector2 to subtract
     * @returns return the subtract of the two vectors
     */
    subtract(other: Vectors): Vectors{
        const v = new Vectors(this._.length);
        for (let i = 0; i < this._.length; i++) {
            v._[i] = this._[i]-(other._[i]?other._[i]: 0);
        }
        return v;
    }

    /**
     * multiply to vectors
     * @param value value to multiply
     * @returns return the multiplicated vector
     */
    multiply(value: number): Vectors {
        const v = new Vectors(this._.length);
        for (let i = 0; i < this._.length; i++) {
            v._[i] = this._[i]*value;
        }
        return v;
    }
    
    /**     
     * divide to vectors
     * @param value value to divide
     * @returns return the divided vector
     */
    divide(value: number): Vectors {
        const v = new Vectors(this._.length);
        for (let i = 0; i < this._.length; i++) {
            v._[i] = this._[i]/value;
        }
        return v;
    }

    /**
     * @returns return the magnitude of the vector
     */
    magnitude(): number{
        let v = 0;
        for (let i = 0; i < this._.length; i++) {
            v += this._[i]**2;
        }
        return v**.5;
    }
    
    /**
     * @returns return the normalized vector
     */
    normalize(): Vectors{
        const v: number = this.magnitude();
        const f = this.divide(v);
        return f;
    }
}

export class Vector2 extends Vectors {
    public get x() : number {
        return this._[0];
    }
    public set x(v : number) {
        this._[0] = v;
    }
    
    public get y() : number {
        return this._[1];
    }
    public set y(v : number) {
        this._[1] = v;
    }

    /**
     * Constructor for Vector2 class
     * @param x x position
     * @param y y position
     */
    constructor(x: number = 0, y: number = 0) {
        super(2);
        this.x = x;
        this.y = y;
    }
}

export class Vector3 extends Vector2 {    
    public get z() : number {
        return this._[2];
    }
    public set z(v : number) {
        this._[2] = v;
    }

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(3);
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export class Vector4 extends Vector3 {
    public get w() : number {
        return this._[3];
    }
    public set w(v : number) {
        this._[3] = v;
    }

    constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 0) {
        super(4);
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
}

//----------------------------------------------------------------------
// Transforms
//----------------------------------------------------------------------

export interface Transform {
    position: Vector2;
    rotation: number;
}

export interface Transform3D {
    position: Vector3;
    rotation: Vector3;
}

//----------------------------------------------------------------------
// Random
//----------------------------------------------------------------------

export namespace Random {
    export function Random(n: number = 1): number {
        return Math.random()*n;
    }

    export function Range(min: number = 0, max: number = 0): number {
        return (Math.random()*(max-min))+min;
    }

    export class WeightedRandom<Type> {
        public randomList: Array<{obj: Type, weight: number}>;
        public _randomPool: Array<Type>;

        constructor(...args: {obj: Type, weight: number}[]) {
            this.randomList = args;
            console.log(this.randomList);
        }

        public GetRandom(): Type {
            this.Shuffle(this.randomList);
            this.SetupPool();
            // console.log((Math.floor(Random()*this._randomPool.length)));         
            return this._randomPool[(Math.floor(Random()*this._randomPool.length))];
        }

        private SetupPool(): void {
            if(this._randomPool == null){
                this._randomPool = new Array<Type>();
            }

            this._randomPool = new Array<Type>();

            for (let i = 0; i < this.randomList.length; i++) {
                for (let j = 0; j < Math.floor(this.randomList[i].weight); j++) { 
                    this._randomPool.push(this.randomList[i].obj);
                }
            }
        }

        public Add(value: Type, w: number): void{
            if (w <= 0)
                return;

            const weight1 = {obj: value, weight: w};

            this.randomList.push(weight1);
        }

        private Shuffle(list: Array<{obj: Type, weight: number}>) {
            let n: number = list.length;  
            while (n > 1) {  
                n--;  
                const k: number = Math.floor(Random(n + 1));
                let value: {obj: Type, weight: number} = list[k];
                list[k] = list[n];  
                list[n] = value;  
            }
            return list;
        }
    }
}