let numbers = [4,3,2,5];

let temps;

for(let i = 0; i < numbers.length; i++){
    
    for(let j = 0; j < numbers.length; j++){
        if(numbers[i] < numbers[j]){
            temps = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = temps;
        }
    }
}
console.log(numbers);