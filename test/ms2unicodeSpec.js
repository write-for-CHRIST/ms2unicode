const chai = require("chai");
const expect = chai.expect;
const ms2unicode = require("../src/ms2unicode");

describe("ms2unicode", () => {
  it("should convert correct unicode string", () => {
    let originStr =
      "Vì Đức Chúa Trời yêu thương thế gian"; //, đến nỗi đã ban Con một của Ngài, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời.";
    let unicodeStr =
      "Vì Đức Chúa Trời yêu thương thế gian"; //, đến nỗi đã ban Con một của Ngài, hầu cho hễ ai tin con ấy, không bị hư mất mà được sự sống đời đời.";
    let converted = ms2unicode(originStr); /* ? */
    let originStrHash = new Buffer(originStr).toString("base64"); // ?
    let convertedHash = new Buffer(converted).toString("base64"); // ?
    expect(converted).to.equal(unicodeStr);
    expect(originStrHash).not.to.equal(convertedHash);
  });
  it("should convert correct unicode string 2", () => {
    let originStr =
      "đến nỗi đã ban Con một của Ngài"; //, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời.";
    let unicodeStr =
      "đến nỗi đã ban Con một của Ngài"; //, hầu cho hễ ai tin con ấy, không bị hư mất mà được sự sống đời đời.";
    let converted = ms2unicode(originStr); /* ? */
    let originStrHash = new Buffer(originStr).toString("base64"); // ?
    let convertedHash = new Buffer(converted).toString("base64"); // ?
    expect(converted).to.equal(unicodeStr);
    expect(originStrHash).not.to.equal(convertedHash);
  });
});
