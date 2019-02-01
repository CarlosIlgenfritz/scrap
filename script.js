const config = require('./config')
const scrap = require('./scrap')
const schedule = require ('node-schedule')

var cidade = [
"carazinho",
"rancharia",
"batatais",
"urucui",
"maracaju",
"ibaiti",
"riobrilhante",
"pocone",
"cavalcante",
"maracai",
"pontapora",
"mossoro",
"naometoque"
]


var siteEscolhido = ["climatempo","accu","wunder","yr","tagora"]
//accu,yr,tagora,wunder,climatempo
//var j = schedule.scheduleJob(' 19 * * * *', function(){

    /*siteEscolhido.map((i)=>{
        scrap(config[i],cidade)
    })*/
//})