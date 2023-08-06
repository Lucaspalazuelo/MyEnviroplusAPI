import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dbConnection from './utils/dbConnection';
import enviroDataRoutes from './routes/enviroData.route';
import airParticulate from './routes/airParticulate.route'
import unknownRoutes from './middleware/unknownRoutes';

const app = express();

app.use(express.json());

dbConnection();

app.use(cors());
app.use(helmet());
app.use('/api', enviroDataRoutes);
app.use('/api', airParticulate);

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('*', unknownRoutes);

export default app;
