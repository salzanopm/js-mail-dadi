// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// generazione numero random per il giocatore
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log('Per lei è uscito il numero '+userNumber)           // stampo numero del giocatore

// generazione numero random per il computer
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log('Per il computer è uscito il numero '+cpuNumber)    // stampo numero del cpu

// inizio condizione
if (userNumber < cpuNumber) {                                   // se numero giocatore è più basso del numero del cpu
                                                           
    alert('Mi dispiace! hai perso!');                           // messaggio allerta sconfitta
                                                         
} else if (userNumber == cpuNumber) {                           // se numero giocatore è uguale al numero del cpu

    alert('Pareggio!!');                                        // messaggio allerta pareggio

} else {                                                        // altrimenti

    alert('Bravo! hai vinto');                                  // messaggio allerta vittoria
}