import 'dotenv/config'
import app from './app';
import { conectarAoDatabase } from './database';

const port = 8080;

app.listen(port, () => {
  conectarAoDatabase();
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
