// J-TASK:
// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
function findLongestWord(sentence: string): string {
  const words = sentence.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("I come from Uzbekistan"));

// TASK G
// function getHighestIndex(arr: number[]): number {
// if (arr.length === 0) return -1; // Agar array bo'sh bo'lsa, -1 qaytaradi
// const max = Math.max(...arr); // Arrayning eng katta qiymatini topadi
// return arr.indexOf(max);      // Eng katta qiymatga tegishli birinchi indeksni qaytaradi
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
// console.log(getHighestIndex([10, 20, 30, 20]));  // 2
// console.log(getHighestIndex([]));               // -1

// TASK H

// function getPositive(arr: number[]): string {
// return arr
// .filter(num => num > 0) // Faqat musbat sonlarni filtrlash
// .join("");             // Array elementlarini bitta stringga birlashtirish
// }

// console.log(getPositive([1, -4, 2])); // "12"
// console.log(getPositive([-3, -7, 0])); // ""
// console.log(getPositive([5, 10, 15])); // "51015"

// H2 TASK

// function getDigits(input: string): string {
// Argumentdagi faqat raqamlarni ajratib olish uchun filter qilamiz
// return input.split('').filter(char => /\d/.test(char)).join('');
// }

// Misol
// const result = getDigits("m14i1t");
// console.log(result); // Output: "141"

/*Project Standarts:
-Logging standarts
-Naming standarts
  function, methd, variable => CAMEL    goHome
  class => PASCAL    MemberService
  folder, file =. KEBAB
  css => SNAKE       button_style

-Error handling

 */
