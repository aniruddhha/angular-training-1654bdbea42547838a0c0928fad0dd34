export class Car { 

    /*private speed : number;

    constructor(speed : number) {
        this.speed = speed
    }*/

    constructor(
        private speed : number,
        private date : Date 
     ) { }

    speedUp() {
        this.speed++
    }
}

export class Bmw extends Car { }

export interface GpsListener {
    loccate(): void
}

