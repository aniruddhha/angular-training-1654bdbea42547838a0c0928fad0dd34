export class Car { 

    /*private speed : number;

    constructor(speed : number) {
        this.speed = speed
    }*/

    constructor(
        private speed : number = 10,
        private date : Date = new Date()
     ) { }

    speedUp(spd ?: number) { // ?  says optional
        if(spd)
            this.speed++
    }
}

export class Bmw extends Car { }

export interface GpsListener {
    loccate(): void
}

