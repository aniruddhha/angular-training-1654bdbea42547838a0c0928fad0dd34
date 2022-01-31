class Abc {

    constructor() {
        // state of class
        this.a = 10
        this.b = 20
        this.c = 30
    }

    whatsDt() {
        // behaviour
        console.log(`A = ${this.a}, B = ${this.b}, C = ${this.c}`)
    }
}

class AbcChild extends Abc {

}

const a = new Abc()
const ac = new AbcChild()