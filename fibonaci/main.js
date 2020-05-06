const fs = require('fs')
const jsFibo = require('./fibo')

let source = fs.readFileSync('./fibo.wasm');
let typedArray = new Uint8Array(source);

const env = {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({
      initial: 256
    }),
}

const main = async() => {

    let wasm = await WebAssembly.instantiate(typedArray, {env})
    const {fibo} = wasm.instance.exports

    const FIBO_NUMBER = 20

    console.time('js-fibo')
    console.log(jsFibo(FIBO_NUMBER))
    console.timeEnd('js-fibo')
    
    console.time('assem-fibo')
    console.log(fibo(FIBO_NUMBER))
    console.timeEnd('assem-fibo')
}

main()