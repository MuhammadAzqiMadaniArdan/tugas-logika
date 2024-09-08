// console.log(tahun.forEach(kabisatGet)
// );
let bil1 = document.getElementById("bil-pertama");
let bil2 = document.getElementById("bil-kedua");
let bil3 = document.getElementById("bil-ketiga");
let bilDiskon = 100000;
const buttonP = document.getElementById("bil-btn");

let bil1Val,bil2Val,bil3Val,totalBil,diskon;

console.log(document.getElementById("result"));
let result = document.getElementById("result");
let bilKecil = document.getElementById("bilKecil");

function bilPayment() {

  
  bil1Val = parseInt(bil1.value);
  bil2Val = parseInt(bil2.value);
  bil3Val = parseInt(bil3.value);
  
  totalBil = bil1Val + bil2Val + bil3Val;
  console.log(bil1,bil2,bil3,totalBil,bil1Val);

  if (totalBil >  bilDiskon) {

    diskon = totalBil * 0.1;
    
    totalBil -= diskon;

    result.innerHTML = "Total yang harus dibayar  " + totalBil + "<br>";
    
  } else  {
    
    result.innerHTML = "Total yang harus dibayar  " + totalBil + "<br>";

  }

  

}

buttonP.addEventListener("click", bilPayment);
