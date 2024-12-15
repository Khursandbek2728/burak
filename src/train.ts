console.log("Hello World!");

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

function getDigits(input: string): string {
    // Argumentdagi faqat raqamlarni ajratib olish uchun filter qilamiz
    return input.split('').filter(char => /\d/.test(char)).join('');
}

// Misol
const result = getDigits("m14i1t");
console.log(result); // Output: "141"