

let jam = document.getElementById("jam");
const buttonP = document.getElementById("gaji-btn");
let lembur1 = 100000;
let lembur2 = 200000;
let lembur3 = 300000;

const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}

let totalEks, totalHarga, bukuVal,jamVal;

console.log(document.getElementById("result"));
let result = document.getElementById("result");


function bukuPayment() {

  jamVal = parseInt(jam.value);
  console.log(jamVal);

  if (jamVal < 6) {

    result.innerHTML = "Gaji Lembur Sebesar " + rupiah(lembur1) ;
    
  } else if (jamVal == 6) {
    
    result.innerHTML = "Gaji Lembur Sebesar " + rupiah(lembur2) ;
  } else {
    
    result.innerHTML = "Gaji Lembur Sebesar " + rupiah(lembur3) ;
  }
}

buttonP.addEventListener("click", bukuPayment);
