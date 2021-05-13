 $(".age-button").click(function() {
    let item = $(".your-age").val();
    var a = 2021;
    var b = 16;
    $(".list").append("<li> " + "" + item + "</li>");


});
let counter = 0;
$(".feeling-button").click(function() {
    let feeling = $(".your-feeling").val();  let item = $(".your-age").val();
    counter = counter + 1;
    console.log(counter);
    $(".counter").text(counter);

    $(".list").append("<li> " + "You would be in this flim since your feeling " + feeling
                      + "</li>");
    $(".Energetic").fadeToggle();
});
$(".Energetic").hide();

$(".Frisson").hide();


$(".Lazy").hide();

$(".Wickedness").hide();