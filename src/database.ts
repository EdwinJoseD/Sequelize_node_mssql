import { Sequelize } from "sequelize-typescript";
import { QueryTypes, json } from "sequelize";


export const con = new Sequelize('SIPGAV','PYTHON','1234',{
  host: 'localhost',
  dialect: 'mssql',
  port: 1433,
  logging: false,
  dialectOptions: {
    requestTimeout: 30000,
    encrypt: true
  }
})


/*
export class Database{

  async Conectar(){
    await this.con.authenticate()
    .then(()=>{
    console.log('Conectado')
    })
    .catch((error)=>{
    console.error('No se pudo conectar', error)
    })
  }

  async Consulta(query:string){
    await this.con.query(query, {
      nest: true,
      type: QueryTypes.SELECT
    })
    .then((result)=>{
      console.log('La consulta arrojo lo sgt:')
      console.log(result)
    })
    .catch((error)=>{
      console.error('Ocurrio un error')
    })
    .finally(()=>{
      this.con.close()
      console.log('Se cerro la conexion')
    })
  }
}


export default con ;

*/