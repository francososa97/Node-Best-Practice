console.log(process.argv);
let result = 0;
for (let index = 2; index < process.argv.length; index++) {
    result += process.argv[index];
}

console.log(result);