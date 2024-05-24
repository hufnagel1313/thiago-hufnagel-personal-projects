import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import morgan from 'morgan';
import skillrouter from './routers/SkillRouter';
import dotenv from 'dotenv';

dotenv.config();
const PORT = parseInt(`${process.env.PORT || 8080}`);

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/skills/', skillrouter);


app.listen(PORT, () => console.log(`Server is running at ${PORT}.`));

export default app;