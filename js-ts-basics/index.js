
i = 10 // bad way
var j = 20 // unscoped version
let k = 30 //  scoped version -> es6 feature -> use this
const l = 40 // constant -> es6 fature -> use this 

function abc() { // function defination
    console.log('printing data')
    console.log(' i '+i)
    console.log(' j '+j)
    console.log(' k '+k)
    console.log(' l '+l)
    k = 89
}

abc() // function call