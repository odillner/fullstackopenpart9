const calculateBMI = (weight: number, height: number) => {
    const BMI = weight/(((height/100)*(height/100)));

    let BMIDescription: string;

    if (BMI<18) { 
        BMIDescription = "underweight"
    } else if (BMI<25) {
        BMIDescription = "normal"
    } else if (BMI<30) {
        BMIDescription = "overweight"
    } else if (BMI<40) {
        BMIDescription = "obese"
    } else {
        BMIDescription = "supermassive"
    }

    return `Your bmi is ${BMI}, you are ${BMIDescription}`;
}

interface Args {
    weight: number;
    height: number;
}

const parseArguments = (args: Array<string>): Args => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            weight: Number(args[2]),
            height: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

try {
    const {weight, height} = parseArguments(process.argv);
    console.log(calculateBMI(weight, height))
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
}