export const capitalize = (string) => {
  if (string == null) return null;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const reverseString = (string) => {
  if (string == null) return null;
  return string.split("").reverse().join("");
};

export const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

export const caesarCipher = (string, shift) => {
  if (shift < 0) {
    return caesarCipher(string, amount + 26);
  }

  let output = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char.match(/[a-z]/i)) {
      let code = string.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    output += char;
  }
  return output;
};

export const analyzeArray = (array) => {
  if (!Array.isArray(array)) return "please enter a proper array";
  if (array.length === 0) return null;
  let avg = array.reduce((a, b) => a + b) / array.length;
  let min = array.reduce((a, b) => {
    return b < a ? b : a;
  });
  let max = array.reduce((a, b) => {
    return b > a ? b : a;
  });

  return {
    average: avg,
    min: min,
    max: max,
    length: array.length,
  };
};
