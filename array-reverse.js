let z = [1,2,4,5,6];
let temps;

    for (let i = 0; i < z.length - i - 1; i++) {
        temps = z[i];
        z[i] = z[z.length - i - 1];
        z[z.length - i - 1] = temps;
    }
console.log(z);