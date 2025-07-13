const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num)) {
  console.log("Please provide a valid integer.");
}

else {
    console.log(`My number: ${num}`);
}