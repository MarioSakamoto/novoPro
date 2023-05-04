//aqui vamos ter as rotas da aplicação
import { Router, Request, Response } from 'express';
//criando router
const router = Router();
//criar rota da minha API
router.get('/teste', (req: Request, res: Response) => {
    return res.json({nome: 'TEST'})
})
//aqui eu exporto o router para conseguir acessar dentro do server.ts
export { router };