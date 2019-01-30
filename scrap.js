const express = require('express')
const app = express()
const port = 3000
const puppeteer = require ('puppeteer')
const config = require ('./config')
const schedule = require ('node-schedule')
const fs = require('fs')
const dados = require('./dados')


app.get('/',(req,res)=>res.send('hello word'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
return
var arrayDados = []
    
//var j = schedule.scheduleJob(' 52 * * * *', function(){
    
    
var cidade = process.argv
    cidade = cidade.splice(3)
    cidade = cidade.join().replace(/,/g,' ')
    
 
var siteEscolhido = process.argv[2]


const climatempo = async (config) => {
    
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const override = Object.assign(page.viewport(), {width: 1920, heigth:1024});
    await page.setViewport(override);
    await page.goto(config.cidades[cidade],{waitUntil: 'load',timeout:'60000'})
   
    
   
    if(siteEscolhido == "accu"){
        const elementTemp = await page.$(config.regras.elementTemp)
        const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
       
        const sensacaoElement= await page.$(config.regras.sensacaoElement)
        const sensacao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
        
        const chuvaElement = await page.$(config.regras.chuvaElement)
        const chuva = await page.evaluate(chuvaElement => chuvaElement.textContent, chuvaElement)
        
        const ventoElement = await page.$(config.regras.ventoElement)
        const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)
       
        const atualizadoA = await page.$(config.regras.atualizadoA)
        const momentoAtualizacao = await page.evaluate(atualizadoA => atualizadoA.textContent, atualizadoA)
        

        var dado = {
            temperatura:temperatura,
            sensacao:sensacao,
            chuva:chuva,
            vento:vento,
            momentoAtualizacao:momentoAtualizacao,
            Cidade:cidade,
            Site:"Accuweather"

            
        }
        arrayDados = JSON.parse(dado)
        arrayDados.push()
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
    }else if(siteEscolhido == "inmet"){
        const elementMinina = await page.$(config.regras.elementMinina)
        const minima = await page.evaluate(elementMinina => elementMinina.textContent, elementMinina)
       
        const elementMaxima = await page.$(config.regras.elementMaxima)
        const maxima = await page.evaluate(elementMaxima => elementMaxima.textContent, elementMaxima)
        const umidadeMinima = page.$(config.regras.umidadeMinima)
        const umidadeMin = await page.evaluate(umidadeMinima => umidadeMinima.textContent, umidadeMinima)
        const umidadeMaxima = await page.$(config.regras.umidadeMaxima)
        const umidadeMax = await page.evaluate(umidadeMaxima => umidadeMaxima.textContent, umidadeMaxima)
        const elementDirecao = await page.$(config.regras.elementDirecao)
        const direcao = await page.evaluate(elementDirecao => elementDirecao.textContent,elementDirecao)
        const intensidadeVento = await page.$(config.regras.elementVento)
        const intensidade = await page.evaluate(intensidadeVento => intensidadeVento.textContent, intensidadeVento)
        
        var dado = {
            Minima:minima,
            Maxima:maxima,
            UmidadeMin:umidadeMin,
            UmidadeMax:umidadeMax,
            DirecaoVento:direcao,
            IntensidadeVento:intensidade,
            Cidade:cidade,
            Site:"Inmet"
            
        }
        dados.push(dado)
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

    }else if(siteEscolhido == "yr"){
        const elementTemp = await page.$(config.regras.elementTemp)
        const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
        const chuvaElement = await page.$(config.regras.chuvaElement)
        const chuva = await page.evaluate(chuvaElement => chuvaElement.textContent, chuvaElement)
        /*const ventoElement = await page.$(config.regras.ventoElement)
        const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)
        const atualizadoA = await page.$(config.regras.atualizadoA)
        const momentoAtualizacao = await page.evaluate(atualizadoA => atualizadoA.textContent,atualizadoA)*/
        
        var dado = {
            temperatura:temperatura,
            chuva:chuva,
            Cidade:cidade,
            Site:"Yr"
            
            
        }
        dados.push(dado)
        var x = JSON.stringify(dado)
        fs.appendFile('climatempo.json',x,function(err){
            if(err) throw err
        })
        console.log("Temperatura:" + temperatura)
        console.log("Chvua" + chuva)
        await browser.close()

    }else if(siteEscolhido == "tagora"){
        
        const elementTemp = await page.$(config.regras.elementTemp)
        const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
        
        const sensacaoElement= await page.$(config.regras.sensacaoElement)
        const sensacao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
        
        const ventoElement = await page.$(config.regras.ventoElement)
        const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)

        const pressaoElement = await page.$(config.regras.pressaoElement)
        const pressao = await page.evaluate(pressaoElement => pressaoElement.textContent, pressaoElement)

        const umidadeElement = await page.$(config.regras.umidadeElement)
        const umidade  = await page.evaluate(umidadeElement => umidadeElement.textContent, umidadeElement)



        var dado = {
            temperatura:temperatura,
            sensacao:sensacao,
            vento:vento,
            umidade:umidade,
            pressao:pressao,    
            Cidade:cidade,
            Site:'Tempo Agora'
            
        }
        dados.push(dado)
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
    }else if(siteEscolhido == "climatempo"){
        const elementTemp = await page.$(config.regras.elementTemp)
        const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
        
        const sensacaoElement= await page.$(config.regras.sensacaoElement)
        const sensacao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
        
        const umidadeElement = await page.$(config.regras.umidadeElement)
        const umidade  = await page.evaluate(umidadeElement => umidadeElement.textContent, umidadeElement)
        
        const pressaoElement = await page.$(config.regras.pressaoElement)
        const pressao = await page.evaluate(pressaoElement => pressaoElement.textContent, pressaoElement)
        
        const chuvaElement = await page.$(config.regras.chuvaElement)
        const chuva = await page.evaluate(chuvaElement => chuvaElement.textContent, chuvaElement)
        
        const ventoElement = await page.$(config.regras.ventoElement)
        const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)
        
        const atualizadoA = await page.$(config.regras.atualizadoA)
        const momentoAtualizacao = await page.evaluate(atualizadoA => atualizadoA.textContent, atualizadoA)
        
        var dado = {
            temperatura:temperatura,
            sensacao:sensacao,
            umidade:umidade,
            pressao:pressao,
            chuva:chuva,
            vento:vento,
            momentoAtualizacao:momentoAtualizacao,
            Cidade:cidade,
            Site:"Climatempo"
            
        }
        dados.push(dado)
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
    }else if(siteEscolhido == "wunder"){
        const elementTemp = await page.$(config.regras.elementTemp)
        const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
        
        const sensacaoElement= await page.$(config.regras.sensacaoElement)
        const sensacao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
        
        const umidadeElement = await page.$(config.regras.umidadeElement)
        const umidade  = await page.evaluate(umidadeElement => umidadeElement.textContent, umidadeElement)
        
        
        const pressaoElement = await page.$(config.regras.pressaoElement)
        const pressao = await page.evaluate(pressaoElement => pressaoElement.textContent, pressaoElement)
        
        const chuvaElement = await page.$(config.regras.chuvaElement)
        const chuva = await page.evaluate(chuvaElement => chuvaElement.textContent, chuvaElement)
        
        const ventoElement = await page.$(config.regras.ventoElement)
        const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)
        
        const atualizadoA = await page.$(config.regras.atualizadoA)
        const momentoAtualizacao = await page.evaluate(atualizadoA => atualizadoA.textContent, atualizadoA)
        
        var dado = {
            temperatura:temperatura,
            sensacao:sensacao,
            umidade:umidade,
            pressao:pressao,
            chuva:chuva,
            vento:vento,
            momentoAtualizacao:momentoAtualizacao,
            Cidade:cidade,
            Site:"Wunderground"
            
        }
       dados.push(dado)
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
climatempo(config[siteEscolhido])
//})







