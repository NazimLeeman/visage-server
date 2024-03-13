import express, { Express } from 'express';
import cors from 'cors';
import config from './config';
import router from './router';

const app: Express = express();

app.use(cors({
    origin: config.CORS_ORIGIN
  }));

app.use(express.json());

app.use('/all', router);

  (async function bootstrap () {
    try {
      app.listen(config.PORT, () => {
        console.log(`[server]: Server is running on port ${config.PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  })();