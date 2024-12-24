// L-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib
// va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc";
// function reverseSentence(sentence: string): string {
//   const arr: string[] = sentence.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].split("").reverse().join("");
//   }
//   return arr.join(" ");
// }

function reverseSentence(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseSentence("we like coding")); // "ew ekil gnidoc";

// K-TASK:
// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(word: string): number {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const letters = word.toLocaleLowerCase().split("");

//   const sum = letters.reduce((acc, char) => {
//     if (vowels.includes(char)) {
//       // console.log(char);
//       acc++;
//     }
//     return acc;
//   }, 0);

//   return sum;
// }

// console.log(countVowels("string")); // 1
// console.log(countVowels("Hello")); // 2

// J-TASK:
// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
// function findLongestWord(sentence: string): string {
//   const words = sentence.split(" ");
//   let max_length = 0,
//     max_word: string = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > max_length) {
//       max_length = words[i].length;
//       max_word = words[i];
//     }
//   }
//   return max_word;
// }
// console.log(findLongestWord("I come from Uzbekistan"));

// I-TASK:
// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
// function majorityElement(arr: number[]): number {
//   // freqMap
//   const freqMap: { [key: number]: number } = {};
//   for (const num of arr) {
//     freqMap[num] = (freqMap[num] || 0) + 1;
//   }

//   // find the most freq num
//   let mostFreqNum = Number.MIN_SAFE_INTEGER;
//   let mostFreq = 0;
//   for (const num in freqMap) {
//     if (freqMap[num] > mostFreq) {
//       mostFreqNum = parseInt(num);
//       mostFreq = freqMap[num];
//     }
//   }

//   // return
//   return mostFreqNum;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // 4
// console.log(majorityElement([1, 3, 3, 4, 5, 4, 3, 3])); // 3

/**
Projects Standars:
  - Logging Standards
  - Naming Standards
    function, method, variable => CAMEL   case goHome
    class => PASCAL case                  MemberService
    folder => KEBAB                       open-csv
    css => SNAKE                          button_style
  - Error Handling

    Express res types: send, json, redirect, end, render

 */

// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"
// function getDigits(word: string): string {
//   let arr: number[] = [];

//   for (let char of word) {
//     if ("0" <= char && char <= "9") {
//       arr.push(Number(char));
//     }
//   }

//   return arr.join("");
//   // return word.replace(/\D/g, "");
// }

// console.log(getDigits("m14i1t")); // "141"

// TASK H:

// Raqamlardan iborat arrayni argument sifatida qabul qiladigan
// function tuzing. Ushbu function faqatgina positive sonlarni olib
// string holatida return qilsin.
// MASALAN: getPositive([1, -4, 2]) return qiladi "12".
// function getPositive(arr: number[]): string {
//   const new_arr: number[] = [];
//   for (let num of arr) {
//     if (num > 0) {
//       new_arr.push(num);
//     }
//   }
//   return new_arr.join("");
// }

// console.log(getPositive([1, -4, 2])); // "12"
// console.log(getPositive([1, 5, -4, -2])); // "15"

// G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va
// function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// function getHighestIndex(arr: number[]): number {
//   let max_num: number = Number.MIN_VALUE,
//     max_idx: number = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max_num) {
//       max_num = arr[index];
//       max_idx = index;
//     }
//   }
//   return max_idx;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
// console.log(getHighestIndex([5, 21, 12, 21, 50, 8])); // 4
