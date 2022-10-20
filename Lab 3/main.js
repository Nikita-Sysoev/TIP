function Task1(){
  let x1Coordinate = document.getElementById('x1Coordinate').value;
  let y1Coordinate = document.getElementById('y1Coordinate').value;
  let x2Coordinate = document.getElementById('x2Coordinate').value;
  let y2Coordinate = document.getElementById('y2Coordinate').value;
  let x3Coordinate = document.getElementById('x3Coordinate').value;
  let y3Coordinate = document.getElementById('y3Coordinate').value;
  
  let side1 = Math.sqrt(Math.pow(x1Coordinate - x2Coordinate, 2) + Math.pow(y1Coordinate - y2Coordinate, 2));
  let side2 = Math.sqrt(Math.pow(x1Coordinate - x3Coordinate, 2) + Math.pow(y1Coordinate - y3Coordinate, 2));
  let side3 = Math.sqrt(Math.pow(x3Coordinate - x2Coordinate, 2) + Math.pow(y3Coordinate - y2Coordinate, 2));

  let semiperimeter = (side1 + side2 + side3) / 2;
  
  let square = Math.sqrt(semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3));

  document.getElementById('ansver').innerText = square.toFixed(3);
}


function Task2() {
  let xCoordinate = document.getElementById('xCoordinate').value;
  let yCoordinate = document.getElementById('yCoordinate').value;
  let distance = Math.sqrt(Math.pow(xCoordinate,2) + Math.pow(yCoordinate,2));
  document.getElementById('ansver').innerText = distance.toFixed(3);
};

function Castling(input1, input2){
  let buffer = document.getElementById(input1).value
  document.getElementById(input1).value = document.getElementById(input2).value
  document.getElementById(input2).value = buffer;
}