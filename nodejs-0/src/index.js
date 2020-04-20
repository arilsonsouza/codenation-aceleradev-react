'use strict'

const fibonacci = () => {
    const sequence = [0, 1]
    for (let index = 2; index <= 350; index++) {        
        sequence[index] = sequence[index-1] + sequence[index-2]
    }
    return sequence
}

const isFibonnaci = (num) => fibonacci().indexOf(num) >= 0

module.exports = {
    fibonacci,
    isFibonnaci
}
