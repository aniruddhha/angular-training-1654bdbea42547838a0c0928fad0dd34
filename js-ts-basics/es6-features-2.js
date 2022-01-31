
const oldFn = function() {
    console.log('Function Called')
}
const arrowFn = () => { console.log('Arrow Function Called') }

function kop() {
    return 10
}

const arrowKop = () => 10

function vbn(name, date) {
    return `Name is ${name} and Date is ${date}`
}

const arrowVbn = (name, date) => `Name is ${name} and Date is ${date}`