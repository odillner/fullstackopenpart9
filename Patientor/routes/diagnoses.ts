import express from 'express';
import Diagnose from '../types/Diagnose';
import {getAll} from '../controllers/diagnoses';

const router = express.Router();

router.get('/', (_req, res) => {
    const diagnoses: Array<Diagnose> = getAll();
    res.json(diagnoses);
});

export default router;