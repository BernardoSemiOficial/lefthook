// Configuration: https://commitlint.js.org/reference/rules-configuration.html
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: { "header-max-length": [0, "always", 180] },
};
