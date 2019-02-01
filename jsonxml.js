const alasql = require('alasql')
const climatempo = require('./climatempo')


alasql(`SELECT * INTO XLSX("Temperaturas).xlsx", {headers: true}) FROM ?`, [climatempo])