const file = require('fs');
const shopfromfile = file.readFileSync('shop.json');
const stfromfilestring = JSON.parse(shopfromfile);
console.log(stfromfilestring);