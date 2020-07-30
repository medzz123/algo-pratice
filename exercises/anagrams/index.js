// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(word) {
  return word.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;

// function getMap(word) {
//     const charMap = {};
//     for (let char of word.replace(/[^\w]/g, '').toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
//   }

//   function anagrams(stringA, stringB) {
//     const charMapOne = getMap(stringA);
//     const charMapTwo = getMap(stringB);

//     if (Object.keys(charMapOne).length !== Object.keys(charMapTwo).length) {
//       return false;
//     }

//     for (let k in charMapOne) {
//       if (charMapOne[k] !== charMapTwo[k]) {
//         return false;
//       }
//     }

//     return true;
//   }
