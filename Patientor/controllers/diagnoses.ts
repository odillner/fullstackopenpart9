import {Request, Response} from 'express';

import diagnoses from '../data/diagnoses.json';
import Diagnose from '../types/Diagnose';

export const getAll = (_req: Request, res: Response): void => {
    const data: Array<Diagnose> = diagnoses;
    res.json(data);
};