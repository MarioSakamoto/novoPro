import express, { Request, Response, NextFunction } from 'express'
//sempre aqui no segundo import
import 'express-async-errors'; 
//as rotas que uso na minha aplicação estão dentro desse router
import { router } from './routes'
//habilitar cors para qualquer url/ip fazer essa req
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

//Esse é um middleware para tratativa de erro e para não travar a aplicação usamos o NextFuction
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
 //Se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})
//para inicializar o projeto primeiro eu preciso passar qual a porta que quero rodar, ex:(3333)
//,e posso forncer um callback no console ex: ( , () => ()) 
app.listen(3333, () => console.log('Servidor online!'));
