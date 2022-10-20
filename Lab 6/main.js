function Task1() {
  let array = [0];
  let input;

  while (true) {
    input = Number(prompt("Введите число:"));
    if (!input){break;}
    array.push(input);
  }
  alert(`Сумма всех введенных чисел: ${array.reduce((previous, current) => previous + current)}`);
};

function Task2(){
  let A = Number(document.querySelector('#A').value);
  let B = Number(document.querySelector('#B').value);
  const size = Number(document.querySelector('#size').value);
  const input = document.querySelector('#input');
  const array = document.querySelector('#array');
  let buffer = [];

  if (A > B){
    [A, B] = [B, A];
  }
  if (size < 0){
    alert('Длинна массива не может быть меньше 0!');
    return;
  }
  
  for (let i = 0; i < size; i++) {
    buffer.push(Math.floor(Math.random() * B) + A);
  }
  input.value = buffer;

  const isEven = number => !(number & 1);
  array.value = filt(buffer, isEven);
};

function filt(array, func) {
  return array.filter(el => func(el));
}