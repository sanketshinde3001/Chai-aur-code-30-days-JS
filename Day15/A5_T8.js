// Create a memoized version of a function that calculates the factorial of a number.

function datacache(fun) {
    const cache = {}

    return function (...args) {
        const key = JSON.stringify(args)
        if (key in cache) {
            console.log('This data Get from Cache - '+key+" "+cache[key])
            return cache[key]
        }
        console.log('This data Get from function')
        const results = fun(...args)
        cache[key] = results
        return results
    }
}

const facto = (n) => {
    if (n < 0) {
        return -1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const cachefacto = datacache(facto)



console.log(cachefacto(5))
console.log(cachefacto(7))
console.log(cachefacto(5))