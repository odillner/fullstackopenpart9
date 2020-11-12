import express, {Request} from 'express';
import http from 'http';
import bodyParser from 'body-parser';

import {calculateBMI} from './bmi';
import {calculateExercises} from './exercise';

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack');
    res.end();
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if (isNaN(height) || isNaN(weight)) {
        res.status(400).json({error: "malformatted parameters"});
        return;
    }

    const BMI = calculateBMI(height, weight);

    res.json(BMI);
});

interface ExerciseRequestBody {
    daily_exercises: Array<number>,
    target: number
}

app.post('/exercises', (req: Request<unknown, unknown, ExerciseRequestBody>, res) => {
    const {daily_exercises, target} = req.body;

    console.log({daily_exercises}, target);

    if ((target === undefined) || (daily_exercises === undefined)) {
        res.status(400).json({error: "parameters missing"});
        return;
    }

    if (isNaN(Number(target))) {
        res.status(400).json({error: "malformed parameters"});
        return;
    }
    
    if (!Array.isArray(daily_exercises)) {
        res.status(400).json({error: "malformed parameters"});
        return;
    } else {
        daily_exercises.forEach(i => {
            if (isNaN(Number(i))) {
                res.status(400).json({error: "malformed parameters"});
                return;
            }
        });
    }

    const exercisePeriod = calculateExercises(daily_exercises, target);

    res.json(exercisePeriod);
});


const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});