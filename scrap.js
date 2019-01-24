const request = require('request')
const puppeteer = require ('puppeteer')
const config = require ('./config')
const schedule = require ('node-schedule')
const fs = require('fs')
 var a = {
     
 }
//var j = schedule.scheduleJob(' 25 * * * *', function(){
    
    
var cidade = process.argv
    cidade = cidade.splice(3)
    cidade = cidade.join().replace(/,/g,' ')
    
 
var siteEscolhido = process.argv[2]

const climatempo = async (config) => {
    
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const override = Object.assign(page.viewport(), {width: 1920, heigth:1024});
    await page.setViewport(override);
    await page.goto(config.url,{waitUntil: 'load',timeout:'60000'})
    
    let input = await page.$(config.regras.campoBusca)
    await page.focus(config.regras.campoBusca)
    await input.type(`${cidade}`,{delay:100})
   
    await page.waitFor(10000)
    
   
    
    
    await page.evaluate((config)=>document.querySelector(config.regras.elementoClick).click(),config)
    await page.waitFor(30000)
    
    
   
    if(siteEscolhido == "accu"){
        
        await page.evaluate((config)=>document.querySelector(config.regras.alargar).click(),config)
        
        await page.waitFor(30000)
       
        const elementTemp = await page.$(config.regras.elementTemp)
        const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
       
        const sensacaoElement= await page.$(config.regras.sensacaoElement)
        const senscao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
        
        const chuvaElement = await page.$(config.regras.chuvaElement)
        const chuva = await page.evaluate(chuvaElement => chuvaElement.textContent, chuvaElement)
        
        const ventoElement = await page.$(config.regras.ventoElement)
        const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)
       
        const atualizadoA = await page.$(config.regras.atualizadoA)
        const momentoAtualizacao = await page.evaluate(atualizadoA => atualizadoA.textContent, atualizadoA)
        
        console.log("Temperatura:" + temperatura)
        console.log(senscao)
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
        const ventoElement = await page.$(config.regras.pressaoElement)
        const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)
        
        console.log("Temperatura:" + temperatura)
        console.log("Chvua" + chuva)
        console.log("Vento" + vento)
        await browser.close()

    }else if(siteEscolhido == "tagora"){
        
        const elementTemp = await page.$(config.regras.elementTemp)
        const temperatura = await page.evaluate(elementTemp => elementTemp.textContent, elementTemp)
        
        const sensacaoElement= await page.$(config.regras.sensacaoElement)
        const senscao = await page.evaluate(sensacaoElement => sensacaoElement.textContent, sensacaoElement)
        
        const ventoElement = await page.$(config.regras.ventoElement)
        const vento = await page.evaluate(ventoElement => ventoElement.textContent, ventoElement)

        const pressaoElement = await page.$(config.regras.pressaoElement)
        const pressao = await page.evaluate(pressaoElement => pressaoElement.textContent, pressaoElement)

        const umidadeElement = await page.$(config.regras.umidadeElement)
        const umidade  = await page.evaluate(umidadeElement => umidadeElement.textContent, umidadeElement)



       
        
        console.log("Temperatura:" + temperatura)
        console.log("Chvua" + senscao)
        console.log("Vento" + vento)
        console.log("Pressao" + pressao)
        console.log("Umidade" + umidade)
        
        await browser.close()
    }else{
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
        momentoAtualizacao:momentoAtualizacao
        
    }
    var dados = JSON.stringify(dado)
    
    fs.appendFile('climatempo.json',dados,(err)=>{
        if (err) throw error
    })
    
    console.log("Temperatura:" + temperatura)
    console.log("Sensacao:" + sensacao)
    console.log("Umidade:" + umidade)
    console.log("Pressao:" + pressao)
    console.log("Vento:" + vento)
    console.log("chuva:" + chuva )
    //console.log("Direcao do vento" + ventoDirecao)
    console.log(momentoAtualizacao)
   

    await browser.close() 
    }
}
climatempo(config[siteEscolhido])
//})






