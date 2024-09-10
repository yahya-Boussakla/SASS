let numbers = [1,2,3,4,5,6];
let trie = true;
let temps ;

for (let i = 0; i < numbers.length; i++) {

    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j+1]) {
            trie = false;
            temps = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temps;
        }
    }
    if (trie == true) {
        return;
    }
}
console.log(numbers);