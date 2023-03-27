# streaming-bandwidth-calculator
A library to calculate the bandwidth consumed through streaming connections.

## How to use:

### Import the library to your project:

```
import { bandwidthCalc } from "./main.js"
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

#### Help:

`index.html` and `example.js` are unnecessary files, provided as an exemple of how to use this library on your front-end project.

`node-example.js` also is an unnecessary file, provided as an exemple of how to use this library on your Node.js project.

## Aditional info:

This application utilizes a library to work:

### [bytes-and-bits-converter:](https://github.com/luizrsilveira1/bytes-and-bits-converter) A library to convert magnitudes


## Changelog:

### Last updates: [0.0.4] - 2023-03-27

Fixing the dependencies path to work with Node.js right after NPM install.

#### Added:

Properly exporting and importing the function `calculator` from `bytes=and-bits-converter`