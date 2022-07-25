/*Alert*/
/*alert('yakin data dihapus?');*/
/* ======================================*/


/*prompt*/
/*var nama = prompt('masukkan nama:');
alert(nama);*/
/* ======================================*/



/*confirm*/
/*var tes = confirm ('anda yakin hapus??');
if ( tes === true) {
  alert('user menekan OK!');
} else {
  alert('user menekan CANCEL!');
}*/
/* ======================================*/




/*var lagi = true;

while ( lagi === true ) {
  var nama = prompt('masukkan nama anda :');
  alert('hallo ' + nama);
  
  lagi = confirm ('coba lagi?');
}
alert('terima kasih');*/
/* ======================================*/




/* Perulangan while */
/*var nilai = 1;
while(nilai <= 10) {
  console.log('Angkot no. ' + nilai + ' beroperasi dengan baik.');
nilai++;
}*/
/* ======================================*/




/* Perulangan For*/
/*Rumus : for(var awal=1; awal=10; nilai++) {
          console.log('hello world');
}
/* ======================================*/




/*Latihan Soal*/
/* Juragan angkot dimana 6 angkot beroperasi dengan baik sedangkan 4 angkot tidak beroperasi*/
/* var JmlAngkot = 10;
 var AngkotOpr = 6;
 var NoAngkot = 1;
 
 while(NoAngkot <= AngkotOpr ) {
   console.log('Angkot No. ' + NoAngkot+ ' beroperasi dengan baik');
   NoAngkot++;
 }
 for ( NoAngkot=AngkotOpr + 1; NoAngkot <= JmlAngkot; NoAngkot++) {
   console.log('Angkot No. ' + NoAngkot + ' sedang tidak beroperasi');
 }
*/
/* ======================================*/



/*var s = '';
for( var i = 10; i > 0; i-- ) {
  for( var j = 0; j < i; j++ ) {
    s += '*';
  }
  
  s += '\n';
  
}
console.log(s);*/
/* ======================================*/





/* Pengkondisian / Percabangan */
/*Rumus 

if(kondisi) {
  aksi --> lakukan aksi jika kondisi bernilai true
}
...keluar dari block jika kondisi bernilai false
*/
/* ======================================*/




/*var angka = 1;
if (angka === 1) {
  alert('anda memasukkan angka');
}*/
/* ======================================*/





/*Latihan Pengkondisian*/
 
 /*var JmlAngkot = 10;
 var AngkotOpr = 6;
 
 for (var NoAngkot = 1; NoAngkot <= JmlAngkot; NoAngkot++) {
   if (NoAngkot <= 6) {
     console.log('Angkot No. ' + NoAngkot + ' beroperasi dengan baik');
   } else {
     console.log('Angkot No. ' + NoAngkot + ' sedang tidak beroperasi');
   }
 }
*/
/* ======================================*/




/* Latihan if else*/
/*Rumus 

if(kindisi 1) {
  aksi 1
} else if {
  aksi 2
} else {
  aksi 3
}

*/
/* ======================================*/






/*Latihan Else If*/
/*
var lagi = true;
while ( lagi === true ) {
var angka = prompt('Masukkan Angka');

if (angka % 2===0) {
  alert(angka + ' Adalah bilangan GENAP');
} else if (angka % 2===1) {
  alert(angka + ' Adalah Bilangan GANJIL');
} else {
  alert('yang anda masukkan bukan angka!');
}

lagi = confirm ('Yakin Anda ingin mencoba lagi?');
}
alert('Terima Kasih telah menggunakan program saya');
*/
/* ======================================*/




/* Switch */

/*var bil = prompt('masukkan angka: ');

if( bil == 1) {
  alert('anda mamasukkan angka 1');
} else if( bil == 2) {
  alert('anda memasukkan angka 2');
} else if ( bil == 3 ) {
  alert('anda memasukkan angka 3');
} else {
  alert('angka yang memasukkan salah');
}*/
/* Note : ( == | operator perbandingan) (=== | Operator Identitas ). jika ketika memakai == maka tidak di kasih string, tetapi kalau memakai === isi nilai harus pakai string '' / alternatif lain pakai perseInt
  Contoh : 1. if( bil == 1); tanpa string
           2. if( bil === '1'); pakai string
           3. var bil = parseInt(prompt('angka'));
              if(bil = 1);

*/
/* ======================================*/




