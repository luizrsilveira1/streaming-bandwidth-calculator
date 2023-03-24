import { bandwidthCalc } from "../src/bandwidth-calc.js"

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
    let rawResult = bandwidthCalc(data.inputBitrate,data.inputListeners,data.inputTime)
    writeHtml(rawResult,data.inputTime)
}

function grabHtmlData() {
    return {
        inputListeners:document.getElementById('inputListeners').value,
        inputTime:document.getElementById('inputTime').value,
        inputBitrate:document.getElementById('inputBitrate').value,
    }
}
function writeHtml(data,time) {
    let message = `Total: ${data} bytes de transferência utilizados em ${time} segundos`
    inputData.result.innerHTML = message
}