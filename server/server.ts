import express from 'express';
import http from 'http';

import {calculateBMI} from './bmi';
import {calculateExercises} from './exercise';

const PORT = 3000;
const app = express();

app.use(express.json());

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


interface ExerciseArgs {
    daily_exercises: Array<number>;
    target: number;
}

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {daily_exercises, target} = req.body as ExerciseArgs;

    console.log(daily_exercises, target)
    if ((target === undefined) || (daily_exercises === undefined)) {
        res.status(400).json({error: "parameters missing"});
        return;
    }

    const exercisePeriod = calculateExercises(daily_exercises, target);

    res.json(exercisePeriod);
});


const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});