// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.

// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
// // Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

//console.log("Server del mio blog!!!");

const express = require ('express') // IMPORTO EXPRESS
const app = express() // INIZIALIZZARE EPRESS INVOCANDOLO COME UNA FUNZIONE E SALVANDOLO IN UNA VARIABILE
const port = 3000

// Definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));

app.get('/', (req, res) => { // DEFINIAMO LA PRIMA ROTTA
    res.send("Server del mio blog!!!")
})

// Definiamo la rotta dettaglio del prodotto per testare un parametreo dinamico
app.get('/products/:id', function (req, res){
    console.log(`Hai richiesto il prodotto con l'id: ${req.params.id}`);
    
})

app.get('/post', (req, res) => { // DEFINIAMO LA PRIMA ROTTA

    // Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
    const post = [
        {
            titolo: "Ciambellone",
            contenuto: "food",
            image: "C:\Users\stive\Desktop\Classe #139\express-blog-intro\public\images\ciambellone.jpeg",
            tags: ["ricetta", "dolci", "cucina"]
        },
        {
            titolo: "Cracker",
            contenuto: "food",
            image: "C:\Users\stive\Desktop\Classe #139\express-blog-intro\public\images\cracker_barbabietola.jpeg",
            tags: ["ricetta", "salato", "merenda"]
        },
        {
            titolo: "Pane fritto",
            contenuto: "food",
            image: "C:\Users\stive\Desktop\Classe #139\express-blog-intro\public\images\pane_fritto_dolce.jpeg",
            tags: ["dolce", "salato", "merenda"]
        },
        {
            titolo: "Pasta",
            contenuto: "food",
            image: "C:\Users\stive\Desktop\Classe #139\express-blog-intro\public\images\pasta_barbabietola.jpeg",
            tags: ["pranzo", "salato", "cena"]
        },
        {
            titolo: "Torta",
            contenuto: "food",
            image: "C:\Users\stive\Desktop\Classe #139\express-blog-intro\public\images\torta_paesana.jpeg",
            tags: ["desert", "torte", "dolce"]
        }
    ];

    // Ritorniamo l'array dei post in formato json per questo endpoint dell'API
    res.json(post);
})


app.listen(port, () => { // AVVIAMO IL SERVER, METTENDOLO IN ASCOLTO SULL PORTA INDICATA
    console.log(`Example app listening on port ${port}`);
})
