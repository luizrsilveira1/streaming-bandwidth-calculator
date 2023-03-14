// const {calculator} = require('./modules/calculator')
// const {help} = require('./modules/help')
import {calculator} from './modules/calculator.js'
import {help} from './modules/help.js'


calculator.help = help

console.log(calculator.help())
