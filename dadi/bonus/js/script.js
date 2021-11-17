// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// inizio partita
alert ("Prema 'ok' per giocare")

// generazione numero random per il giocatore
let userNumber = Math.floor(Math.random() * 6) + 1;
console.log('Per lei è uscito il numero '+userNumber);

// generazione numero random per il computer
let cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log('Per il computer è uscito il numero '+cpuNumber)           // stampo numero del giocatore

    
// inizio condizione

if(userNumber == 1) {
    const one = document.querySelector('.dot-1');
    one.classList.add('one')
} else if (userNumber == 2) {
    const one = document.querySelector('.dot-1');
    one.classList.add('two')
} else if (userNumber == 3) {
    const one = document.querySelector('.dot-1');
    one.classList.add('three')
} else if (userNumber == 4) {
    const one = document.querySelector('.dot-1');
    one.classList.add('four')
} else if (userNumber == 5) {
    const one = document.querySelector('.dot-1');
    one.classList.add('five')
} else if (userNumber == 6) {
    const one = document.querySelector('.dot-1');
    one.classList.add('six')
}

    // stampo numero del cpu
if(cpuNumber == 1) {
    const one = document.querySelector('.dot-2');
    one.classList.add('one')
} else if (cpuNumber == 2) {
    const one = document.querySelector('.dot-2');
    one.classList.add('two')
} else if (cpuNumber == 3) {
    const one = document.querySelector('.dot-2');
    one.classList.add('three')
} else if (cpuNumber == 4) {
    const one = document.querySelector('.dot-2');
    one.classList.add('four')
} else if (cpuNumber == 5) {
    const one = document.querySelector('.dot-2');
    one.classList.add('five')
} else if (cpuNumber == 6) {
    const one = document.querySelector('.dot-2');
    one.classList.add('six')
}


// dichiarazione variabili area giocatori
const containerCpu = document.querySelector('.cpu');
const containerPlayer = document.querySelector('.player');

// inizio prima condizione
if (userNumber < cpuNumber) {                                   // se numero giocatore è più basso del numero del cpu
                                                       
    containerCpu.classList.add('win') 
    containerPlayer.classList.add('lost')
                                            
} else if (userNumber == cpuNumber) {                           // se numero giocatore è uguale al numero del cpu
  
    containerCpu.classList.add('draw')
    containerPlayer.classList.add('draw')

} else {                                                        // altrimenti

    containerCpu.classList.add('lost')
    containerPlayer.classList.add('win')

}


