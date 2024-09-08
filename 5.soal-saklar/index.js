// console.log(tahun.forEach(kabisatGet)
// );
let saklar = document.getElementById("saklar");
const buttonP = document.getElementById("saklar-btn");
let saklarVal;
console.log(document.getElementById("result"));
let result = document.getElementById("result");

function bukuPayment() {
 
  saklarVal = saklar.value;

  if (saklarVal == 0) {

    result.innerHTML = "Saklar mati" ;
  } else if(saklarVal == 1) {
    
    result.innerHTML = "Saklar Hidup" ;
  }else{
    result.innerHTML = "Saklar Tidak memiliki status" ;
    
  }
}
buttonP.addEventListener("click", bukuPayment);
