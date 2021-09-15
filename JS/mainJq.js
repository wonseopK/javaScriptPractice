let bloodInfo = '';
let hobbyInfo = '';
let birthInfo = '';
let nameInfo = '';


function radioVal() {
  let msg = '';
  if ($('[name="rd"]:checked').length == 0) {
    $('#rfBldType').html('Required Field')
    return -1
  } else {
    msg += $('[name="rd"]:checked').val()
    $('#rfBldType').html('')
    msg += '<br>'
    bloodInfo = msg;
  }
}

function checkBoxVal() {
  let msg = '';
  if ($('[name="hcb"]:checked').length == 0) { //length counts how many items are checked
    $('#rfHobby').html('Required Field')
    return -1
  }
  msg += 'Hobby <br>'
  $('[name="hcb"]:checked').each(function () {
    msg += $(this).val();
  });
  $('#rfHobby').html('')
  msg += '<br>'
  hobbyInfo = msg;
}

function birthVal() {
  //birthInfo
  $('#birthY').val();
  let birthY = $('#birthY').val();
  let birthM = $('#birthM').val();
  let birthD = $('#birthD').val();

  if (birthY == '') {
    $('#rfBirth').html('Year is required');
    return -1;
  } else {
    $('#rfBirth').html('');
  }
  if (birthD == '') {
    $('#rfBirth').html('Day is required');
    return -1;
  } else {
    $('#rfBirth').html('');
  }
  if (isNaN(birthY) || isNaN(birthM) || isNaN(birthD)) {
    $('#rfBirth').html('year and day should be number');
    return -1;
  } else {
    $('#rfBirth').html('');
    birthInfo = 'Birth <br>' + birthY + " " + birthM + " " + birthD + '<br>';

  }
}

function nameVal() {
  let userName = $('#name').val();
  if (userName == '') {
    $('#rfName').html('Name is required');
    return -1;
  } else {
    $('#rfName').html('');
    nameInfo = 'Name <br>' + userName + '<br>'
  }
}


$('#resultBtn').click(function () {
  let n = radioVal();
  let n2 = checkBoxVal();
  let n3 = birthVal();
  let n4 = nameVal();

  if (n == -1 || n2 == -1 || n3 == -1 || n4 == -1) {
    return;
  }

  $('#result').html(bloodInfo + hobbyInfo + birthInfo + nameInfo)
})
hideList()

function hideList(){
  $('#list ul li').hide();
}


