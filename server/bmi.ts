interface BMIObject {
    weight: number;
    height: number;
    BMI: number;
    description: string
}

export const calculateBMI = (weight: number, height: number): BMIObject => {
    const BMI = weight/(((height/100)*(height/100)));

    let description: string;

    if (BMI<18) { 
        description = "underweight";
    } else if (BMI<25) {
        description = "normal";
    } else if (BMI<30) {
        description = "overweight";
    } else if (BMI<40) {
        description = "obese";
    } else {
        description = "supermassive";
    }

    const obj: BMIObject = {
        weight,
        height,
        BMI,
        description
    };
    return obj;
};