import db from './db/connection.js';
import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import chalk from 'chalk';
import logger from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/api', routes);

db.on('connected', () => {
  console.clear();
  console.log(chalk.green('Connected to database'));
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})