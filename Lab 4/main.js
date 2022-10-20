function Task1(){
  let input = confirm('Выбери на чьей ты стороне!');
  
  if(input === true){
    alert('Вы выбрали ОК!')
  }
  else{
    alert('Вы выбрали Отмена!')
  }
};


function Task2(xLength, yLength) {
  let result = new Array(yLength); 

  for(let i = 0; i < yLength; i++){
    result[i] = '';
    
    for(let j = 0; j < xLength; j++){
      result[i] += ((i + j) % 2) ? '#' : ' ';
    }
  }

  document.getElementById('result').style.display = 'inherit';
  document.getElementById('result').innerText = result.join('\n');
};