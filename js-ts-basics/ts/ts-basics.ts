
const dt: number = 10
let tm = 'abc'
// tm = new Date()
const isOkay: boolean = true
const fn: () => void = function (): void {
    //    return new Date()
}

// const ab : void = 'jhkjhjk'

function wowTs(): string {
    return 'some string'
}

const fnArrow: () => void = () => console.log('hello')
const fnArrowOne: (num: string) => number = (num: string) => 100

const anything: any = (num: string) => 100
const mixed: boolean | (() => void) = () => console.log('Okay')

const obj: { [key : string] : number|string } = {
    age: 10,
    'os': 'abc',
    'url-staging': 'abc.com'
}