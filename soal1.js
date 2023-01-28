const prompt = require('prompt-sync')({sigint: true});
console.log("Program untuk mengetahui hasil akar pangkat 2")

var ulangi = prompt('Siapkan angkanya! '); //input ya
console.log("Start!")
while(ulangi){
    var jawab = prompt("Masukan angka akar dari :  ");
    if(jawab < 0){
        console.log("Tidak bisa input bilangan negatif")
    } else if(jawab % 2 === 1) {
        console.log("Tidak bisa input bilangan ganjil")
    } else if(jawab % 2 === 0) {
        console.log("Hasil pangkat dua dari : " + Math.sqrt(jawab))
        console.log("Done!")
        ulangi = false;
    }
 }