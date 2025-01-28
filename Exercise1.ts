// nomor 1 & 2

// Masalah : Tuliskan kode untuk menentukan luas dan keliling persegi panjang

// Notes : 
// 1. Temukan cara untuk menghitung luas dan keliling persegi panjang
// 2. panjang x lebar = luas persegi panjang (rumus)
// 3. 2 x (panjang + lebar) = keliling persegi panjang (rumus)

// Solusi :
// 1. Temukan variabel dan masukkan nilai ke variabel
// 2. Masukkan variabel pada rumus luas persegi panjang
// 3. Masukkan variabel pada rumus keliling persegi panjang

const panjang = 5;
const lebar = 4;
const luas1 = panjang * lebar;
const keliling1 = 2 * (panjang + lebar);
console.log(luas1);
console.log(keliling1);

// nomor 3

// Masalah: Tuliskan kode untuk menentukan diamater, keliling dan luas lingkaran

// Notes :
// 1. Temukan rumus menentukan diameter, luas dan keliling lingkaran
// 2. rumus diameter lingkaran = 2 x jari-jari
// 3. rumus luas lingkaran = 3.14 x jari-jari x jari-jari
// 4. rumus keliling lingkaran = 3.14 x diamater / 2 x 3.14 x jari-jari

// Solusi :
// 1. Temukan variabel dan masukkan nilai ke variabel
// 2. Masukkan variabel pada rumus diameter, luas dan keliling lingkaran

const radius = 7;
const diameter = 2 * radius;
const luas2 = 3.14 * radius ** 2;
const keliling2 = 3.14 * diameter;
console.log(diameter);
console.log(luas2);
console.log(keliling2);

// nomor 4

// Masalah : Tuliskan kode untuk mencari sudut pada segitiga jika 2 sudut sudah diketahui

// Notes:
// 1. Temukan rumus menentukan sudut yang belum diketahui
// 2. Rumus mencari sudut segitiga = 180 - (sudut1 + sudut2)

// Solusi :
// 1. Temukan variabel dan masukkan nilai ke variabel
// 2. Masukkan variabel pada rumus mencari sudut segitiga

const a = 80;
const b = 65;
const c = 180 - (a + b);
console.log(c);

// nomor 6

// Masalah : Tuliskan kode untuk mencari selisih antara tanggal

// Notes :
// 1. Temukan rumus untuk mencari perbedaan pada dua tanggal
// 2. Rumus mencari perbedaan hari date1 - date2

// Solusi :
// 1. Temukan variabel dan masukkan nilai pada variabel
// 2. Masukkan variabel pada rumus.

const date1 = new Date (2022-01-20);
const date2 = new Date (2022-01-22);
const diffdays = Math.abs(date2 - date1);
console.log(diffdays + " days");