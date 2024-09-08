// console.log(tahun.forEach(kabisatGet)
// );
let tinggi = document.getElementById("tinggi");
const buttonP = document.getElementById("tinggi-btn");

console.log(document.getElementById("result"));
let result = document.getElementById("result");
let tinggiVal;

function bukuPayment() {
  tinggiVal = parseFloat(tinggi.value);
  
  if (tinggiVal <= 500.0) {

    result.innerHTML = "Status Aman";
    
  } else if (tinggiVal > 500.0 && tinggiVal <= 600.0) {
    result.innerHTML = "Status WASPADA";
    
  } 
   else if (tinggiVal > 600.0 && tinggiVal <= 650.0) {
    result.innerHTML = "Status SIAGA 2";
    
  } 
   else{
    result.innerHTML = "Status SIAGA 1";
    
  } 
}

buttonP.addEventListener("click", bukuPayment);
