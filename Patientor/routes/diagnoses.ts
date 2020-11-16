import express from 'express';
import {getAll} from '../controllers/diagnoses';

const router = express.Router();

router.get('/', getAll);

export default router;