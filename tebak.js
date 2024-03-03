//pilih angka random yang mau di tebak
let jawaban = Math.round(Math.random() * 5 + 1 )

alert('tebak angka dari 1-10')

//pilih tebakan user
// dengan di beri kesempatan 3 kali
let kesempatan = 3;
let hasil = '';
for(let i = kesempatan; i >= 1 ; i--){
  let p = prompt('Masukan angka tebakan mu 1-5')
  if ( p == jawaban) {
    alert('jawaban anda benar')
    i = 1;
  } else if (p >= jawaban) {
    alert(`Terlalu tinggi , anda memiliki ${i} kesempatan`)
  } else if (p <= jawaban) {
    alert(`Terlalu rendah , anda memiliki ${i} kesempatan`)
  } else {
    alert(`${p} bukan angka, kesempatan anda ${i}`)
  }
}

if (p == jawaban) {
  alert(' selamat atas jawaban benar anda ')
}
//kondisi jika tebakan lebih kecil / lebih besar

//hasil
