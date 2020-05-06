const fs = require('fs');
var source = fs.readFileSync('./hello_wasm.wasm');

var typedArray = new Uint8Array(source);

const env = {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({
      initial: 256
    }),
}

WebAssembly.instantiate(typedArray, {
  env: env
}).then(wasmContainer => {

    const {add,subtract,multiply} = wasmContainer.instance.exports;
    console.log('4 + 2 = ', add(4, 2));

}).catch(e => {
  // error caught
  console.log(e);
});