import { Router } from "express";
import userController from "../controllers/usuariocontroller";


class UsuarioRoutes{
    router: Router = Router();

    
    constructor() {
        this.config();
    }

    
    config() {
        this.router.get('/', userController.list);
        this.router.get('/:identificacion', userController.getOne);
        this.router.post('/', userController.create);
        this.router.put('/:id', userController.update);
        this.router.delete('/:id', userController.delete);
    }
}


export default new UsuarioRoutes().router;