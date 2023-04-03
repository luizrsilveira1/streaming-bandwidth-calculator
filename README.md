## Note: I am not a software developer. This project was made solely and exclusively for personal learning purposes. I would greatly appreciate it if you could send me criticisms, tips, suggestions, and any other comments that may help me to evolve.

# streaming-bandwidth-calculator
A library to calculate the bandwidth consumed through streaming connections.

## How to use:

### Install the library via [NPM](https://www.npmjs.com/package/streaming-bandwidth-calculator):

```
npm i streaming-bandwidth-calculator
```

### Import the library to your project:

```
import { calculator,bandwidthCalc } from './node_modules/streaming-bandwidth-calculator/main.js'
```

This library uses `"type": "module"` in package.json to work correctly on Node.js and front-end. This means that you need to use import instead of require.

### Call the function with the following syntax:

```
bandwidthCalc(inputBitrate,inputListeners,inputTime)
```

Where:

- inputBitrate: the streaming bitrate. Ex: 128, 192, 320, etc. Should be only numbers.
- inputListeners: the average listeners number.
- inputTime: the total time connected.

Expected: The bandwidtch in bytes.

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

### Last updates: [0.0.7] - 2023-04-03

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