//display
let result = document.getElementById('result');
let rfBldType = document.getElementById('rfBldType');
let rfHobby = document.getElementById('rfHobby');
let bloodInfo = '';
let hobbyInfo = '';
let birthInfo = '';
let nameInfo = '';

//bloodType
function radioVal() {
  let blType = document.getElementsByName('rd')
  let check = false
  let msg = '';
  msg += 'BloodType <br>'
  for (let i = 0; i < blType.length; i++) {
    if (blType[i].checked) {
      blType[i].value
      check = true;
      msg += blType[i].value + " ";
    }
  }
  rfBldType.innerHTML = '';
  msg += '<br>'
  bloodInfo = msg;
  if (!check) {
    rfBldType.innerHTML = 'Required Field'
    return -1
  }
}

//hobby
function checkBoxVal() {
  let hobby = document.getElementsByName('hcb');
  let check = false
  let msg = '';
  msg += 'Hobby <br>'
  for (let i = 0; i < hobby.length; i++) {
    if (hobby[i].checked) {
      hobby[i].value
      check = true;
      msg += hobby[i].value + " ";
    }
  }
  rfHobby.innerHTML = '';
  msg += '<br>'
  hobbyInfo = msg;
  if (!check) {
    rfHobby.innerHTML = 'Required Field'
    return -1;
  }
}

function birthVal() {
  //birthInfo
  let birthY = document.getElementById('birthY').value
  let birthM = document.getElementById('birthM').value
  let birthD = document.getElementById('birthD').value
  if (birthY == '') {
    rfBirth.innerHTML = 'Year is required'
    return -1;
  } else {
    rfBirth.innerHTML = '';
  }
  if (birthD == '') {
    rfBirth.innerHTML = 'Day is required'
    return -1;
  } else {
    rfBirth.innerHTML = '';
  }
  if (isNaN(birthY) || isNaN(birthM) || isNaN(birthD)) {

    rfBirth.innerHTML = 'year and day should be number'
    return -1;
  } else {
    rfBirth.innerHTML = '';
    birthInfo = 'Birth <br>' + birthY + " " + birthM + " " + birthD + '<br>';

  }
}

function nameVal(){
  let userName = document.getElementById('name').value
  let msg;
  if (userName == '') {
    rfName.innerHTML = 'Name is required'
    return -1;
  } else {
    rfName.innerHTML = '';
    msg = 'Name <br>' + userName + '<br>'
    nameInfo = msg;
  }
}
//resultBtn
let resultButotn = document.getElementById('resultBtn')
let btnclick = false;

resultButotn.onclick = function () {
  let n = radioVal();
  let n2 = checkBoxVal();
  let n3 = birthVal();
  let n4 = nameVal();

  if (n == -1 || n2 == -1 || n3 == -1 || n4 == -1) {
    return;
  }
  result.innerHTML = '';
  result.innerHTML = bloodInfo + hobbyInfo + birthInfo + nameInfo;

}