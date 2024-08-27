
// console.log(tahun.forEach(kabisatGet)
// );
let Kabisat = "" ;
let Biasa = "" ;
const tahun = [];
let i;
for(i = 1600;i <= 2024;i += 4){
    tahun.push(i);
}
tahun.forEach(kabisatGet);

document.getElementById("kabisat").innerHTML = Kabisat;
document.getElementById("biasa").innerHTML = Biasa;

function kabisatGet(item,index){
    if(item % 400 == 0 ){
        Kabisat += "Tahun" + ": " + item +" Kabisat" + "<br>" ; 

    }else if(item % 400 !== 0 && item % 100 == 0){
        Biasa += "Tahun" + ": " + item +" Bukan" + "<br>"; 

    }else if(item % 400 !== 0 && item % 100 !== 0 && item % 4 == 0 || item % 4 == 0)
    {
        Kabisat += "Tahun" + ": " + item +" Kabisat" + "<br>"; 
    }else{
        Biasa += "Tahun" + ": " + item +" Bukan" + "<br>"; 

    }
}