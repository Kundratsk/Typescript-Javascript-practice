function fearNotLetter(string) {
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i + 1].charCodeAt(0) - string[i].charCodeAt(0) !== 1) {
      return String.fromCharCode(string[i].charCodeAt(0) + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("lnop")); // should return "m"
