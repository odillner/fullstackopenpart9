import express from 'express';
import Patient from '../types/Patient';
import {getAll} from '../controllers/patients';

const router = express.Router();

router.get('/', (_req, res) => {
    const patients: Array<Patient> = getAll();
    res.json(patients);
});

export default router;