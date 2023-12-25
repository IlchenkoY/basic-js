const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domain;

  if (email[email.indexOf("@") + 1] !== ".") {
    domain = email.slice(email.indexOf("@") + 1);
    return domain;
  }

  const splittedMail = email.split(".");
  let raWdomain = `${splittedMail[splittedMail.length - 2]}.${
    splittedMail[splittedMail.length - 1]
  }`;
  domain = raWdomain.slice(raWdomain.indexOf("@") + 1);

  return domain;
}

module.exports = {
  getEmailDomain,
};
