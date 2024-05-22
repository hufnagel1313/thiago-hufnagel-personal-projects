import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';
import skillrouter from './routers/SkillRouter';

const app = express();

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/skills/', skillrouter);

export default app;