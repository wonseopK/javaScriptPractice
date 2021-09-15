let newBtn1;

$('#listGroup .list button').on('click', function () {
    $('#listGroup .list:eq(1)').html('<button id ="btns">다음요소1</button>');
});

$(document).on('click','#btns', function () {
    $('#listGroup .list:eq(2)').html('<button id ="btns2">다음요소2</button>');
})

$(document).on('click','#btns2', function () {
    $('#listGroup .list:eq(3)').html('document practice!!');
})

