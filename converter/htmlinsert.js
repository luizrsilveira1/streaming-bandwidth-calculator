import {calculator} from './modules/calculator.js'
import {help} from './modules/help.js'

let inputBit = document.getElementById('inputBit')
inputBit.addEventListener('keyup',callConverterFunction,false)

function callConverterFunction(listener) {
    console.log(calculator.convertBitToByte(inputBit.value))
}