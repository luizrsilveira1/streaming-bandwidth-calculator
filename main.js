import {calculator} from './converter/modules/calculator.js'

const inputData = {
    htmlKeyboardListener:document.getElementById('inputForm').addEventListener('keyup',runScript,false),
    htmlMoiseListener:document.getElementById('sendData').addEventListener('click',runScript,false),
    result:document.getElementById('result'),
    htmlInput:{
        inputListeners:document.getElementById('inputListeners').value,
        inputTime:document.getElementById('inputTime').value,
        inputBitrate:document.getElementById('inputBitrate').value,
    }
}

function runScript(event) {
    let data = grabHtmlData()
    let rawResult = converter(data)
    writeHtml(rawResult,data.inputTime)
}

function grabHtmlData() {
    return {
        inputListeners:document.getElementById('inputListeners').value,
        inputTime:document.getElementById('inputTime').value,
        inputBitrate:document.getElementById('inputBitrate').value,
    }
}

function converter(data) {
    let byteString = calculator.convertBitToByte(data.inputBitrate)
    let bandwidth = byteString * data.inputListeners * data.inputTime
    return bandwidth
}

function writeHtml(data,time) {
    let message = `Total: ${data} bytes de transferência utilizada em ${time} segundos`
    inputData.result.innerHTML = message
}