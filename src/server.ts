import express, { Express } from 'express';
import 'dotenv/config';

const app: Express = express();
const port: number = Number(process.env.API_PORT);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  return res.send({ message: 'Hello Dev' }).status(200);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
