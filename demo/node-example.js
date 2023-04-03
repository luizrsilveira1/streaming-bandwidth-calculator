import { bandwidthCalc, streaming } from "../main.js";

//bitrate should be in bps (bits / second)
//listeners should be... listeners
//time shoud be in seconds
//bandwidth should be in bytes


const inputValues = {
    bitrate:192000,
    listeners:1,
    time:1,
    bandwidth:24000
}

console.log(`Legacy function from version 0.0.5:`)
console.log(bandwidthCalc(inputValues.bitrate,inputValues.listeners,inputValues.time))
console.log(`\n\n\nCurrent function to calculate bandwidth in bytes:`)
console.log(streaming.bandwidth(inputValues.bitrate,inputValues.listeners,inputValues.time))
console.log(`\n\n\nCurrent function to calculate listeners:`)
console.log(streaming.listeners(inputValues.bitrate,inputValues.time,inputValues.bandwidth))
console.log(`\n\n\nCurrent function to calculate time in seconds:`)
console.log(streaming.time(inputValues.bitrate,inputValues.listeners,inputValues.bandwidth))
console.log(`\n\n\nCurrent function to calculate bitrate in bits / second:`)
console.log(streaming.bitrate(inputValues.listeners,inputValues.time,inputValues.bandwidth))