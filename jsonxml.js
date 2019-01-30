const alasql = require('alasql')
const climatempo = require('./climatempo')


var Temperaturas = []
Temperaturas.push(climatempo)

console.log(Temperaturas)
return
alasql(`SELECT * INTO XLSX("Temperaturas).xlsx", {headers: true}) FROM ?`, [climatempo])