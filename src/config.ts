import express, { Application } from 'express';
import morgan from "morgan";
import cors from "cors";
//import { Database } from "./database";


import userController from "./routes/usuarios.routes";

export class Config{
    
    private app: Application; 

    constructor(private port?: number | string){
        this.app = express()
        this.Setting()
        this.middlewares();
    }

    Setting(){
        this.app.set('port', this.port || process.env.PORT ||3000)
    }

    middlewares(){
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }


    async Listen(){
        await this.app.listen(this.app.get('port'))
        console.log('Corriendo')
    }

    async routes(){
        await this.app.use('/api/users', userController)
    }
}