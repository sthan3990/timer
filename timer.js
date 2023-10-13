
// arguments from the command line
const args = process.argv.slice(2);

// check for negative number, not a number, or blank
if (args.some(isNaN) || args.some((value) => value <= 0)) {
  console.log("Entered a invalid number");
}

else{ 
const sortedSecondsArray = args.map(Number).sort((a, b) => a - b);

let timer = 0;

sortedSecondsArray.forEach((seconds) => {
  setTimeout(() => {
    // make system beep 
    process.stdout.write('.');
    process.stdout.write('\x07');
  }, timer);

  // 
  timer += seconds * 1000;
});
}
