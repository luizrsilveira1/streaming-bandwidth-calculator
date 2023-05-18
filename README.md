## Note: I am not a software developer. This project was made solely and exclusively for personal learning purposes. I would greatly appreciate it if you could send me criticisms, tips, suggestions, and any other comments that may help me to evolve.

# streaming-bandwidth-calculator
A library to calculate the bandwidth consumed through streaming connections.
## Examples:
- Get total listeners from bitrate, time and bandwidth
- Get total bandwidth consumed from bitrate, time and listeners

## How to use:

### Back-end implementation:

Install the library via [NPM](https://www.npmjs.com/package/streaming-bandwidth-calculator):

```
npm i streaming-bandwidth-calculator
```

For Node.js, import the library as follows:

```
const { calculator,streaming } = require('streaming-bandwidth-calculator')
```

Inside the `demo` folder, `node-example.js` provide a simple example of how to use the library on the back-end.

If you're using node type as ES Modules, you'll need to comment all "require" and "module.exports" from the .js files, and uncomment the "import" and "export" lines.

### Front end implementation:

Install the library via [NPM](https://www.npmjs.com/package/streaming-bandwidth-calculator):

```
npm i streaming-bandwidth-calculator
```

Copy the `/src` folder and `main.js` file from `/node_modules` to your working directory.

In order to work on a browser, you'll need to make some changes in these files:

```
./main.js
./src/bandwidth-calc.js
```

All you need to do is comment the lines using "require" or "module.exports" and uncomment the lines using "import" and "export", like this example on bandwidth-calc.js:

```
import { calculator } from "../../bytes-and-bits-converter/script.js"
// const calculator = require('bytes-and-bits-converter')
...
export {bandwidthCalc, streaming}
// module.exports = { bandwidthCalc,streaming }
```

If you want to use this project right through your HTML file, import the library at the end of the `<body>` tag, as follows:

```
<body>
...your html code...
<script src="./main.js" type="module"></script
</body>
```

Inside the `demo` folder, `index.html` and `example.js` provides an example of how to use the libray on the front-end.


### Syntax

```
streaming.bandwidth(inputBitrate,inputListeners,inputTime)
```
Return: bandwidth in bytes
```
streaming.listeners(inputBitrate,inputTime,inputListeners)
```
Return: Average amount of listeners
```
streaming.time(inputBitrate,inputListeners,inputBandwidth)
```
Return: Average amount of time per listener in seconds
```
streaming.bitrate(inputListeners,inputTime,inputBandwidth)
```
Return: Maximum bitrate in bits

Where:

- inputBitrate: the streaming bitrate. Ex: 128000, 192000, 320000, etc. Should be only numbers and in bits
- inputListeners: the average listeners number.
- inputTime: the total time connected in seconds.
- inputBandwidth: the total bandwidth consumed in bytes.

Also, you can convert numerous units of measurement from bits and bytes through the `calculator` function. Type this for more info:

```
calculator.help()
```

#### Help:

`index.html` and `example.js` are unnecessary files, provided as an exemple of how to use this library on your front-end project.

`node-example.js` also is an unnecessary file, provided as an exemple of how to use this library on your Node.js project.

## Aditional info:

This application utilizes a library to work:

### [bytes-and-bits-converter:](https://github.com/luizrsilveira1/bytes-and-bits-converter) A library to convert magnitudes


## Changelog:

### Last updates: [0.0.9] - 2023-05-18

Updating "type" from ES Modules to CommonJS.

#### Added:
- On all .js files, added const xx = require('') and module.exports in order to work as CommonJS.
- On all .js files, added commented import and export lines to facilitate any potential change on node type to ES Modules.

### [View complete history](./CHANGELOG.md)