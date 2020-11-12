import patients from '../data/patients.json';
import Patient from '../types/Patient';

export const getAll = () : Array<Patient> => {
    const data: Array<Patient> = patients;
    return data;
};