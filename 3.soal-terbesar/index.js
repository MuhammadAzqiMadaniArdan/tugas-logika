// console.log(tahun.forEach(kabisatGet)
// );
let total = "";
const tahun = [];
let bil1 = document.getElementById("angka-pertama");
let bil2 = document.getElementById("angka-kedua");
let bil3 = document.getElementById("angka-ketiga");
const buttonP = document.getElementById("angka-btn");

let bil1Val,bil2Val,bil3Val;

console.log(document.getElementById("result"));
let result = document.getElementById("result");
let bilKecil = document.getElementById("bilKecil");

function bukuPayment() {

  console.log(bil1,bil2,bil3);

  bil1Val = bil1.value;
  bil2Val = bil2.value;
  bil3Val = bil3.value;

  if (bil1Val >= bil2Val && bil1Val >= bil3Val) {

    result.innerHTML = "Bilangan Terbesar adalah  " + bil1Val + "<br>";

  } else if (bil2Val >= bil1Val && bil2Val >= bil3Val) {
   
    result.innerHTML = "Bilangan Terbesar adalah  " + bil2Val + "<br>";


  } else  {
   
    result.innerHTML = "Bilangan Terbesar adalah  " + bil3Val + "<br>";

  }

  if (bil1Val <= bil2Val && bil1Val <= bil3Val) {

    bilKecil.innerHTML = "Bilangan Terkecil adalah  " + bil1Val + "<br>";

  } else if (bil2Val <= bil1Val && bil2Val <= bil3Val) {
   
    bilKecil.innerHTML = "Bilangan Terkecil adalah  " + bil2Val + "<br>";


  } else {
   
    bilKecil.innerHTML = "Bilangan Terkecil adalah  " + bil3Val + "<br>";

  }

}

buttonP.addEventListener("click", bukuPayment);
