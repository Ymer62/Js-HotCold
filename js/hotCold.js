var res = document.getElementById('res1');
var x = Math.floor(Math.random()*100+1);
var nbressai=0;

console.log(x);

function envoie(){
  var writenbr = document.getElementById("bout1").value;

  console.log(writenbr);

  nbressai++;

var diff = Math.abs(writenbr-x);

console.log(diff);

  if(diff>20){
  res.innerHTML = "froid";
  document.body.style.backgroundColor = 'blue';
  }

  if(diff<20){
    res.innerHTML = "tiede";
    document.body.style.backgroundColor = 'orange';
    document.getElementById('titre').style.color = 'black'
  }

  if(diff<10){
    res.innerHTML = "chaud";
    document.body.style.backgroundColor = 'red';
    document.getElementById('titre').style.color = 'black'
  }

  if(writenbr==x){
  alert("Félicitation, tu as trouver en :" + nbressai + "essai");
  location.reload();
  }
  if(nbressai==10){
  alert("Désoler,vous avez perdu vous avez effectuer : " + nbressai + " essai");
  location.reload();
  }
}
