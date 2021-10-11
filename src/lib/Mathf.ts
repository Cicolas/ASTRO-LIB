/*
    Transform, Rotation, Vectors, Random, Weighted Random
*/

//----------------------------------------------------------------------
// Vectors
//----------------------------------------------------------------------
// TODO: Vactors inheritance aren't working

export class Vectors {
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
        const f = v == 0?null:this.divide(v);
        return f;
    }
}

export class Vector2 implements Vectors{
    _: number[] = [];

    public get x(): number {
        return this._[0];
    }
    public set x(v: number) {
        this._[0] = v;
    }
    public get y(): number {
        return this._[1];
    }
    public set y(v: number) {
        this._[1] = v;
    }

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * sum to vectors
     * @param value other vector to add
     * @returns return the sum of the two vectors
     */
    add(other: Vector2): Vector2 {
        const v = new Vector2(this._.length);
        v._[0] = this._[0] + (other._[0] ? other._[0] : 0);
        v._[1] = this._[1] + (other._[1] ? other._[1] : 0);
        return v;
    }

    /**
     * subtract to vectors
     * @param value other vector2 to subtract
     * @returns return the subtract of the two vectors
     */
    subtract(other: Vectors): Vector2 {
        const v = new Vector2(this._.length);
        v._[0] = this._[0] - (other._[0] ? other._[0] : 0);
        v._[1] = this._[1] - (other._[1] ? other._[1] : 0);
        return v;
    }

    /**
     * multiply to vectors
     * @param value value to multiply
     * @returns return the multiplicated vector
     */
    multiply(value: number): Vector2 {
        const v = new Vector2(this._.length);
        v._[0] = this._[0] * value;
        v._[1] = this._[1] * value;
        return v;
    }

    /**
     * divide to vectors
     * @param value value to divide
     * @returns return the divided vector
     */
    divide(value: number): Vector2 {
        const v = new Vector2();
        v._[0] = this._[0] / value;
        v._[1] = this._[1] / value;
        return v;
    }

    /**
     * @returns the vector square rooted
     */
    sqrt(p: number = 2): Vector2 {
        const v = new Vector2();
        v._[0] = this._[0]**1/p;
        v._[1] = this._[1]**1/p;
        return v;
    }

    /**
     * @returns return the magnitude of the vector
     */
    magnitude(): number {
        let v = 0;
        v += this._[0] ** 2;
        v += this._[1] ** 2;
        return v ** 0.5;
    }

    /**
     * @returns return the normalized vector
     */
    normalize(): Vector2 {
        const v: number = this.magnitude();
        const f = v == 0 ? new Vector2() : this.divide(v);
        return f;
    }
}

export class Vector3 implements Vectors{
    _: number[] = [];

    public get x(): number {
        return this._[0];
    }
    public set x(v: number) {
        this._[0] = v;
    }
    public get y(): number {
        return this._[1];
    }
    public set y(v: number) {
        this._[1] = v;
    }
    public get z(): number {
        return this._[2];
    }
    public set z(v: number) {
        this._[2] = v;
    }

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /**
     * sum to vectors
     * @param value other vector to add
     * @returns return the sum of the two vectors
     */
    add(other: Vectors): Vector3 {
        const v = new Vector3();
        v._[0] = this._[0] + (other._[0] ? other._[0] : 0);
        v._[1] = this._[1] + (other._[1] ? other._[1] : 0);
        v._[2] = this._[2] + (other._[2] ? other._[2] : 0);
        return v;
    }

    /**
     * subtract to vectors
     * @param value other vector2 to subtract
     * @returns return the subtract of the two vectors
     */
    subtract(other: Vectors): Vector3 {
        const v = new Vector3();
        v._[0] = this._[0] - (other._[0] ? other._[0] : 0);
        v._[1] = this._[1] - (other._[1] ? other._[1] : 0);
        v._[2] = this._[2] - (other._[2] ? other._[2] : 0);
        return v;
    }

    /**
     * multiply to vectors
     * @param value value to multiply
     * @returns return the multiplicated vector
     */
    multiply(value: number): Vector3 {
        const v = new Vector3();
        v._[0] = this._[0] * value;
        v._[1] = this._[1] * value;
        v._[2] = this._[2] * value;
        return v;
    }

    /**
     * divide to vectors
     * @param value value to divide
     * @returns return the divided vector
     */
    divide(value: number): Vector3 {
        const v = new Vector3();
        v._[0] = this._[0] / value;
        v._[1] = this._[1] / value;
        v._[2] = this._[2] / value;
        return v;
    }

    /**
     * @returns the vector square rooted
     */
    sqrt(p: number = 2): Vector3 {
        const v = new Vector3();
        v._[0] = this._[0]**1/p;
        v._[1] = this._[1]**1/p;
        v._[2] = this._[2]**1/p;
        return v;
    }

    /**
     * @returns return the magnitude of the vector
     */
    magnitude(): number {
        let v = 0;
        v += this._[0] ** 2;
        v += this._[1] ** 2;
        v += this._[2] ** 2;
        return v ** 0.5;
    }

    /**
     * @returns return the normalized vector
     */
    normalize(): Vector2 {
        const v: number = this.magnitude();
        const f = v == 0 ? null : this.divide(v);
        return f;
    }
}

//----------------------------------------------------------------------
// Transforms
//----------------------------------------------------------------------

export class Transform {
    position: Vector2 = new Vector2();
    rotation: number = 0;
}

export class Transform3D {
    position: Vector3;
    rotation: Vector3;
}

//----------------------------------------------------------------------
// Random
//----------------------------------------------------------------------

export namespace Random {
    export function Random(n: number = 1): number {
        return Math.random() * n;
    }

    export function Range(min: number = 0, max: number = 0): number {
        return Math.random() * (max - min) + min;
    }

    export class WeightedRandom<Type> {
        public randomList: Array<{ obj: Type; weight: number }>;
        public _randomPool: Array<Type>;

        constructor(...args: { obj: Type; weight: number }[]) {
            this.randomList = args;
            console.log(this.randomList);
        }

        public GetRandom(): Type {
            this.Shuffle(this.randomList);
            this.SetupPool();
            // console.log((Math.floor(Random()*this._randomPool.length)));
            return this._randomPool[
                Math.floor(Random() * this._randomPool.length)
            ];
        }

        private SetupPool(): void {
            if (this._randomPool == null) {
                this._randomPool = new Array<Type>();
            }

            this._randomPool = new Array<Type>();

            for (let i = 0; i < this.randomList.length; i++) {
                for (
                    let j = 0;
                    j < Math.floor(this.randomList[i].weight);
                    j++
                ) {
                    this._randomPool.push(this.randomList[i].obj);
                }
            }
        }

        public Add(value: Type, w: number): void {
            if (w <= 0) return;

            const weight1 = { obj: value, weight: w };

            this.randomList.push(weight1);
        }

        private Shuffle(list: Array<{ obj: Type; weight: number }>) {
            let n: number = list.length;
            while (n > 1) {
                n--;
                const k: number = Math.floor(Random(n + 1));
                let value: { obj: Type; weight: number } = list[k];
                list[k] = list[n];
                list[n] = value;
            }
            return list;
        }
    }
}
