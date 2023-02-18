async function hello(num) {
    if (num === 1) {
        throw 'ONE'
    } else if (num === 2) {
        throw Error('TWO')
    }
    return "HELLO!"
}

console.log(hello(1))
console.log(hello(2))
console.log(hello(3))

const rand = async () => {
    //weoreme.werew()
    return "RANDOM SUCCESS!"
}

rand()
    .then((response) => {
        console.log("RESPONSE: ", response)
    })
    .catch((err) => {
        console.log(err)
    })

const login = async (username, password) => {
    if (!username || !password) throw "MISSING CREDENTIALS";
    else if (password == "cat") return 'LOGIN SUCCESS!';
    else throw "INVALID CREDENTIALS";
}

login('aduisdsa', 'cat')
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })