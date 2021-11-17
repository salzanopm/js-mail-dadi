// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

for (;;) {
    alert ("Prema 'ok' per lanciare il suo dado")
    // generazione numero random per il giocatore
    const userNumber = Math.floor(Math.random() * 6) + 1;
    console.log('Per lei è uscito il numero '+userNumber)           // stampo numero del giocatore

    // generazione numero random per il computer
    const cpuNumber = Math.floor(Math.random() * 6) + 1;
    console.log('Per il computer è uscito il numero '+cpuNumber)    // stampo numero del cpu

    // inizio condizione

    if (userNumber < cpuNumber) {                                   // se numero giocatore è più basso del numero del cpu
        
        alert ('Per lei è uscito il numero '+userNumber
        +' per il computer invece è uscito il numero '+cpuNumber)                                                       
        alert('Mi dispiace! hai perso! Vuole rigiocare?');                           // messaggio allerta sconfitta
                                                            
    } else if (userNumber == cpuNumber) {                           // se numero giocatore è uguale al numero del cpu
        
        alert ('Per lei è uscito il numero '+userNumber
        +' e anche al computer è uscito il numero '+cpuNumber)
        alert('Pareggio!! Vuole rigiocare?');                                        // messaggio allerta pareggio

    } else {                                                        // altrimenti
        
        alert ('Per lei è uscito il numero '+userNumber
        +' per il computer invece è uscito il numero '+cpuNumber)
        alert('Bravo! hai vinto!! Vuole rigiocare?');                                  // messaggio allerta vittoria

    }

}