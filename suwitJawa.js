var tanya = true;
while( tanya ) {

// menangkap pilihan player
var p = prompt('Pilih : Gajah, Semut, Orang');


// menangkap pilihan computer 
// membangkitkan bilangan random

var comp = Math.random();
if( comp < 0.34 ) {
  comp = 'Gajah';
} else if( comp >= 0.34 && comp < 0.67) {
  comp = 'Orang';
} else {
  comp = 'Semut';
}

var hasil = '';
// menentukan rules
if( p == comp ) {
  hasil = 'SERI!'
} else if( p == 'Gajah') {
  /*if( comp = 'Orang') {
    hasil = 'MENANG!';
  } else {
    hasil = 'KALAH!';
  }*/
  
  hasil = ( comp == 'Orang') ? 'MENANG!' : 'KALAH!';
  
} else if( p == 'Orang' ) {
  hasil = ( comp == 'Gajah' ) ? 'MENANG!' : 'KALAH!';
} else if( p == 'Semut') {
  hasil = ( comp == 'Orang' ) ? 'MENANG!' : 'KALAH!';
} else {
  hasil = 'Anda telah memasukkan pilihan yang salah!'
}
// tampilkan hasilnya
alert('Kamu memilih : ' + p + ' dan komputer memilih ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);
  
  
  tanya = confirm('lagi?');

}

alert('terima kasih sudah bermain');

