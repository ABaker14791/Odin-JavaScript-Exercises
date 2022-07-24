const repeatString = function (string, num) {
  if (num > 0) {
    return string.repeat(num);
  } else if (num < 0) {
    return "ERROR";
  } else {
    return "";
  }
};

// Do not edit below this line
module.exports = repeatString;
