// Selfwork Oggetti 3
// Crea un oggetto bowling con le seguenti caratteristiche:

//     una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
//     diverse funzionalità tra cui:
//         * creare 10 punteggi casuali per ogni giocatore:
//             Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling,
//             e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
//             Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
//         * trovare il punteggio finale per ogni giocatore:
//             Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
//         * aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
//         * determinare il vincitore


// EXTRA:
// Crea un metodo per stilare la classifica finale dei giocatori

// DATI DI PARTENZA:

//     let bowling = {
//         'players': [
//             {'name': 'Livio', 'scores': []},
//             {'name': 'Paola', 'scores': []},
//             {'name': 'Filippo', 'scores': []},
//             {'name': 'Giuseppe', 'scores': []}
//         ],
//         ...
//     }




let bowling = {
            'players': [
                {'name': 'Livio',    'scores': []},
                {'name': 'Paola',    'scores': []},
                {'name': 'Filippo',  'scores': []},
                {'name': 'Giuseppe', 'scores': []}
            ],


    creaPunteggio : function() {
    // creare 10 punteggi casuali per ogni giocatore:
        
         this.players.forEach( (giocatore)=> {

            for (let i=0; i<10; i++) {
                giocatore.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }

         } ) ;

    },



    calcolaPunteggio : function() {
        //  trovare il punteggio finale per ogni giocatore
        this.players.forEach( (giocatore) => {
            giocatore.finalScore = giocatore.scores.reduce((a, b) => a + b, 0);
        });
    
    },

    aggiungiGiocatore : function(nome) {
      //  aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui

        let newPlayer = { name: nome, scores: [] };
        this.players.push(newPlayer);

        for (let i = 0; i < 10; i++) {
            newPlayer.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
        }
        // Calcola il punteggio finale
        newPlayer.finalScore = newPlayer.scores.reduce((a, b) => a + b, 0);
    },


    verificaVincitore : function() {
       // determinare il vincitore
       let primo = 0;
       let vincitore = "";

       this.players.forEach( (giocatore) => {
        
        if (giocatore.finalScore > primo)
        {
            primo = giocatore.finalScore;
            vincitore = giocatore.name;
            
        }
    });
    
    console.log(`Il vincitore è ${vincitore} per aver totalizzato ${primo}`);
    


    },


    // Metodo per stilare la classifica finale
    finalRanking: function() {
        return this.players.sort((a, b) => b.finalScore - a.finalScore);
    }


}

bowling.creaPunteggio();

bowling.calcolaPunteggio();

bowling.aggiungiGiocatore("Roberto");

bowling.verificaVincitore();



// Stila la classifica finale
let ranking = bowling.finalRanking();

console.log('Classifica finale:');
ranking.forEach((player, index) => {
    console.log(`${index + 1}. ${player.name}: ${player.finalScore}`);
});