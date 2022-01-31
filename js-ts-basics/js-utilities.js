function laptopConfig() {

    const arr = [ 'abc', 'pqr', 'lmn', 'xyz', 'aac' ]

    arr.forEach(function(cfg) {
        console.log(cfg)
    })

    arr.forEach( cfg => console.log(cfg) )

    const oldFilteredArray = arr.filter( function (cfg) {
        return cfg.startsWith('a')
    } )
    console.log(oldFilteredArray)

    const filteredArray = arr.filter( cfg => cfg.startsWith('a') )
    console.log(filteredArray)
}

laptopConfig()
