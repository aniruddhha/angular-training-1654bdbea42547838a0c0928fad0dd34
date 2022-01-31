//1. first problem
function squareOrUpper(arr) {
    return arr.map( el => typeof(el) == 'number' ? el * el : el.toUpperCase() )
}

const arr = [2, 6, 'abc' ]

console.log(squareOrUpper(arr))

//2. second problem
function toDate() {

    // making processing and getting data from server

    let dt = new Date()
    dt = true // value must be date but variable acceptd the boolean
    // you have written the logic by the consideration of date
    return dt.toISOString()
}

toDate()