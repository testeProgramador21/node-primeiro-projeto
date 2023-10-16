import { Router,Request, Response } from 'express';

const router = Router();

//FUNCIONAMENTO
// PEGAR OS PRODUTOS DOS BANCO DE DADOS
// ORGANIZAR AS INFORMAÇÕES DESSES PRODUTOS
// ENVIA PARA O TEMPLATE ENGINE
router.get('/', (req: Request, res: Response)=>{
  // res.send('Olá Mundo!'); para mostrar um texto
  let user = {
    name: 'Rodolfo',
    age: 34
  };

  res.render('home', {
    // user: 'Rodolfo'
    user
  });
});

router.get('/contato', (req: Request, res: Response)=>{
  res.send('Formulário de contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
  res.send('Página Institucional sobre a empresa');
});

export default router;