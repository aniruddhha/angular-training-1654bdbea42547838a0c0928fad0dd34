function checkEquality() {
    const a = new Date('2021-01-01')
    const b = new Date('2021-01-01')

    console.log('Are Dates Equal ?  '+(a === b))

    const o1 = { dt : 'simple' }
    const o2 = { dt : 'simple' }
    console.log('Are Objects Equal ?  == '+(o1 == o2))
    console.log('Are Objects Equal ?  === '+(o1 === o2))

    console.log('Are Objects Equal ?  == '+(o1 == o1))
    console.log('Are Objects Equal ?  === '+(o1 === o1))
}

checkEquality()