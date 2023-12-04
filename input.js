const readline = require('readline')
const prompt = require('prompt-sync')()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`what is your name ?`, (name) => {
    console.log(`hi ${name}`);
    rl.close()
})
console.clear()

const name = prompt('what is your name?')
console.log(`hi ${name}`);
