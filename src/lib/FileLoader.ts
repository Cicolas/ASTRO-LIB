namespace FileLoader {
    export class ImageLoader {
        private _: HTMLImageElement;
        
        constructor(path: string, width?: number, height?: number) {
            this._ = new Image(width, height);
            this._.src = path;
        }

        public getImageElement() {
            return this._;
        }
    }
}

export default FileLoader;