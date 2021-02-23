const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const db = require("./util/database")

const test = db.execute("SELECT * FROM categoria")
    .then( results =>{
        return results[0];
    })
    .catch(err =>{
        return err;
    });


console.log("Server in azione sulla porta 3000");
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();

})

app.get('/api/storico/noleggi',(req,res,next)=>{
    db.execute("SELECT nominativo,data_inizio,data_fine,targa,modello FROM noleggio,auto,cliente WHERE noleggio.id_cliente=cliente.id AND noleggio.id_auto=auto.id;")
    .then( results =>{
        res.status(200).json({
            message:"Tutto recuperato con successo",
            categoria: results[0]
        });
    })
    .catch(err =>{
        console.log(err);
    });
});

app.post('/api/cliente',(req,res,next)=>{
    const file = req.body;
    db.execute("INSERT INTO cliente VALUES (?, ?, ?, ?)",
    [file.id,file.nominativo, file.patente, file.cc])
    .then( ()=> {
        res.status(201).json({
            message: "Tutto ok"
        });
    })
    .catch(err =>{
        console.log(err);
    });
});

app.post('/api/categoria/id_auto',(req,res,next)=>{
    const file = req.body;
    db.execute("SELECT id FROM auto WHERE targa=?",
    [file.targa])
    .then( results => {
        res.status(201).json({
            message: "Tutto ok",
            risposta : results[0]
        });
        console.log(results[0])
    })
    .catch(err =>{
        console.log(err);
    });
});


app.post('/api/categoria',(req,res,next)=>{
    const file = req.body;
    db.execute("INSERT INTO categoria VALUES (?, ?, ?, ?, ?)",
    [file.id, file.descrizione, file.prezzo_giornaliero, file.prezzo_settimanale, file.prezzo_mensile])
    .then( ()=> {
        res.status(201).json({
            message: "Tutto ok"
        });
    })
    .catch(err =>{
        console.log(err);
    });
});

app.post('/api/nolo',(req,res,next)=>{
    const file = req.body;
    db.execute("INSERT INTO noleggio(id_cliente,id_auto,data_inizio,data_fine) VALUES (?, ?, ?, ?)",
    [file.id, file.box, file.data_inizio, file.data_fine])
    .then( ()=> {
        res.status(201).json({
            message: "Tutto ok"
        });
    })
    .catch(err =>{
        console.log(err);
    });
});

app.post('/api/categoria/ricerca',(req,res,next)=>{
    const file = req.body;
    db.execute("SELECT * FROM categoria WHERE descrizione=?",
    [file.descrizione])
    .then( results => {
        res.status(201).json({
            message: "Tutto ok",
            risposta : results[0]
        });
    })
    .catch(err =>{
        console.log(err);
    });
});

app.post('/api/categoria/parco',(req,res,next)=>{
    const file = req.body;
    db.execute("SELECT targa,marca,modello,descrizione FROM auto,categoria WHERE categoria.id=auto.id_categoria AND categoria.descrizione=?",
    [file.descrizione])
    .then( results => {
        res.status(201).json({
            message: "Tutto ok",
            risposta : results[0]
        });
        console.log(results[0])
    })
    .catch(err =>{
        console.log(err);
    });
});

app.post('/api/modifica',(req,res,next)=>{
    const file = req.body;
    console.log(file)
    db.execute("UPDATE categoria SET descrizione=?,prezzo_giornaliero=?,prezzo_settimanale=?,prezzo_mensile=? WHERE descrizione=?",
    [file.descrizione, file.prezzo_giornaliero, file.prezzo_settimanale, file.prezzo_mensile, file.descmod])
    .then( results => {
        res.status(201).json({
            message: "Tutto ok",
            risposta : results[0]
        });
    })
    .catch(err =>{
        console.log(err);
    });
});

app.post('/api/elimina',(req,res,next)=>{
    const file = req.body;
    console.log(file)
    db.execute("DELETE FROM categoria WHERE descrizione=?",
    [file.descrizione])
    .then( results => {
        res.status(201).json({
            message: "Tutto ok",
            risposta : results[0]
        });
    })
    .catch(err =>{
        console.log(err);
    });
});


app.get('/api/categoria',(req,res,next)=>{
    db.execute("SELECT categoria.id,descrizione AS car from categoria,auto WHERE auto.id IS NOT NULL GROUP BY categoria.id;")
    .then( results =>{
        res.status(200).json({
            message:"Categorie recuperate con successo",
            categoria: results[0]
        });
        console.log(results[0]);
    })
    .catch(err =>{
        console.log(err);
    });
});

app.post('/api/categoria/preventivo',(req,res,next)=>{
    const file = req.body;
    db.execute("SELECT prezzo_giornaliero,prezzo_settimanale,prezzo_mensile from categoria,auto WHERE auto.id_categoria=categoria.id AND targa= ?",
    [file.targa])
    .then( results => {
        res.status(201).json({
            message: "Tutto ok",
            risposta : results[0]
        });
        console.log(results[0])
    })
    .catch(err =>{
        console.log(err);
    });
});

module.exports=app;