
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

const calculateExercises = (result: Array<number>, target: number): ExercisePeriod => {
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
    }

    return total;
}

interface Args {
    result: Array<number>;
    target: number;
}

const parse = (args: Array<string>): Args => {
    if (args.length < 4) throw new Error('Not enough arguments');
  
    const result: Array<number> = args.slice(3, args.length).map(arg =>+arg);

    result.forEach(arg => {
        if (isNaN(Number(arg))) {
            throw new Error('Provided values were not numbers!');
        }
    })

    if (!isNaN(Number(args[2]))) {
        return {
            result,
            target: Number(args[2])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

try {
    const {result, target} = parse(process.argv);
    console.log(calculateExercises(result, target))
} catch (e) {
    console.log('Error:', e.message);
}