/* Words starting with consonants have all leading consonants moved to the end
of the word, and then “ay” is applied
Words starting with vowels have “way” appended to the end.
*/
const vowels = ['a', 'e', 'i', 'o', 'u'];

function toPigLatin(word) {
  let pigWord = word; // pure function
  if(vowels.includes(pigWord.charAt(0))) {
    pigWord += "way";
  }
  else {
    let arr = pigWord.split('');
    while(!vowels.includes(arr[0])) {
      arr.push(arr.shift());
    }
    pigWord = arr.join('');
    pigWord += "ay";
  }
  return pigWord;
}

// test
console.log("Testing...");

if("arrowway" !== toPigLatin("arrow")) console.log("Test failed for arrow");
if("igpay" !== toPigLatin("pig")) console.log("Test failed for pig");
if("unkchay" !== toPigLatin("chunk")) console.log("Test failed for chunk");
if("engthstray" !== toPigLatin("strength")) console.log("Test failed for strength");
if("eventway" !== toPigLatin("event")) console.log("Test failed for event");

console.log("Tests complete");

exports = toPigLatin;
