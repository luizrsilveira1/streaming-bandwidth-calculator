// const {calculator} = require('./calculator')
// const {unitReferences} = require('./unitReferences')
import { calculator } from './calculator.js'
import { unitReferences } from './unitReferences.js'


function help(name) {
    if(name === undefined || name === '') {
        let message = listAllFunctions(calculator)
        message += `\n\n\nSintaxe:\n\n\tcalculator.nomeDaFuncao(arg1,arg2,argn,...)\n\n\nPara detalhes da sintaxe de cada função, digite:\n\n\tcalculator.help('nomeDaFuncao')\n\n`
        return message
    }
    if(name === 'arguments' || name === '-a') {
        let table = `\tNome do argumento na função\t\tValores aceitos\n`
        let message = `\nLista de argumentos aceitos:\n\n${table}\n\tsystem,systemInput,systemOutput:\t${Object.keys(unitReferences.system)}\n\ttype,inputType,outputType:\t\t${Object.keys(unitReferences.types)}\n\tvalue,inputValue,outputValue:\t\tFloat ou Integer. Ex 1000, 10.000\n`
        return message
    }
    if(name in calculator) {
        const regex = {
            funcCall:/[a-zA-Z]+\([a-zA-Z\,]+\)/i,
            argString:/(?<=[a-zA-Z]\s?\()[a-zA-Z,?]+(?=\)\s?\{?)/g,
            listArray:/[a-zA-Z]+/g
        }
        let funcName = regexExtractor(regex.funcCall,calculator[name].toString())[0]
        let argListString = regexExtractor(regex.argString,funcName)
        let listArray = regexExtractor(regex.listArray,argListString.toString())
        let helpMessage = `\nSintaxe da função:\n\n    ${funcName}\n\n\nArgumentos aceitos:\n\n\t${listArray}\n`
        
        return helpMessage
    }
    let invalidArgMessage = `\nNão há nenhum tópico de ajuda para o argumento "${name}".\n\nUtilize calculator.help() para mais detalhes.\n`
    invalidArgMessage += `${listAllFunctions(calculator)}\n`
    return invalidArgMessage
}

function listAllFunctions(object) {
    let message = `\nLista de funções disponíveis:\n`
    Object.keys(object).forEach(e => {
        message += `\n\t${e}`
    }) 
    return message
}

function regexExtractor(regex,data) {
    // console.log(data)
    // return regex.exec(data)
    return data.match(regex)
    // return data
}

export {help}