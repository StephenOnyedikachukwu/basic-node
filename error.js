//1. error object
// const error = new Error ("something went wrong")
// console.log(error.stack);
// console.log(error.message);
// throw new Error ('i am an error object')

//2. custom error
const {customError }= require('./customError')
// throw new customError ('this is a custom error')

//3. try and catch
// try{
//     doSomething()
// }catch (e){
//     console.log('error occured');
//     console.log(e);
// }

function doSomething(){
    const data = fetch("localhost:300/api")
    // console.log('i am from do something');
    return data;
}

//4. uncaught exception
// process.on('uncaughtException', () => {
//     console.log('there was an uncaught error');
//     process.exit(1)
// })
// doSomething()

//5. exception with promises
// const promise = new Promise ((resolve, reject) => {
//     if(true){
//         resolve(doSomething())
//     }else {
//         reject (doSomething())
//     }
// })

// promise.then((val) => {
//     console.log(val);
// }). catch ((err) => {
//     console.log('error occured');
//     console.log(err);
// })

//6. exception with async await
const someFunction = async () => {
    try {
        await doSomething()
    }catch(err){
        throw new customError (err.message)
    }
} 

someFunction()