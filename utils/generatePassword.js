const generator = require('generate-password');

// const generatePassword = generator.generate({
// 	length: 10,
// 	numbers: true,
//     strict: true
// });

const generatePassword = (res) => {
  const generatedPassword = generator.generate({
    length: 10,
    numbers: true,
    strict: true,
  });

  res = generatedPassword;

  return res;
};

// console.log(generatePassword);

module.exports = generatePassword;
