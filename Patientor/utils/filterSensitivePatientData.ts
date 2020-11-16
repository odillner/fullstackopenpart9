import Patient, {NonSensitivePatient} from '../types/Patient';

const filterSensitivePatientData = (object: Patient): NonSensitivePatient => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {ssn, ...nonSensitive} = object;
    return nonSensitive;
};

export default filterSensitivePatientData;