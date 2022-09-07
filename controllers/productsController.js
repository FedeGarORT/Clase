const fs = require("fs");
const path = require("path");
const prods = JSON.parse(fs.readFileSync(path.join(__dirname + '/../' + 'db.json'), 'utf8'));

const prodController = {
    start: (req, res) => {
        res.send(listar());
    },
    findById: (req, res) => {
        res.send(find(req.params.id));
    },
    create: (req, res) => {
        res.send("Creado producto " + req.body);
    },
    edit: (req, res) => {
        res.send("Editar id = " + req.params.id)
    },
    delete: (req, res) => {
        res.send("Eliminar id = " + req.params.id)
    }
}

module.exports = prodController;

function listar(){
    let msj = "<h1>Lista prodcutos</h1>";
    
    prods.forEach(p => {
        msj+= "</br>"
        msj+= " id: " + p.id;
        msj+= " nombre: " + p.nombre;
        msj+= " precio: " + p.precio;
        msj+= "</br>"
    });
    
    return msj;    
}

function find(id){
    let ok = false;
    let prod;
    for(let i=0; i<prods.length && !ok; i++){
        if (id == prods[i].id)
            ok = true;
            prod = prods[i];
    }
    return prod;
}