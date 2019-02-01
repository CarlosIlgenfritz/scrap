const express = require('express')
const app = express()
const puppeteer = require ('puppeteer')
const config = require ('./config')
const schedule = require ('node-schedule')
const fs = require('fs')


var siteEscolhido = ["climatempo","accu","wunder","yr","tagora"]

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
/*app.get('/',(req,res)=>res.send('hello word'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))*/
let port = process.env.PORT
if (port == null || port == "") {
  port = 3000
}
app.listen(port)

var j = schedule.scheduleJob(' 10 * * * *', function(){
async function climatempo (config,cidade,siteEscolhido) {
    //siteEscolhido = Array (siteEscolhido)
    
 for(var j=0; j<siteEscolhido.length; j++){
     console.log("selecionando site", siteEscolhido[j])   
    for(var i=0; i<cidade.length; i++){
        var data = new Date().toLocaleString('pt-BR')

       console.log("rodadando a cidade", cidade[i])
        
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        const override = Object.assign(page.viewport(), {width: 1920, heigth:1024});
        await page.setViewport(override)
        
        await page.goto(config[siteEscolhido[j]].cidades[cidade[i]],{waitUntil: 'load',timeout:0})
       
        if(siteEscolhido[j] == "accu"){
            const elementTemp = await page.$(config[siteEscolhido[j]].regras.elementTemp)
            const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
        
            const sensacaoElement= await page.$(config[siteEscolhido[j]].regras.sensacaoElement)
            const sensacao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
            
            const chuvaElement = await page.$(config[siteEscolhido[j]].regras.chuvaElement)
            const chuva = await page.evaluate(chuvaElement => chuvaElement.textContent, chuvaElement)
            
            const ventoElement = await page.$(config[siteEscolhido[j]].regras.ventoElement)
            const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)
        
            const atualizadoA = await page.$(config[siteEscolhido[j]].regras.atualizadoA)
            const momentoAtualizacao = await page.evaluate(atualizadoA => atualizadoA.textContent, atualizadoA)
            

            var dado = {
                temperatura:temperatura,
                sensacao:sensacao,
                chuva:chuva,
                vento:vento,
                momentoAtualizacao:momentoAtualizacao,
                Cidade:cidade[i],
                Site:"Accuweather"

                
            }
            var x = JSON.stringify(dado)
            fs.appendFile('climatempo.json',x,function(err){
                if(err) throw err
            })
            

            console.log("Temperatura:" + temperatura)
            console.log(sensacao)
            console.log("Vento:" + vento)
            console.log("chuva:" + chuva)
            console.log(momentoAtualizacao)
            
            await browser.close() 
        }else if(siteEscolhido[j] == "inmet"){
            const elementMinina = await page.$(config[siteEscolhido[j]].regras.elementMinina)
            const minima = await page.evaluate(elementMinina => elementMinina.textContent, elementMinina)
        
            const elementMaxima = await page.$(config[siteEscolhido[j]].regras.elementMaxima)
            const maxima = await page.evaluate(elementMaxima => elementMaxima.textContent, elementMaxima)
            const umidadeMinima = page.$(config[siteEscolhido[j]].regras.umidadeMinima)
            const umidadeMin = await page.evaluate(umidadeMinima => umidadeMinima.textContent, umidadeMinima)
            const umidadeMaxima = await page.$(config[siteEscolhido[j]].regras.umidadeMaxima)
            const umidadeMax = await page.evaluate(umidadeMaxima => umidadeMaxima.textContent, umidadeMaxima)
            const elementDirecao = await page.$(config[siteEscolhido[j]].regras.elementDirecao)
            const direcao = await page.evaluate(elementDirecao => elementDirecao.textContent,elementDirecao)
            const intensidadeVento = await page.$(config[siteEscolhido[j]].regras.elementVento)
            const intensidade = await page.evaluate(intensidadeVento => intensidadeVento.textContent, intensidadeVento)
            
            var dado = {
                Minima:minima,
                Maxima:maxima,
                UmidadeMin:umidadeMin,
                UmidadeMax:umidadeMax,
                DirecaoVento:direcao,
                IntensidadeVento:intensidade,
                Cidade:cidade[i],
                Data:data,
                Site:"Inmet"
                
            }
            var x = JSON.stringify(dado)
            fs.appendFile('climatempo.json',x,function(err){
                if(err) throw err
            })
            console.log(minima)
            console.log(maxima)
            console.log(umidadeMin)
            console.log(umidadeMax)
            console.log(direcao)
            console.log(intensidade)
            await browser.close() 

        }else if(siteEscolhido[j] == "yr"){
            const elementTemp = await page.$(config[siteEscolhido[j]].regras.elementTemp)
            const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
            const chuvaElement = await page.$(config[siteEscolhido[j]].regras.chuvaElement)
            const chuva = await page.evaluate(chuvaElement => chuvaElement.textContent, chuvaElement)
            
            var dado = {
                temperatura:temperatura,
                chuva:chuva,
                Cidade:cidade[i],
                Data:data,
                Site:"Yr"
                
                
            }
            var x = JSON.stringify(dado)
            fs.appendFile('climatempo.json',x,function(err){
                if(err) throw err
            })
            console.log("Temperatura:" + temperatura)
            console.log("Chvua" + chuva)
            await browser.close()

        }else if(siteEscolhido[j] == "tagora"){
            
            const elementTemp = await page.$(config[siteEscolhido[j]].regras.elementTemp)
            const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
            
            const sensacaoElement= await page.$(config[siteEscolhido[j]].regras.sensacaoElement)
            const sensacao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
            
            const ventoElement = await page.$(config[siteEscolhido[j]].regras.ventoElement)
            const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)

            const pressaoElement = await page.$(config[siteEscolhido[j]].regras.pressaoElement)
            const pressao = await page.evaluate(pressaoElement => pressaoElement.textContent, pressaoElement)

            const umidadeElement = await page.$(config[siteEscolhido[j]].regras.umidadeElement)
            const umidade  = await page.evaluate(umidadeElement => umidadeElement.textContent, umidadeElement)



            var dado = {
                temperatura:temperatura,
                sensacao:sensacao,
                vento:vento,
                umidade:umidade,
                pressao:pressao,    
                Cidade:cidade[i],
                Data:data,
                Site:'Tempo Agora'
                
            }
            var x = JSON.stringify(dado)
            fs.appendFile('climatempo.json',x,function(err){
                if(err) throw err
            })
            
            console.log("Temperatura:" + temperatura)
            console.log("Chvua" + sensacao)
            console.log("Vento" + vento)
            console.log("Pressao" + pressao)
            console.log("Umidade" + umidade)
            
            await browser.close()
        }else if(siteEscolhido[j] == "climatempo"){
            const elementTemp = await page.$(config[siteEscolhido[j]].regras.elementTemp)
            const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
            
            
            const sensacaoElement= await page.$(config[siteEscolhido[j]].regras.sensacaoElement)
            const sensacao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
            
            const umidadeElement = await page.$(config[siteEscolhido[j]].regras.umidadeElement)
            const umidade  = await page.evaluate(umidadeElement => umidadeElement.textContent, umidadeElement)
            
            const pressaoElement = await page.$(config[siteEscolhido[j]].regras.pressaoElement)
            const pressao = await page.evaluate(pressaoElement => pressaoElement.textContent, pressaoElement)
            
            const chuvaElement = await page.$(config[siteEscolhido[j]].regras.chuvaElement)
            const chuva = await page.evaluate(chuvaElement => chuvaElement.textContent, chuvaElement)
            
            const ventoElement = await page.$(config[siteEscolhido[j]].regras.ventoElement)
            const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)
            
            const atualizadoA = await page.$(config[siteEscolhido[j]].regras.atualizadoA)
            const momentoAtualizacao = await page.evaluate(atualizadoA => atualizadoA.textContent, atualizadoA)
            
            var dado = {
                temperatura:temperatura,
                sensacao:sensacao,
                umidade:umidade,
                pressao:pressao,
                chuva:chuva,
                vento:vento,
                momentoAtualizacao:momentoAtualizacao,
                Cidade:cidade[i],
                Site:"Climatempo"
                
            }
            var x = JSON.stringify(dado)
            fs.appendFile('climatempo.json',x,function(err){
                if(err) throw err
            })
            
            console.log("Temperatura:" + temperatura)
            console.log("Sensacao:" + sensacao)
            console.log("Umidade:" + umidade)
            console.log("Pressao:" + pressao)
            console.log("Vento:" + vento)
            console.log("chuva:" + chuva )
            console.log(momentoAtualizacao)
        
        
            await browser.close() 
        }else if(siteEscolhido[j] == "wunder"){
            const elementTemp = await page.$(config[siteEscolhido[j]].regras.elementTemp)
            const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
            
            const sensacaoElement= await page.$(config[siteEscolhido[j]].regras.sensacaoElement)
            const sensacao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
            
            const umidadeElement = await page.$(config[siteEscolhido[j]].regras.umidadeElement)
            const umidade  = await page.evaluate(umidadeElement => umidadeElement.textContent, umidadeElement)
            
            
            const pressaoElement = await page.$(config[siteEscolhido[j]].regras.pressaoElement)
            const pressao = await page.evaluate(pressaoElement => pressaoElement.textContent, pressaoElement)
            
            const chuvaElement = await page.$(config[siteEscolhido[j]].regras.chuvaElement)
            const chuva = await page.evaluate(chuvaElement => chuvaElement.textContent, chuvaElement)
            
            const ventoElement = await page.$(config[siteEscolhido[j]].regras.ventoElement)
            const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)
            
            const atualizadoA = await page.$(config[siteEscolhido[j]].regras.atualizadoA)
            const momentoAtualizacao = await page.evaluate(atualizadoA => atualizadoA.textContent, atualizadoA)
            
            var dado = {
                temperatura:temperatura,
                sensacao:sensacao,
                umidade:umidade,
                pressao:pressao,
                chuva:chuva,
                vento:vento,
                momentoAtualizacao:momentoAtualizacao,
                Cidade:cidade[i],

                Site:"Wunderground"
                
            }
        var x = JSON.stringify(dado)
        fs.appendFile('climatempo.json',x,function(err){
            if(err) throw err
        })

            console.log("Temperatura:" + temperatura)
            console.log("Sensacao:" + sensacao)
            console.log("Umidade:" + umidade)
            console.log("Pressao:" + pressao)
            console.log("Vento:" + vento)
            console.log("chuva:" + chuva )
            console.log(momentoAtualizacao)
        
        
            await browser.close() 
        }
        }
    }
}
climatempo(config,cidade,siteEscolhido)
})





