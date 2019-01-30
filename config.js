//metodo de uso:

var config = {
    
    climatempo:
    {  
        cidades:{
            rancharia:'https://www.climatempo.com.br/previsao-do-tempo/cidade/526/rancharia-sp',
            aquidauana:'https://www.climatempo.com.br/previsao-do-tempo/cidade/749/aquidauana-ms',
            carazinho:'https://www.climatempo.com.br/previsao-do-tempo/cidade/1384/carazinho-rs',
            batatais:'https://www.climatempo.com.br/previsao-do-tempo/cidade/1466/batatais-sp',
            urucui:'https://www.climatempo.com.br/previsao-do-tempo/cidade/1297/urucui-pi',
            maracaju:'https://www.climatempo.com.br/previsao-do-tempo/cidade/1132/maracaju-ms',
            abaiti:'https://www.climatempo.com.br/previsao-do-tempo/cidade/2646/ibaiti-pr',
            riobrilhante:'https://www.climatempo.com.br/previsao-do-tempo/cidade/2765/riobrilhante-ms',
            pocone:'https://www.climatempo.com.br/previsao-do-tempo/cidade/4774/pocone-mt',
            cavalcante:'https://www.climatempo.com.br/previsao-do-tempo/cidade/2150/cavalcante-go',
            maracai:'https://www.climatempo.com.br/previsao-do-tempo/cidade/2384/maracai-sp',
            pontapora:'https://www.climatempo.com.br/previsao-do-tempo/cidade/754/pontapora-ms',
            mossoro:'https://www.climatempo.com.br/previsao-do-tempo/cidade/333/mossoro-rn',
            naometoque:'https://www.climatempo.com.br/previsao-do-tempo/cidade/1403/nao-me-toque-rs',


        },
        regras:{
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
        cidades:{
            rancharia:'https://www.wunderground.com/weather/br/rancharia',
            capitanbado:'https://www.wunderground.com/weather/py/capit%C3%A1n-bado',
            carazinho:'https://www.wunderground.com/weather/br/carazinho',
            batatais:'https://www.wunderground.com/weather/br/batatais',
            urucui:'https://www.wunderground.com/weather/br/uru%C3%A7u%C3%AD',
            maracaju:'https://www.wunderground.com/weather/br/maracaju',
            ibaiti:'https://www.wunderground.com/weather/br/ibaiti',
            riobrilhante:'https://www.wunderground.com/weather/br/rio-brilhante',
            pocone:'https://www.wunderground.com/weather/br/pocon%C3%A9',
            cavalcante:'https://www.wunderground.com/weather/br/cavalcante',
            maracai:'https://www.wunderground.com/weather/br/maraca%C3%AD',
            pontapora:'https://www.wunderground.com/weather/br/ponta-por%C3%A3',
            mossoro:'https://www.wunderground.com/weather/br/mossor%C3%B3',
            naometoque:'https://www.wunderground.com/weather/br/n%C3%A3o-me-toque'
            
        },
        regras:{
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
        cidades:{
            rancharia:'https://www.yr.no/sted/Brasil/S%C3%A3o_Paulo/Rancharia/',
            mcmurdo:'https://www.yr.no/sted/Antarktika/Annet/McMurdo_Station/',
            capitanbado:'https://www.yr.no/sted/Paraguay/Amambay/Capit%C3%A1n_Bado/',
            carazinho:'https://www.yr.no/sted/Brasil/Rio_Grande_do_Sul/Carazinho/',
            batatais:'https://www.yr.no/sted/Brasil/S%C3%A3o_Paulo/Batatais/',
            urucui:'https://www.yr.no/sted/Brasil/Piau%C3%AD/Uru%C3%A7u%C3%AD/',
            maracaju:'https://www.yr.no/sted/Brasil/Mato_Grosso_do_Sul/Maracaju/',
            ibaiti:'https://www.yr.no/sted/Brasil/Paran%C3%A1/Ibaiti/',
            riobrilhante:'https://www.yr.no/sted/Brasil/Mato_Grosso_do_Sul/Rio_Brilhante/',
            pocone:'https://www.yr.no/sted/Brasil/Mato_Grosso/Pocon%C3%A9/',
            cavalcante:'https://www.yr.no/sted/Brasil/Goi%C3%A1s/Cavalcante/',
            maracai:'https://www.yr.no/sted/Brasil/S%C3%A3o_Paulo/Maraca%C3%AD/',
            pontapora:'https://www.yr.no/sted/Brasil/Mato_Grosso_do_Sul/Ponta_Por%C3%A3/',
            mossoro:'https://www.yr.no/sted/Brasil/Rio_Grande_do_Norte/Mossor%C3%B3/',
            naometoque:'https://www.yr.no/sted/Brasil/Rio_Grande_do_Sul/N%C3%A3o_Me_Toque/'



            

        },
        regras:{
            elementTemp:"#ctl00_ctl00_contentBody > div.yr-content-body.yr-top-margin.yr-content-stickynav.clearfix > div.yr-content-stickynav-three-fifths.left.lp_cleft > table:nth-child(1) > tbody > tr > td.temperature",
            chuvaElement:"#ctl00_ctl00_contentBody > div.yr-content-body.yr-top-margin.yr-content-stickynav.clearfix > div.yr-content-stickynav-three-fifths.left.lp_cleft > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(4)",
        }
    },
    accu:{
       cidades:{
           rancharia:'https://www.accuweather.com/pt/br/rancharia/41722/daily-weather-forecast/41722',
           mcmurdo:'https://www.accuweather.com/pt/aq/mcmurdo-station/2273718/daily-weather-forecast/2273718',
           carazinho:'https://www.accuweather.com/pt/br/carazinho/35719/daily-weather-forecast/35719',
           batatais:'https://www.accuweather.com/pt/br/batatais/41597/daily-weather-forecast/41597',
           urucui:'https://www.accuweather.com/pt/br/urucui/40470/daily-weather-forecast/40470',
           maracaju:'https://www.accuweather.com/pt/br/maracaju/38811/daily-weather-forecast/38811',
           ibaiti:'https://www.accuweather.com/pt/br/ibaiti/40103/daily-weather-forecast/40103',
           riobrilhante:'https://www.accuweather.com/pt/br/rio-brilhante/38818/daily-weather-forecast/38818',
           pocone:'https://www.accuweather.com/pt/br/pocone/38668/daily-weather-forecast/38668',
           cavalcante:'https://www.accuweather.com/pt/br/cavalcante/43523/daily-weather-forecast/43523',
           maracai:'https://www.accuweather.com/pt/br/maracai/41617/daily-weather-forecast/41617?day=6',
           pontapora:'https://www.accuweather.com/pt/br/ponta-pora/33740/daily-weather-forecast/33740',
           mossoro:'https://www.accuweather.com/pt/br/mossoro/35659/daily-weather-forecast/35659',
           naometoque:'https://www.accuweather.com/pt/br/nao-me-toque/40913/daily-weather-forecast/40913'

        },
        regras:{
            
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
    },
    tagora:{
       cidades:{
           rancharia:'https://www.tempoagora.com.br/previsao-do-tempo/SP/Rancharia',
           carazinho:'https://www.tempoagora.com.br/previsao-do-tempo/RS/Carazinho',
           batatais:'https://www.tempoagora.com.br/previsao-do-tempo/SP/Batatais',
           urucui:'https://www.tempoagora.com.br/previsao-do-tempo/PI/Urucui',
           maracaju:'https://www.tempoagora.com.br/previsao-do-tempo/MS/Maracaju',
           ibaiti:'https://www.tempoagora.com.br/previsao-do-tempo/PR/Ibaiti',
           riobrilhante:'https://www.tempoagora.com.br/previsao-do-tempo/MS/RioBrilhante',
           pocone:'https://www.tempoagora.com.br/previsao-do-tempo/MT/Pocone',
           cavalcante:'https://www.tempoagora.com.br/previsao-do-tempo/GO/Cavalcante',
           maracai:'https://www.tempoagora.com.br/previsao-do-tempo/SP/Maracai',
           pontapora:'https://www.tempoagora.com.br/previsao-do-tempo/MS/PontaPora',
           mossoro:'https://www.tempoagora.com.br/previsao-do-tempo/RN/Mossoro',
           naometoque:'https://www.tempoagora.com.br/previsao-do-tempo/RS/NaoMeToque'
       },
        regras:{
            
            elementTemp:"#__layout > div > div.custom-header > header > div.header-weather-info > div.header-weather-info__items > a > div.col-md-4.col-sm-4.col-xs-7 > div > span.weather-temperature--temperature",
            sensacaoElement:"#__layout > div > div.custom-header > header > div.header-weather-info > div.header-weather-info__items > a > div.col-md-4.col-sm-4.text-right.hidden-sm.hidden-xs > div > ul:nth-child(2) > li:nth-child(1)",
            ventoElement:"#__layout > div > div.custom-header > header > div.header-weather-info > div.header-weather-info__items > a > div.col-md-4.col-sm-4.text-right.hidden-sm.hidden-xs > div > ul:nth-child(2) > li:nth-child(2)",
            pressaoElement:"#__layout > div > div.custom-header > header > div.header-weather-info > div.header-weather-info__items > a > div.col-md-4.col-sm-4.text-right.hidden-sm.hidden-xs > div > ul:nth-child(2) > li:nth-child(3)",
            umidadeElement:"#__layout > div > div.custom-header > header > div.header-weather-info > div.header-weather-info__items > a > div.col-md-4.col-sm-4.text-right.hidden-sm.hidden-xs > div > ul:nth-child(2) > li:nth-child(4)"

        }
    }
}
module.exports = config