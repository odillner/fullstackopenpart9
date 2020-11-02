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

console.log(calculateBMI(60, 170));