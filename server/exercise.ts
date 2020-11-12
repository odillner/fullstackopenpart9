
const ratingDescriptions: Array<string> = ["bad", "average", "good"];

interface ExercisePeriod {
    periodLength: number;
    trainingDays: number;
    average: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
}

export const calculateExercises = (daily_exercises: Array<number>, target: number): ExercisePeriod => {
    if (daily_exercises.length === 0) {
        throw new Error('Empty array');
    }

    const periodLength: number = daily_exercises.length;
    const trainingDays: number = daily_exercises.filter(day => day !== 0).length;
    const average: number = daily_exercises.reduce((acc, i) => acc + i)/periodLength;
    const success: boolean = average >= target;
    const rating: number = success ? average >= target*2 ? 3 : 2 : 1;

    const total: ExercisePeriod = {
        periodLength,
        trainingDays,
        average,
        success,
        rating,
        ratingDescription: ratingDescriptions[rating-1],
        target, 
    };

    return total;
};