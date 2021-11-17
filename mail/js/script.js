// CONSEGNA
// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// dichiarazione variabile array della lista delle email nel "database"
const emailA = ['mario@gmail.com', 'mariano@gmail.com', 'marina@gmail.com', 'marino@gmail.com', 'maria@gmail.com', 'marianna@gmail.com', 'monica@gmail.com', 'manuela@gmail.com', 'marta@gmail.com', 'mia@gmail.com', 'matteo@gmail.com', 'giacomo@gmail.com', 'giuseppe@gmail.com', 'genoveffa@gmail.com', 'giorgio@gmail.com', 'giorgia@gmail.com', 'giovanni@gmail.com', 'giovanna@gmail.com', 'girolamo@gmail.com', 'gianbattista@gmail.com'];

// Richiesta email all'utente
const userEmail = prompt('Ciao dimmi la tua email');

// Dichiarazione variabile emailFound con stato a riposo "false"
let emailFound = false;

// Inizio ciclo per ogni email
for ( let i = 0; i < emailA.length; i++ ) {     
    const thisEmail = emailA[i];                //dichiarazione variabile "thisEmail" presa dall'array dentro al ciclo ("emailA[i])
    
    if( thisEmail === userEmail ) {             // confronto email utente "userEmail" con variabile "thisEmail"   
        emailFound = true;                      // se questa condizione è vera allora la variabile che userò come verificatore di stato risulterà "true"
    }
}

// messaggi di allerta finale
if(emailFound) {
    alert('La tua email è stata riconosciuta');                 //messaggio email trovata
} else {
    alert('La tua email non è presente nel nostro database');   //messaggio email non trovata
}