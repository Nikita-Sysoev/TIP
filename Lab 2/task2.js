function Task2() {
  let aSide = prompt('Введите длину катета А');
  let bSide = prompt('Введите длину катета B');
  let cSide = Math.sqrt(Math.pow(aSide, 2) + Math.pow(bSide, 2))
  alert('Длина гипотенузы C: ' + cSide);
};