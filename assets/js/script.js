function validateInput(marks){
  let isOk = true;
  marks.each(function(){
    if(isNaN($(this).val())){
      isOk = false;
    }
});
    return isOk;
};

function averageCalc(marks){
//On lui donne des notes et il va nous donner la moyenne  (averageCalc)
  var sum = 0;
// on l'initialise à 0
// stocker la somme des éléments
  var nbMarks = marks.length;
// la variable nombre de notesc qui correspond à la longueur du tableau

marks.each(function(){
// each ne fonctionne pas sur des tableaux que sur des objets jquery donc on met une boucle
  sum += parseInt($(this).val());
  // console.log(sum);
});
  return (sum/nbMarks).toFixed(2);
};
function displayAppreciation(average){
  var appreciation;
    if(average == 20 ){
    appreciation = 'Excellent';
  }
    else if (average >= 16){
    appreciation = 'Très Bien';
    }
    else if (average >=13){
    appreciation = 'Bien';
    }
    else if (average >=10){
    appreciation = 'Moyen';
    }
    else{
      appreciation ='Mauvais';
    };

  $('#appreciation').html (appreciation);
  $('#moyenne').html (`votre moyenne est: ${average}`)
};
$('button').click(function(){
  var marks= $('input');
  if(!validateInput(marks)){
    return false;
  }
  let average = averageCalc(marks);
  displayAppreciation(average);
});

// console.log(averageCalc(marks));
