
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

export const calculateExercises = (result: Array<number>, target: number): ExercisePeriod => {
    if (result.length === 0) {
        throw new Error('Empty array');
    }

    const periodLength: number = result.length;
    const trainingDays: number = result.filter(day => day !== 0).length;
    const average: number = result.reduce((acc, i) => acc + i)/periodLength;
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