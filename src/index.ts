export function cool():void {
    console.log('ts hello world!')
}

export const addTs: (num: number, num2: number) => number
 = (num: number, num2: number): number => num + num2

class HongqiActivityManager {
    a: number
    b: number
    
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}