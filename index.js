// console.log('hello world');
// console.log('this is nodejs tutorial');
// // process.exit(1);

// const {kia, ford} = require('./car')
// console.log(kia);
// console.log(ford);
// console.log(JSON.stringify(kia, null, 5));
// console.log(JSON.stringify(ford,null, 2));

const path = require('path')
const fsPromise = require('fs').promises

const filePath = "C:/Users/USER/Documents/codes/node.js/files/sample.txt"

// console.log(path.dirname(filePath));
// console.log(__dirname);
// console.log(path.basename(filePath));
// console.log(__filename);
// console.log(path.extname(filePath));

// const sampleFile = 'sample.txt'
// console.log(path.join(path.dirname(filePath), sampleFile));

const fs = require('fs');
//console.log(fs);
//read from a file - async method
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw new Error ('something went wrong');
    console.log('Async method:', data);
})

//read from a file - sync method
try{
    const data = fs.readFileSync(path.join(__dirname, 'files', 'sample.txt'), 'utf-8')
    console.log('Sync method:', data);
}catch (err){
    console.log(err);
}

//read from a file - promise method
const fileReading = async () => {
    try {
        const data = await fsPromise.readFile(filePath, {encoding: 'utf-8'})
        console.log('Promise method:', data);
    } catch (err){
    console.log(err);
}
}

fileReading()

//writing into a file
const txtPath = path.join(__dirname, 'files', 'text.txt')
const content = 'i love this nodejs tutorial series'
fs.writeFile(txtPath, content, (err) => {
    if (err) throw new Error ('something went wrong');
    console.log('Async method:', 'write operation completed successfully');
})

const content1 = 'i am making great progress'
const fileWriting = async () => {
    try {
        await fsPromise.writeFile(txtPath, content)
        //to append
        await fsPromise.appendFile(txtPath, `\n ${content1}`)
        const data = await fsPromise.readFile(txtPath)
        console.log('Promise method:', data.toString());
    } catch (err){
    console.log(err);
}
}

fileWriting()

const fileWrite = setTimeout( async () => {
    try {
        await fsPromise.writeFile(txtPath, '\n i just changed this name', {
            flag: 'a+',
        })
        await fsPromise.rename(txtPath, path.join(__dirname, 'files', 'newTxt.txt'))
        
    } catch (err) {
        console.log(err);
    }
}, 1000)

