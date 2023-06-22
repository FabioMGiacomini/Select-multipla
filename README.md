# Select-multipla

<h3> Select multipla </h3> 
<h4> Da file json
 recupero i dati,  
 nome regione e principali città
 </h4>
 
  <h4>Quando scelgo nella prima select il nome della regione, <br> nella seconda select vengono inserite in automatico le città </h4>

  ![Schermata 2023-06-20 alle 11 49 21](https://github.com/FabioMGiacomini/Select-multipla/assets/8852329/5b7d57d4-442d-4c3a-97cb-6cb981ca90c9)

  ![Schermata 2023-06-20 alle 11 49 38](https://github.com/FabioMGiacomini/Select-multipla/assets/8852329/c0203887-bd80-40ba-be42-3f4317dcdbe8)

  ![Schermata 2023-06-20 alle 11 49 52](https://github.com/FabioMGiacomini/Select-multipla/assets/8852329/c8706ba3-c612-41ce-aa93-6458c90bc14e)

  ![Schermata 2023-06-20 alle 11 50 01](https://github.com/FabioMGiacomini/Select-multipla/assets/8852329/54641cb1-bb87-48e7-9920-f3834ab83be6)

  
 <h4 class="mt-10">Dettagli</h4>
        <p>Le select devono mantenere gli ID "regione" e "provincia" e sono costruite come segue. Le classi servono a creare un bordo arrotondato e ad aggiungere spazio fra testo e bordo ma sono modificabili</p>
        <p>Le &lt;option&gt; vengono costruite dinamicamente. Quando seleziono una regione in automatico lo script crea 
          tante &lt;option&gt; quanti capoluoghi ci sono nella regione selezionata leggendo i dati dal file json.
          Se dopo aver fatto la scelta, nella select regione opto per la voce "seleziona regione" in automatico 
          nelle province vengono azzerati i dati presenti.
        </p>
        <em>
         &lt;select name="regione" id="regione" class="border w-auto p-2 rounded"&gt; <br>
          &lt;option value=""&gt;seleziona regione&lt;/option&gt; <br>
          &lt;/select&gt; 
        <br><br>
        &lt;select name="provincia" id="provincia" class="border w-auto p-2 rounded mt-5"&gt; <br>
        &lt;option value=""&gt;seleziona provincia&lt;/option&gt; <br>
        &lt;/select&gt; 
        </em>

<br><br>


#json, #fetch, #select
 
 email: info@viarete.it
