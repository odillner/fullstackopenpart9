import diagnoses from '../data/diagnoses.json';
import Diagnose from '../types/Diagnose';

export const getAll = () : Array<Diagnose> => {
    const data: Array<Diagnose> = diagnoses;
    return data;
};