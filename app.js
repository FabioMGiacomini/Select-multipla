/**
* Author: Fabio Giacomini
* Description: Select multipla con dati presi da file json
* email: info@viarete.it
* Tags: json, fetch, select
*/

/**
 * select dinamica 
 * 
 * recupero i dati delle regioni  
 * nel file json ci sono nome e capoluogo delle regioni 
 * */ 

fetch("regioni.json")
.then(response => response.json())
.then(data => creaSelect(data))

const regione = document.querySelector('#regione')
const province = document.querySelector('#provincia')

function creaSelect(data) { 

    for(let elem of data.regioni) {
        // inserisco i nomi regione nella prima select 
        const nomeRegione = document.createElement('option')
        nomeRegione.setAttribute('value', elem.nome)
        nomeRegione.textContent = elem.nome
        regione.appendChild (nomeRegione)
    }
    
    regione.addEventListener('change', function(){
        // scelgo la regione e visualizzo in automatico le città nella seconda select
        const regioneScelta = regione.value
        /** 
         * salvo l'opzione con il testo "seleziona provincia"
         * poi cancello tutte le opzioni se presenti da una
         * scelta già effettuata poi reinserisco la prima voce di selezione
        */
        const seleziona = province.firstElementChild
        while(province.hasChildNodes()) {
             province.removeChild(province.firstChild)
           }
        province.appendChild(seleziona)        
        
        for (let key of data.regioni){
            if (key.nome === regioneScelta) {
                /**
                 * creo tante opzioni quante sono le province
                 * presenti nella regione scelta  
                 */
                for(listaProvince of key.capoluogo){
                   // console.log(listaProvince);
                    const elencoProvince = document.createElement('option')
                    elencoProvince.setAttribute('value', listaProvince)
                    elencoProvince.textContent = listaProvince
                     
                    // inserisco i risultati della scelta nella seconda select 
                    province.appendChild(elencoProvince)
                }
            }
        }

    })
}
