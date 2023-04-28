
//Crear uso de express
const express = require("express");

//conectar con la clase de otro archivo
const AdminEspecie = require("./AdminEspecie");
//esto se agrego solo - xd
const req = require("express/lib/request");
const res = require("express/lib/response");
//se crea clase con sus respectivos metodos 
class AteneaVetAPI{
    //se crea constructor de la misma clase
    constructor(){
        //se predetermina puerto
        this.port=3000
        //se crea la app
        this.app = express();
        //se crea un nuevo objeto
        this.adminespecie = new AdminEspecie();
        
        this.app.use(this.configurarCORS);
        this.app.use(express.json());

        //se crean rutas dentro del constructor
        this.app.post(
            //se llama a la funcion o metodo correspondiente y se pasan los respectivos parametros en la funcion flecha y en el llamado del objeto
            "/crear_especie",
            (req, res)=>{
                this.adminespecie.crearEspecie(req, res);

            }
        );

        this.app.get(
            //se llama a la funcion o metodo correspondiente y se pasan los respectivos parametros en la funcion flecha y en el llamado del objeto
            "/listar_especie",
            (req, res)=>{
                this.adminespecie.listarEspecie(req, res);
            }
        );

        
    }

    configurarCORS(req , res, next){

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        res.header("Access-Control-Allow-Headers", "Content-type");
        next();

    }

    iniciarServidor(){
        this.app.listen(
            this.port,
            ()=>{
                console.log(`Server Online in port ${this.port}`);
            }
        )
    }
}

const ateneavetapi = new AteneaVetAPI();
ateneavetapi.iniciarServidor();