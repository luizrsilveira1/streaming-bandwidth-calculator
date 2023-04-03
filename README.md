## Note: I am not a software developer. This project was made solely and exclusively for personal learning purposes. I would greatly appreciate it if you could send me criticisms, tips, suggestions, and any other comments that may help me to evolve.

# streaming-bandwidth-calculator
A library to calculate the bandwidth consumed through streaming connections.
## Examples:
- Get total listeners from bitrate, time and bandwidth
- Get total bandwidth consumed from bitrate, time and listeners

## How to use:

### Front end implementation:

Install the library via [NPM](https://www.npmjs.com/package/streaming-bandwidth-calculator):

```
npm i streaming-bandwidth-calculator
```

Copy the `/src` folder and `main.js` file from `/node_modules` to your working directory.

If you want to use this project inside your .js file, import the library as follows:

```
import { calculator,streaming } from './main.js'
```

This library uses `"type": "module"` in package.json to work correctly on Node.js and front-end. This means that you need to use import instead of require.

If you want to use this project right through your HTML file, import the library at the end of the `<body>` tag, as follows:

```
<body>
...your html code...
<script src="./main.js" type="module"></script
</body>
```

Inside the `demo` folder, `index.html` and `example.js` provides an example of how to use the libray on the front-end.

### Back-end implementation:

Install the library via [NPM](https://www.npmjs.com/package/streaming-bandwidth-calculator):

```
npm i streaming-bandwidth-calculator
```

For Node.js, import the library as follows:

```
import { calculator,streaming } from "./node_modules/streaming-bandwidth-calculator/main.js"
```

This library uses `"type": "module"` in package.json to work correctly on Node.js and front-end. This means that you need to use import instead of require.

Inside the `demo` folder, `node-example.js` provide a simple example of how to use the library on the back-end.

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

This library uses `"type": "module"` in package.json to work correctly on Node.js and front-end. This means that you need to use import instead of require.

#### Help:

`index.html` and `example.js` are unnecessary files, provided as an exemple of how to use this library on your front-end project.

`node-example.js` also is an unnecessary file, provided as an exemple of how to use this library on your Node.js project.

## Aditional info:

This application utilizes a library to work:

### [bytes-and-bits-converter:](https://github.com/luizrsilveira1/bytes-and-bits-converter) A library to convert magnitudes


## Changelog:

### Last updates: [0.0.8] - 2023-04-03

Some changes on the input and output numbers, and new functions available.

#### Added:

- New function to calculate listeners based on bitrate, time and bandwidth.
- New function to calculate time based on bitrate, listeners and bandwidth.
- New function to calculate bitrate based on time, listeners and bandwidth.
- All the functions should be called through the `streaming` method. Eg: streaming.bandwidth(bitrate,listeners,time), streaming.listeners(bitrate,time,bandwidth)

#### Changed
- The `bandwidthCalc` method still works through the compatibility mode.
- All inputs should be on the most basic unit (Bits and Bytes)
- The return will be always on the most basic unit (Bits and Bytes)