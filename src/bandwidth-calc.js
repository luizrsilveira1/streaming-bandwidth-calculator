import { calculator } from "../node_modules/bytes-and-bits-converter/script.js"

function bandwidthCalc(inputBitrate,inputListeners,inputTime) {
    let byteString = calculator.convertBitToByte(inputBitrate)
    let bandwidth = byteString * inputListeners * inputTime
    return bandwidth
}

export {bandwidthCalc}