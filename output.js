const x = 1
const y = 2
console.log(x,y);

// %s format variable to String
// %d formats to number 
// %i formats to integer
// %o to object

console.log('i am %s and my age is %d', 'daddyFigure', 54);
console.clear();
console.count('i am daddyFigure')
console.count('i am daddyFigure')
console.count('i am a backend developer')
console.countReset('i am daddyFigure')
console.count('i am daddyFigure')

const function1 = () => console.trace()
const function2 = () => function1()

function2()

const sum = () => console.log(`the sum of 2 and 3 is ${2+3}`)
const multiply = () => console.log(`the multiplication of 2 and 3 is ${2*3}`)

const measureTime = () => {
    console.time('sum()')
    sum()
    console.timeEnd('sum()')
    console.time('multiply()')
    multiply()
    console.timeEnd('multiply()')
}

measureTime()

console.clear();

const progressBar = require('progress')

const bar = new progressBar('downloading [:bar] :rate/bps :percent :etas', {
    total: 20,
})

const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
        clearInterval(timer)
    }
}, 100)

const chalk = require('chalk')
console.log(chalk.blue('this is nodejs'));