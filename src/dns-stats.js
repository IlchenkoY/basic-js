const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsAppearances = {};

  domains.forEach((domain) => {
    const domainParts = domain.split(".").reverse();
    let currentDomain = "";

    domainParts.forEach((el) => {
      currentDomain += `.${el}`;
      !dnsAppearances[currentDomain]
        ? (dnsAppearances[currentDomain] = 1)
        : (dnsAppearances[currentDomain] += 1);
    });
  });

  return dnsAppearances;
}

module.exports = {
  getDNSStats,
};
