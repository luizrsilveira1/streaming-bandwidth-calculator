// import { bandwidthCalc,streaming } from "./src/bandwidth-calc.js"
// import { calculator } from "../bytes-and-bits-converter/script.js"
const { bandwidthCalc,streaming } = require('./src/bandwidth-calc')
const calculator = require('bytes-and-bits-converter')

// export { bandwidthCalc }
// export { calculator,streaming }
module.exports = { bandwidthCalc,calculator,streaming }