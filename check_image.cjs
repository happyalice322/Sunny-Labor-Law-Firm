const fs = require('fs');
const buffer = fs.readFileSync('src/assets/images/solution-6-v5.jpg');
console.log(buffer.slice(0, 100).toString());
