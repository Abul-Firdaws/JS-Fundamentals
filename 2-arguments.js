let count = 0;

for (let i = 2; i < process.argv.length; i++) {
  count++;
}

if (count === 0) {
  console.log("No argument");
} else if (count === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
