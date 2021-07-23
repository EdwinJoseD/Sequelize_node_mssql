import { con } from "../database";
import { QueryTypes } from "sequelize";
import { Request, Response } from 'express';
import { stringify } from "querystring";
import  { IUsuario } from "../models/usuario";
import jwt  from "jsonwebtoken";


class UsuarioController{

    public async list(req: Request, res: Response): Promise<void>{
        const users = await con.query('select * from usuario')
        res.send(users[0])
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const {identificacion} = req.params
        const user = await con.query('select * from usuario where identificacion =   ?', {
            nest: true,
            type: QueryTypes.SELECT,
            replacements:[identificacion]
        })
        if (user.length>0) {
            user.map((u)=>{
            res.send(u)
            })
        }else{
          res.status(404).json({text:'El usuario no existe'})  
        }
    }

    public async create(req: Request, res: Response){
        res.json({'message': ' mesasdasda'})
        const user: IUsuario = {   
            identificacion: req.body.identificacion,
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.identificacion,
            nombres: req.body.identificacion,
            numeroFincas: req.body.identificacion,
            telefono1: req.body.identificacion,
            telefono2: req.body.identificacion,
            correo: req.body.identificacion,
            password: req.body.identificacion,
            fechaIngreso: req.body.identificacion,
            foto: req.body.identificacion
        }
        jwt.sign({identificacion: user.identificacion}, 'secretkey')
        console.log(user)
    }

    public async update(){

    }
    public async delete(){

    }


}

var userController = new UsuarioController;
export default userController;