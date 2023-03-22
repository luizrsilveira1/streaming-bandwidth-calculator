# streaming-bandwidth-calculator
A library to calculate the bandwidth consumed through streaming connections.

## How to use:

### Import the library to your project:

```
import { bandwidthCalc } from "./main.js"
```

### Call the function with the following syntax:

bandwidthCalc(inputBitrate,inputListeners,inputTime)

Where:

- inputBitrate: the streaming bitrate. Ex: 128, 192, 320, etc. Should be only numbers.
- inputListeners: the average listeners number.
- inputTime: the total time connected.

Expected: The bandwidtch in bytes.

#### Help:

"index.html" and "example.js" are unnecessary files, provided as an exemple of how to use this library on your front-end project.

## Aditional info:

This application utilizes a library to work:

### [bytes-and-bits-converter:](https://github.com/luizrsilveira1/bytes-and-bits-converter) A library to convert magnitudes