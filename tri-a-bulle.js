let numbers = [4,3,2,5,8,0];

let temps ;

for (let i = 0; i < numbers.length; i++) {

    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j+1]) {
            temps = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temps;
        }
    }
}
console.log(numbers);