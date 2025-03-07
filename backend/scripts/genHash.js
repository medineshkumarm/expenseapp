const crypto = require("crypto");

let val = crypto.randomBytes(64).toString("hex");


console.log(val);

console.log(new Date().toISOString().split("T")[0])
console.log(new Date().toLocaleDateString())