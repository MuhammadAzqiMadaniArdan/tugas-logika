// console.log(tahun.forEach(kabisatGet)
// );
let total = "";
const tahun = [];
let bil = document.getElementById("bil");
const buttonP = document.getElementById("result-btn");
let bilVal;

console.log(document.getElementById("result"));
let result = document.getElementById("result");
let negatif = document.getElementById("negatif");
let genap = document.getElementById("genap");

function bukuPayment() {
 
  bilVal = bil.value;

  if (bilVal == 0) {
   
    result.innerHTML = "Bilangan Adalah " + bilVal + "<br>";
    
  } else {
    result.innerHTML = "Bilangan Bukan Angka 0 " +  "<br>";
    
  }

  if(bilVal < 0 ){
    negatif.innerHTML = "Bilangan adalah Negatif " + "<br>";
  }else{
    negatif.innerHTML = "Bilangan adalah Positif " + "<br>";

  }

  if(bilVal % 2 == 0 ){
    genap.innerHTML = "Bilangan adalah Genap " + "<br>";
  }else{
    genap.innerHTML = "Bilangan adalah Ganjil " + "<br>";

  }
  
}

buttonP.addEventListener("click", bukuPayment);
