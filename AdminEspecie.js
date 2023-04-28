//se importa el cliente de prisma 
//import { PrismaClient } from '@prisma/client'
const { PrismaClient }=require('@prisma/client');

//clase con respectivos metodos
class AdminEspecie{
    //con comando en npx prisma generate se crea un cliente de prisma y se importa
    //se crea un crea un constrcutor que requiera prisma 
    constructor(){
        this.prisma = new PrismaClient()
    }
    //funcion siempre debe ser asincrona
    async crearEspecie(req, res){

        const datos = req.body;
        console.log(datos)
        //se crea a la especie
        const especie = await this.prisma.especie.create(
            {data:datos}
        )
        res.json(especie)
    }
    //se vuelve asincrona ya que es una promesa por parte de prisma
    async listarEspecie(req, res){
        const especies = await this.prisma.especie.findMany();
        res.json(especies)

    }
}
//exportar para uso en otro archivo
module.exports=AdminEspecie;

// npx prisma migrate dev
//npx prisma migrate dev --preview-feature --create-only

