import express, { Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes from './routes/index';
// import painelRoutes from '/routes/painel';
const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

// server.use(express.static('public'));

server.use(mainRoutes);
// server.use('/painel', painelRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada');
});


server.listen(80);

/*
server.get('/', (req: Request, res:Response) =>{
  res.send('Olá Mundo!');
});
server.get('/contato', (req: Request, res:Response) =>{
  res.send('Esta é a página de contato.');
});
server.get('/noticia/:slug', (req: Request, res:Response) =>{
  let slug: string = req.params.slug;
  res.send(`Noticia: ${slug}`);
});

server.get('/voo/:origem-:destino', (req: Request, res: Response)=> {
  let { origem, destino } = req.params;

  res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});
*/