const generator = require('generate-password');

const generatePassword = generator.generate({
	length: 10,
	numbers: true,
    strict: true
});

console.log(generatePassword);

module.exports = generatePassword;