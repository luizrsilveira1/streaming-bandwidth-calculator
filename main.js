// import {calculator} from './converter/modules/calculator.js'

// const inputData = {
//     htmlKeyboardListener:document.getElementById('inputForm').addEventListener('keyup',runScript,false),
//     htmlMoiseListener:document.getElementById('sendData').addEventListener('click',runScript,false),
//     result:document.getElementById('result'),
//     htmlInput:{
//         inputListeners:document.getElementById('inputListeners').value,
//         inputTime:document.getElementById('inputTime').value,
//         inputBitrate:document.getElementById('inputBitrate').value,
//     }
// }

// function runScript(event) {
//     let data = grabHtmlData()
//     let rawResult = converter(data)
//     writeHtml(rawResult,data.inputTime)
// }

// function grabHtmlData() {
//     return {
//         inputListeners:document.getElementById('inputListeners').value,
//         inputTime:document.getElementById('inputTime').value,
//         inputBitrate:document.getElementById('inputBitrate').value,
//     }
// }

// function converter(data) {
//     let byteString = calculator.convertBitToByte(data.inputBitrate)
//     let bandwidth = byteString * data.inputListeners * data.inputTime
//     return bandwidth
// }

// function writeHtml(data,time) {
//     let message = `Total: ${data} bytes de transferência utilizados em ${time} segundos`
//     inputData.result.innerHTML = message
// }

const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data, null, 3));
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


const data = {
    "name": "John",
    "age": 34,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "baseball"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}