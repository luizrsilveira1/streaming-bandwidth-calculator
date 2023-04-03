import { calculator } from "../../bytes-and-bits-converter/script.js"

const streaming = {
    bandwidth(inputBitrate,inputListeners,inputTime) {
        return calculator.convertBitToByte(inputBitrate) * inputListeners * inputTime
    },
    listeners(inputBitrate,inputTime,inputBandwidth) {
        return inputBandwidth / (calculator.convertBitToByte(inputBitrate) * inputTime)
    },
    time(inputBitrate,inputListeners,inputBandwidth) {
        return inputBandwidth / (calculator.convertBitToByte(inputBitrate) * inputListeners)
    },
    bitrate(inputListeners,inputTime,inputBandwidth) {
        return calculator.convertByteToBit(inputBandwidth / (inputListeners * inputTime))
    }
}

//Keep compatibility with version 0.0.5
const bandwidthCalc = streaming.bandwidth

export {bandwidthCalc, streaming}