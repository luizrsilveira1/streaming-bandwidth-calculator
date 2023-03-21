// const {unitReferences} = require('./unitReferences')
import { unitReferences } from './unitReferences.js'

const calculator = {
    convertByteToBit(value) {
        if(value === undefined) {
            return `Entrada inválida.`
        }
        return value * unitReferences.types.byte
    },
    convertValueToRawUnit(value,magnitude,system) {
        return value * unitReferences.system[system].base ** (unitReferences.system[system].exponentInterval * unitReferences.system[system].magnitudeMultiplier[magnitude])
    },
    convertBitToByte(value) {
        return value / 8
    },
    convertUnits(inputValue,inputType,inputMagnitude,inputSystem,outputType,outputMagnitude,outputSystem) {
        if(!this.validateValue(inputValue)) throw new Error(`O número de entrada é inválido`)
        if(!this.validatesType(inputType)) throw new Error(`O "type" de entrada é inválido`)
        if(!this.validatesType(outputType)) throw new Error(`O "type" de saída é inválido`)
        if(!this.validatesMagnitude(inputMagnitude)) throw new Error(`O "magnitude" de entrada é inválido`)
        if(!this.validatesMagnitude(outputMagnitude)) throw new Error(`O "magnitude" de saída é inválido`)
        if(!this.validatesSystem(inputSystem)) throw new Error(`O "system" de entrada é inválido`)
        if(!this.validatesSystem(outputSystem)) throw new Error(`O "system" de saída é inválido`)
        let userInput = {}
        userInput.rawUnit = this.convertValueToRawUnit(inputValue,inputMagnitude,inputSystem)
        userInput.rawUnitBit = this.convertByteToBit(userInput.rawUnit)
        outputType === 'byte' ? userInput.outputRaw = this.convertBitToByte(userInput.rawUnitBit) : userInput.outputRaw = userInput.rawUnitBit
        userInput.outputFinal = userInput.outputRaw / (unitReferences.system[outputSystem].base ** (unitReferences.system[outputSystem].magnitudeMultiplier[outputMagnitude] * unitReferences.system[outputSystem].exponentInterval))
        return userInput.outputFinal
    },
    validatesType(type) {
        return Object.keys(unitReferences.types).includes(type) ? true : false
    },
    validatesSystem(system) {
        return Object.keys(unitReferences.system).includes(system) ? true : false
    },
    validatesMagnitude(magnitude) {
        let magnitudeOptions = []
        Object.keys(unitReferences.system).forEach(data => {
            Object.keys(unitReferences.system[data].magnitudeMultiplier).forEach(e => magnitudeOptions.push(e))
        })
        if(magnitudeOptions.includes(magnitude)) return true
        return false
    },
    validateValue(value) {
        return /^\d+$/.test(value)
    },
}

export {calculator}