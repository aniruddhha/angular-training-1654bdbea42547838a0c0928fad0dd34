
function conditionals() {

    const nm = 'abc'
    const year = 2022

    if(nm == 'ahh' && year >= 2000) {
        console.log('it is okay')
    }else {
        console.log('need more marketing')
    }
}

conditionals()

function switchCaseDemo() {
    const day = 10

    switch(day) {
        case 1 : {
            console.log('Monday')
            break
        } 
        case 2 : {
            console.log('Tuesday')
            break
        }      
        default : {
            console.log('No Day')
        }
    }
}

switchCaseDemo()