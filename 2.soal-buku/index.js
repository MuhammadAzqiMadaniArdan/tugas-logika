// console.log(tahun.forEach(kabisatGet)
// );
let total = "";
const tahun = [];
let buku = document.getElementById("buku");
const buttonP = document.getElementById("payment-btn");
let eksemplar = 10;
let harga = 5000;
let totalEks, totalHarga, bukuVal;

console.log(document.getElementById("result"));
let result = document.getElementById("result");

function bukuPayment() {
  bukuVal = buku.value;
  totalEks = bukuVal * eksemplar;

  console.log(bukuVal, totalEks, totalHarga);

  if (totalEks <= 100) {
    totalHarga = harga * totalEks;

    result.innerHTML = "Harga " + bukuVal + " Buku adalah " + totalHarga;
  } else if (totalEks > 100 && totalEks <= 200) {
    hargaPertama = 100 * harga * 0.05;
    totalEks -= 100;
    hargaKedua = Math.floor(totalEks * 100 * 0.15);

    totalHarga = hargaPertama + hargaKedua;

    result.innerHTML = "Harga " +
      bukuVal +
      " Buku adalah " +
      totalHarga +
      "<br>" +
      "Harga Pertama : " +
      hargaPertama +
      "<br>" +
      "Harga Kedua : " +
      hargaKedua +
      "<br>";
    console.log(totalHarga);
  } else if (totalEks > 200) {
    hargaPertama = Math.floor(100 * harga * 0.07);
    totalEks -= 100;
    hargaKedua = Math.floor(totalEks * 100 * 0.17);
    totalEks -= 100;
    hargaKetiga = Math.floor(totalEks * 100 * 0.27);

    totalHarga = hargaPertama + hargaKedua + hargaKetiga;

    result.innerHTML =
      "Harga " +
      bukuVal +
      " Buku adalah " +
      totalHarga +
      "<br>" +
      "Harga Pertama : " +
      hargaPertama +
      "<br>" +
      "Harga Kedua : " +
      hargaKedua +
      "<br>" +
      "Harga Ketiga : " +
      hargaKetiga;

    console.log(totalHarga);
  }
}

buttonP.addEventListener("click", bukuPayment);