/* Penggunaan Switch */
/*var ulang = true;
while(ulang) {
  
var item = prompt(' masukkan nama makanan/minuman : \n (cth : nasi, daging, susu, hamburger, softdrink)');

switch (item) {
  case 'nasi':
    alert( item + ' adalah makanan/minuman SEHAT');
    break;
  case 'daging':
    alert( item + ' adalah makanan/minuman SEHAT');
    break;
  case 'susu':
    alert( item + ' adalah makanan/minuman SEHAT');
    break;
  case 'hamburger':
    alert( item + ' adalah makanan/minuman SEHAT');
    break;
  case 'softdrink':
    alert( item + ' adalah makanan/minuman TIDAK SEHAT');
    break;
  default:
  alert('anda salah memasukkan makanan/minuman yang salah!');
  break;
}
 ulang = confirm ('Yakin Anda ingin mencoba lagi?');
}
 alert('Terima Kasih telah menggunakan program saya');*/
 /* ======================================*/
 
 
 
 
 
 
 
 /* Materi Function */
// function volumeKubus(a, b) {
//   var volumeA;
//   var volumeB;
//   var total

//   volumeA = a * a * a;
//   volumeB = b * b * b;
   
//   total = volumeA + volumeB;
//   return total;
// }
 
// volumeKubus(8, 3);
/* ======================================*/




/*function tambah(a,b) {
  return a + b;
}
 var a = parseInt(prompt('Masukkan Nilai 1 : '));
 var b = parseInt(prompt('Masukkan Nilai 2 : '));
  var hasil = tambah(a,b);
  alert('Maka Hasilnya = ' + hasil);*/
/* ======================================*/






/*function tambah(a,b) {
  return a + b;
}
function kali(a,b) {
  return a * b;
}
  var hasil = kali(tambah(1,2), tambah(3,4));
  alert('Maka Hasilnya = ' + hasil);*/
/* ======================================*/




/*function tambah() {
  var hasil = 0;
  for( var i = 0; i < arguments.length; i++ );
  {
    hasil += arguments[i];
  }
  return hasil;
  
}
var coba = tambah(1,2,3);
console.log(coba);*/
/* ======================================*/




  
  
 
 /* Parameter & Argument */
 /*function tambah() {
   return arguments;
 }
 var coba = tambah(5,10,20,"sayang",false);
 console.log(coba);*/
 /* ======================================*/
 
 
 
 /* Refactoring / mempersingkat kode */
 /*function volumeKubus(a, b) {
   
   return a*a*a + b*b*b;
 }
 alert(volumeKubus(8,5));*/
 /* ======================================*/
 
 
 
 /* Materi Scope */
 /* Global Scope / window scope */
 /*var i = 1;
 function tes() {
   var b = 2;
   console.log(i);
 }
 tes();*/
 /* ======================================*/
 
 
 
 /*var a = 1;
 function tes() {
   // name conflict
    var a = 2;
 }
 tes();
 console.log(a);*/
 /* ======================================*/
 
 
 
 
 /* Materi Rekursif */
 /*function angka(n) {
   console.log(n);
   return angka (n-1);
 }
 angka(10);*/
/* ======================================*/



/* Base Case */
/*function cetakA(n) {
  if (n === 0 ) {
    return;
  }
  console.log(n);
  cetakA(n-1);
}
cetakA(10);*/
/* ======================================*/



/* Faktorial */

  /*function faktor(n) {
    if (n === 0 ) return 1;
    return n * faktor (n -1);
  }*/
/* ======================================*/




/* Materi function declaration vs function expression */

/* 1. function deklaration*/
/* Rumus = function identifier (parameter List optional) { function body} */

/* contoh function declaration */
/*function pesan(nama) {
  alert('halo' + nama); 
}*/

/* 1. function expression*/
/* Rumus = function identifier optional (parameter opt) { function body} */

/* Contoh Function Expression */
/*var msg = function (msg) {
  alert('halo' + nama)
}
*/
/* ======================================*/





