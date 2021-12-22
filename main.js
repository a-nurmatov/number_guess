function start(){
  let inputs = document.getElementsByClassName('inputs');
  inputs[0].style.display = 'flex'
  inputs[1].style.display = 'flex'
  document.getElementById('start').style.display = 'none';
  document.getElementById('submit').style.display = 'block'
}

var tries;
var used = 0;
var max;
var min = 1;
var g;

function submit(){
  max = document.getElementById('max').value;
  tries = Math.ceil(Math.log2(parseInt(max))) + 1;
  document.getElementById('tries').innerHTML = 'I need maximum ' + tries + ' tries to find the number.'
  document.getElementById('tries').style.padding = "10px"
  let inputs = document.getElementsByClassName('inputs');
  inputs[0].style.display = 'none'
  inputs[1].style.display = 'none'
  document.getElementById('submit').style.display = 'none';
  document.getElementById('guess').style.display = 'block';
}

function guess() {
  tries--
  used++
  document.getElementById('tries').innerHTML = 'I have got ' + tries + ' chances and my guess is:'
  g = Math.ceil((max - min) / 2);
  document.getElementById('answer').style.display = 'block'
  document.getElementById('answer').innerHTML = g;
  document.getElementById('guess').style.display = 'none';
  document.getElementById('high-low').style.display = 'flex';
  document.getElementById('correct').style.display = 'block';
}

function high(){
  tries--
  used++
  if (tries > -1) {
    if (tries == 0) {
      document.getElementById('tries').innerHTML = 'I have successfully found the number you thought using ' + used + ' tries!'
      document.getElementById('answer').style.backgroundColor = "#008000b0"
    }
    else document.getElementById('tries').innerHTML = 'I have got ' + tries + ' chances and my guess is:'
    max = g;
    g = Math.ceil((max - min == 1 ? 0 : max - min) / 2) + min;
    document.getElementById('answer').innerHTML = g;
  }
}

function low(){
  tries--
  used++
  if (tries > -1) {
    if (tries == 0) {
      document.getElementById('tries').innerHTML = 'I have successfully found the number you thought using ' + used + ' tries!'
      document.getElementById('answer').style.backgroundColor = "#008000b0"
    }
    else document.getElementById('tries').innerHTML = 'I have got ' + tries + ' chances and my guess is:'
    min = g;
    g = Math.ceil((max - min) / 2) + min;
    document.getElementById('answer').innerHTML = g;
  }
}


function correct(){
  document.getElementById('tries').innerHTML = 'I have successfully found the number you thought using ' + used + ' tries!'
  document.getElementById('answer').style.backgroundColor = "#008000b0"
  document.getElementById('correct').style.backgroundColor = '#008000b0';
  document.getElementById('high-low').style.display = 'none';
  document.getElementById('reload').style.display = 'block';
}

function reload(){
  window.location.reload(true);
}