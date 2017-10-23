module.exports = function() {
  return {
    maxConsoleMessagesPerTest: 100000,
    files: ["src/**/*.js"],

    tests: ["test/**/*Spec.js"],

    setup: function() {
      var chai = require("chai");
      global.expect = chai.expect;
    },

    env: {
      type: "node",
      runner: "node"
    }
  };
};
