/*
Esercizio di oggi: Simon Says
repo/cartella js-simon
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzae il programma.
Buon lavoro
*/


$(document).ready(function(){
  var correctNums = [];
  var userNums = [];


  //genera e visualizza tramite alert 5 numeri random
  for(var i=0; i<5; i++){
    var currentNum = randomIntBetween(1, 100);
    alert('Memorizza la sequenza di numeri:' + currentNum);
    correctNums.push(parseInt(currentNum));
    console.log('currentNum', currentNum);
  }
  console.log('correctNums', correctNums);

  //genero la variabile che definisce i secondi del countdown
  var timeInSeconds = 5;

  //riporto sulla pagina il countdown
  $('#time').text(timeInSeconds);

  //imposto il lasso di tempo (1 secondo) per far cambiare il numero del countdown nella pagina
  var interval = setInterval(function(){
  	timeInSeconds--;
  	$('#time').text(timeInSeconds);
  }, 1000)


  //al termine del countdown faccio inserire all'utente tramite prompt i numeri che si ricorda
  setTimeout(function(){
  	clearInterval(interval);
    for(var i=0; i<5; i++){
      var userNum = prompt('Inserisci i numeri mostrati (uno alla volta):');
      userNums.push(parseInt(userNum));
      console.log('userNum', userNum);
    }
    console.log('userNums', userNums);

    //faccio vedere all'utente i numeri corretti e quelli da lui inseriti
    $('#correct').text('Numeri Esatti: ' + correctNums);
    $('#user').text('Numeri Digitati: ' + userNums);


    //confronto i numeri corretti con quelli inseriti dall'utente e gli mostro il risultato
    for(var i=0; i<5; i++){
      if(correctNums[i] === userNums[i]){
        $('#results').append('<h2>il numero in posizione numero ' + (i+1) + ' è CORRETTO</h2>');
      } else {
        $('#results').append('<h2>il numero in posizione numero ' + (i+1) + ' è SBAGLIATO</h2>');
      }
    }
  }, timeInSeconds*1000 + 1)

})
