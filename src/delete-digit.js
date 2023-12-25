const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrOfNumbersByDilimiter = n.toString().split("");
  let intermediateNumber = 0;

  arrOfNumbersByDilimiter.forEach((number) => {
    const newArr = [...arrOfNumbersByDilimiter];
    Number(newArr.splice(newArr.indexOf(number), 1).join(""));
    if (Number(newArr.join("")) > intermediateNumber) {
      intermediateNumber = Number(newArr.join(""));
    }
  });
  return intermediateNumber;
}

module.exports = {
  deleteDigit,
};
