export namespace Keyboard {
    let pressedKeys: string[] = [];

    export function isDown(key: string): boolean {
        return pressedKeys.includes(key);
    }

    export function allPressed(): string[]{
        return pressedKeys;
    }

    export function _addKey(key: string) {
        pressedKeys.push(key);
        console.log(key, "added");
    }

    export function _removeKey(key: string) {
        pressedKeys = pressedKeys.filter(k => k != key);
        console.log(key, "removed");   
    }
}