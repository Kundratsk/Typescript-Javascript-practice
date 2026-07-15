function findLongestWordLength(sentence) {
  const splitted = sentence.split(" ")
  
  let longestWord = splitted[0]
  for (let i = 0; i < splitted.length; i++) {
    if (longestWord.length < splitted[i].length) {
      longestWord = splitted[i]
      
      continue
    }
  }
  return longestWord.length;
}

console.log(findLongestWordLength("Minul on väga suur laup"))

