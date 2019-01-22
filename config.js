//metodo de uso:
//1-Escolha o site- climatempo,wunder,yr,accu
//2-Escolha a cidade
//3- Digite no console da seguinte maneira: node scrap.js SITE_ESCOLHIDO CIDADE_ESCOLHIDA
var config = {
    
    climatempo:
    {  
        url:'https://www.climatempo.com.br/',
        regras:{
            campoBusca:"#ipt-search-desk",
            elementoClick:"#search-list-autocomplete > li:nth-child(2) > a",
            elementTemp:"#momento-temperatura",
            sensacaoElement:"#momento-sensacao",
            umidadeElement:"#momento-humidade",
            pressaoElement:"#momento-pressao",
            ventoElement:"#momento-vento",
            direcaoVent:"",
            chuvaElement:"#mega-destaque > div.master.bg-white.top5 > div > div.small-12.large-8.left.sticky2Equalizer > div:nth-child(5) > div:nth-child(1) > p",
            atualizadoA:"#momento-atualizacao"
        }
    },
    wunder:
    {
        url:'https://www.wunderground.com/',
        regras:{
            campoBusca:"#wuSearch",
            elementoClick:"#wuForm > search-autocomplete > ul > li:nth-child(3) > a > span.needsclick.needsfocus.city-name",
            elementTemp:"#inner-content > div.city-body > div.row.current-forecast > div > div:nth-child(1) > div.small-12.medium-6.columns.city-conditions-column > div > city-current-conditions > div > div.conditions-circle-wrap.small-12.medium-7.columns.text-center > div > div > div.current-temp > display-unit > span > span.wu-value.wu-value-to",
            sensacaoElement:"#inner-content > div.city-body > div.row.current-forecast > div > div:nth-child(1) > div.small-12.medium-6.columns.city-conditions-column > div > city-current-conditions > div > div.conditions-circle-wrap.small-12.medium-7.columns.text-center > div > div > div.feels-like > span",
            umidadeElement:"#inner-content > div.city-body > div.row.detail-mods > div > div:nth-child(1) > div:nth-child(1) > div > city-additional-conditions > div > div.content > div:nth-child(5) > div.small-8.columns > span.wx-value",
            pressaoElement:"#inner-content > div.city-body > div.row.detail-mods > div > div:nth-child(1) > div:nth-child(1) > div > city-additional-conditions > div > div.content > div:nth-child(1) > div.small-8.columns > span.wx-value",
            ventoElement:"#inner-content > div.city-body > div.row.current-forecast > div > div:nth-child(1) > div.small-12.medium-6.columns.city-conditions-column > div > city-current-conditions > div > div.conditions-extra.small-9.medium-5.columns.small-centered.medium-uncentered > div > div.condition-wind.small-6.medium-12.columns > wind-gauge > div > div.wind-speed > strong",
            direcaoVent:"#inner-content > div.city-body > div.row.current-forecast > div > div:nth-child(1) > div.small-12.medium-6.columns.city-conditions-column > div > city-current-conditions > div > div.conditions-extra.small-9.medium-5.columns.small-centered.medium-uncentered > div > div.condition-wind.small-6.medium-12.columns > p:nth-child(2) > strong",
            chuvaElement:"#inner-content > div.city-body > div.row.detail-mods > div > div:nth-child(1) > div:nth-child(1) > div > city-additional-conditions > div > div.content > div:nth-child(6) > div.small-8.columns > span.wx-value",
            atualizadoA:"#inner-content > div.city-body > div.row.current-forecast > div > div:nth-child(1) > div.small-12.medium-6.columns.city-conditions-column > div > city-current-conditions > div > div:nth-child(1) > p > span:nth-child(1) > strong"
        
        
        }

    },
    yr:{
        url:'https://www.yr.no',
        regras:{
            campoBusca:"#sted",
            elementoClick:"#yr-autosuggest > table > tbody > tr:nth-child(1) > td:nth-child(1) > a > strong",
            elementTemp:"#ctl00_ctl00_contentBody > div.yr-content-body.yr-top-margin.yr-content-stickynav.clearfix > div.yr-content-stickynav-three-fifths.left.lp_cleft > table:nth-child(1) > tbody > tr:nth-child(1) > td.temperature.plus",
            chuvaElement:"#ctl00_ctl00_contentBody > div.yr-content-body.yr-top-margin.yr-content-stickynav.clearfix > div.yr-content-stickynav-three-fifths.left.lp_cleft > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(4)",
            ventoElement:"#ctl00_ctl00_contentBody > div.yr-content-body.yr-top-margin.yr-content-stickynav.clearfix > div.yr-content-stickynav-three-fifths.left.lp_cleft > table:nth-child(1) > tbody > tr:nth-child(1) > td.txt-left > font > font",
            atualizadoA:"#ctl00_ctl00_contentBody > div.yr-content-body.yr-top-margin.yr-content-stickynav.clearfix > div.yr-content-stickynav-three-fifths.left.lp_cleft > table:nth-child(1) > caption > font > font"
        }
    },
    accu:{
        url:'https://www.accuweather.com/pt/br/brazil-weather',
        
        regras:{
            campoBusca:"#s",
            elementoClick:"#findcity > button",
            alargar:'#wrap > div:nth-child(1) > div.sub-header-wrap > div.inner-subnav > div > div > div > div > ul > li:nth-child(3) > a > span',
            elementTemp:"#current-city-tab > a > span.local-temp",
            sensacaoElement:"#detail-day-night > div.day > div > div.info-wrapper > div > div.temp > span.realfeel",
            ventoElement:"#detail-day-night > div.day > div > div.content > div > div > ul > li:nth-child(2) > strong",
            chuvaElement:"#detail-day-night > div.day > div > div.content > ul > li:nth-child(3) > strong",
            atualizadoA:"#detail-day-night > div.day > div > div.info-wrapper > h4"


        }
    },
    inmet:{
        url:'http://www.inmet.gov.br/portal/index.php?r=home2/index',
        regras:{
            campoBusca:"#search-heather",
            elementoClick:"#ui-id-12",
            elementMinina:"#tempo_temperatura_min",
            elementMaxima:"#tempo_temperatura_max",
            umidadeMinima:"#umidade_min",
            umidadeMaxima:"#umidade_max",
            elementDirecao:"#umidade_max",
            elementVento:"#home_tempo_quadro_temp2_vento_txt > p",
            
            
        }
    }
}
module.exports = config