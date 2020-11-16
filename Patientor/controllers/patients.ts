import {Request, Response} from 'express';

import patients from '../data/patients.json';
import Patient, {NonSensitivePatient} from '../types/Patient';
import filterSensitivePatientData from '../utils/filterSensitivePatientData';

export const getAll = (_req: Request, res: Response): void => {
    const data: Array<NonSensitivePatient> = patients.map(filterSensitivePatientData);

    res.json(data);
};

export const create = (_req: Request<unknown, unknown, Patient>, _res: Response): void => {


    //res.json(data);
};