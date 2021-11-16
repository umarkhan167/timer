var myArgs = process.argv.slice(2);
// console.log(myArgs);


const timer = function(number) {
  let num = Number(number)
  if (typeof num === "number" && num > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('BEEP\n')
    }, num * 1000 )
  }
}

for (let numbers of myArgs) {
  timer(numbers);
}




//procces.argv is a placeholder for whatever you pass into the node terminal as an argument.