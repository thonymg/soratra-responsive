var soratra = require("./index");

module.exports = function(eyeglass, sass) {
  return {
    sassDir: soratra.includePaths[0]
  };
};
