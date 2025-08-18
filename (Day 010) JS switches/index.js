// SWITCH = can be an efficient replacement to many else if statements

/*
let day = 2;

switch(day) {
    case 1:
        console.log("Ini hari Senin");
        break;
    case 2:
        console.log("Ini hari Selasa");
        break;
    case 3:
        console.log("Ini hari Rabu");
        break;
    case 4:
        console.log("Ini hari Kamis");
        break;
    case 5:
        console.log("Ini hari Jumat");
        break;
    case 6:
        console.log("Ini hari Sabtu");
        break;
    case 7:
        console.log("Ini hari Minggu");
        break;
    default:
        console.log(`${day} itu bukan sebuah hari`);
}
*/


////////////////////////////////////////////

let nilai = 100;
let grade;

switch(true) {
    case nilai >= 90:
        grade = "A";
        break;
    case nilai >= 80:
        grade = "B";
        break;
    case nilai >= 70:
        grade = "C";
        break;
    case nilai >= 60:
        grade = "D";
        break;
    case nilai >= 50:
        grade = "E";
        break;
    default:
        grade = "F";
}

console.log(grade);