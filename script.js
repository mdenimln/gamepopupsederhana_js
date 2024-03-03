let lagi = true;
while ( lagi ) {
  //pilihan user
  let p = prompt('  MILIH! ka baleg milih na  : gunting , kertas , batu')
  
  //pilihan computer
  let comp = Math.random()
  if ( comp < 0.34 ) {
    comp = 'gunting';
  } else if ( comp >= 0.34 && comp < 0.67 ) {
    comp = 'kertas';
  } else {
    comp = 'batu';
  }
  
  
  //
  let hasil = '';
  if( p == comp ) {
    hasil = 'SERI!';
  } else if ( p == 'gunting' ) {
    /*if (comp == 'kertas'){
      hasil = 'MENANG!'
    } else {
      hasil = 'KALAH!'
    }
    */
    hasil = (comp == 'kertas') ? 'MENANG!' : 'ELEH!'; 
  } else if ( p == 'kertas' ) {
    hasil = (comp == 'batu') ? 'MENANG!' : 'ELEH!';
  } else if ( p == 'batu' ) {
    hasil = (comp == 'gunting') ? 'MENANG!' : 'ELEH!';
  } else {
    hasil = ' Teu Baleg , ceuk aing ge ka baleg milih na ';
  }
  
  alert(` Sia milih  '${p}'   Ari Komputer milih '${comp}' 
 Jadi sia ${hasil}`);

 let puji = '';
 if (hasil == 'MENANG!') {
   puji = 'ANJAY BEKAH'
 } else if (hasil == 'ELEH!') {
   puji = 'MAMAM KU SIA'
 } else if (hasil == 'SERI!'){
   puji = 'TONG SEURI GOBLOK'
 } else {
   puji = 'ENTE SUKA KADANG KADANG'
 }
   
 alert(puji)
    
  lagi = confirm('AREK MAEN DEUI MOAL??');
}

alert('NUHUN AH KANU TOS MAEN')