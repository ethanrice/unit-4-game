var random_result;
var lost = 0;
var win = 0;
var previous = 0;

$(".infinitystone").attr('class');

var startGame = function() {}
    random_result = Math.floor(Math.random() * 69) + 30);


$("#result").html('Get this Number: ' + random_result);

for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;


    var infinitystone = $("<div>");
        infinitystone.attr({
            "class": 'infinitystone',
            "data-random": random
        });

        infinitystone.hmtl(random);



    $(".infinitystones").append(infinitystone);

}


$(".infinitystone").on('click', function () ) {

    var num = parseInt($(this).attr('data-random'));

    previous =+ num;

    if(previous > random_result) {
        lost--;

        $("#lost").hmtl(lost);
    }
    else if(previous === random_result){
        win++;

        $("#win").html(win);
    }


});