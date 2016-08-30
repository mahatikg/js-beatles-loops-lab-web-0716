function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}



function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while(i < facts.length){
    arr.push(facts[i]+'!!!');
    i++;
  }
  return arr;
}



function iLoveTheBeatles(number){
  var arr = [];
  var i = 0;
  if (number > 15) {return "I love the Beatles!"}
  do {
     i += 1;
     arr.push("I love the Beatles!")
  } while (i <= number);
  return arr;
}
