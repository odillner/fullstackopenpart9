import express from 'express';
import cors from 'cors';
import diagnoseRouter from './routes/diagnoses';
import patientRouter from './routes/patients';

const app = express();

app.use(cors());

app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', patientRouter);

export default app;