// String method = allow you to manipulate and work with text (strings)

let userName = " Saya tegar dan saya ingin belajar bersama tentang javascript            ";


/*charAt()
let userName = "TegarBro";
console.log(userName.charAt(0)); //'S'
*/


/*indexOf()
//Memunculkan nilau pertama pada suatu nilai yang dicari
console.log(userName.indexOf("javascript")); //7
*/


/*lastIndexOf()
//Memunculkan nilai terakhir dari nilai yang dicari
console.log(userName.lastIndexOf("tegar"));
*/


/*length()
console.log(userName.length);
//Jumlah semua karakter yang ada
*/


/*trim()
userName = userName.trim();
console.log(userName);
//Menghilangkan white space
*/


/*toUpperCase()
userName = userName.toUpperCase();
console.log(userName);
//Membuat semua kalimat menjadi kapital
*/


/*toLowerCase()
userName = userName.toLowerCase();
console.log(userName);
//Membuat semua kalimat menjadi huruf kecil
*/


/*repeat()
userName = userName.repeat(2);
console.log(userName);
//mengkalikan nilai suatu fungsi sebanyak yang kita ingini
*/


//startsWith()
/*let result = userName.startsWith(" ");

if(result) {
    console.log("Your username can't begin with' '");
}
else {
    console.log(userName);
}
*/
//Metode yang digunakan untuk memeriksa apakah sebuah string dimulai dengan karakter atau substring tertentu. Metode ini mengembalikan nilai true atau false.


//endsWith()
/*let result = userName.endsWith(" ");

if(result) {
    console.log("Your username can't end with' '");
}
else {
    console.log(userName);
}
*/
//Metode hampir mirip dengan startsWith, tetapi ini khusus untuk bagian belakang


//includes()
/*let result = userName.includes(" ");

if(result) {
    console.log("Your username can't include ' '");
}
else {
    console.log(userName);
}
*/


//repaceAll()
/*let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "~");

console.log(phoneNumber);
*/
//



//padStart()
/*let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padStart(15, "0");

console.log(phoneNumber);
*/
//


//padEnd()
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);
//