/* Materi array */
/* kasus codingan */
/*var hari = ['senin', 'selasa', 'rabu'];*/


/*key & value pair*/
/*var angka = [];
    angka = ['A', 'B', 'C', 'Z'];
    console.log(angka[0]);*/
/*======================================*/

/*var Myfunc = function() {
  alert('hello');
}
var Myarr3 = ['teks', 2, false, Myfunc, [4,5,6]];
console.log(Myarr3[4][1]);*/

/* ======================================*/



/* Manipulsai Array */
/* 1. Menambah Isi Array */

/*var arr = [];
arr[0] = "adi";
arr[1] = "user";
arr[6] = "afrik";
console.log(arr);*/


/* 2. Menghapus Isi Array */
/*var ar = ["Mukhamad", "Adi", "Tarmizi"];
ar[1] = undefined;
console.log(ar);*/

/* 2. Menampilkan Isi Array */
/*var arr = ["Mukhamad", "Adi", "Tarmizi"];
  for ( var i = 0; i < arr.length; i++ ) {
    console.log(arr[i])
  }
*/

/* ======================================*/






/* ======================================*/
/* Materi Method Pada Array */
/* 1. Join */
/*var a = ['mukhamad', 'adi', 'tarmizi'];*/
/*console.log(a.join('-'));*/

/* 2. Push & Pop / menambah atau menghapus */
/*a.push(('afrik'));*/
/*a.pop();
console.log(a.join('-'));*/


/* 3. Unshift & Shift | menambahkan objek di depan atau menghapus object di depan */
/*a.unshift('nabila');*/
/*a.shift();
console.log(a.join('-'));*/


/* 4. splice*/
/*splice(indexAwal, MauDihapusBrp, elemenBaru 1 , elemenBaru 2....)*/

/*a.splice(1,2,'kamu', 'afrik')
console.log(a.join('-'));
*/

/* 5. Slice */
/* Slice (awal,akhir)*/
/*var ar = a.slice(1,4);
console.log(ar.join('-'));
*/

/* 6. foreach & map */

/* foreach */
/*var angka = [1,2,3,4,5,6,7,8];
angka.forEach(function(e) {
  console.log(e);
});
*/
/*var nama = ['mukhamad', 'adi', 'tarmizi'];
nama.forEach(function(e,i) {
  console.log('mahasiswa ke-' + (i+1) + ' adalah: ' + e);
});
*/

/* map */

/*var angka = [1,2,5,3,6,8,4];*/
/*var angka2 = angka.map(function(e) {
  return e * 2;
});
console.log(angka2.join('-'));*/


/* sort */

/*angka.sort(function(a,b) {
  return a-b;
})
console.log(angka.join('-'));
*/


/* filter & find */

/* contoh filter */
/*var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.filter(function(x) {
  return x>5;
})
console.log(angka2.join('-'));
*/

/* contoh find */
/*var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x) {
  return x>5;
})
console.log(angka2);*/
/* ======================================*/


/* Materi Object */
/* Membuat Object */
/*var mhs = {
  nama : "M Adi Tarmizi",
  umur : 21,
  Nilai : [80.2, 90.3, 100],
  alamat : {
    jalan : "Erlangga Gg 8",
    kota : "Pasuruan",
    Provinsi : "Jatim"
  }
};*/
/* cek console mhs.nama */





/*/* Create Function */
function introduce() {
  // about me 
  var profile = {
    nama : 'Mukhamad Adi Tarmizi',
    birthOfDate : 'dd-mm-yy',
    Jurusan : 'MIPA',
    Github : "https://github.com/maditarmizi",
    MyRepository : "https://github.com/maditarmizi/project1",
    Status : "FrontEnd Developer",
    skill : "HTML | CSS | Javascript",
    Hobby : ['Eat', 'Sleep', 'Coding', 'Editing', 'Repeat'],
    alamat : {
      Jalan : 'Jl. Erlangga Gg. 6',
      Kota : 'Pasuruan',
      Provinsi : 'Jawa Timur'
    }
  }
  // Kembalikan Isi Array & Keluar dari function
  return profile;
}
// Show Result
console.log(introduce());