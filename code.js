$(document).ready(function(){
    $("form").submit(Greeting);
});

function Greeting(e){
    e.preventDefault();

    let fname = $("input#first-name").val();

    let lname = $("input#last-name").val();

    let rank = $("input[name=rank]:checked").val();

    let colors = $("input[name=rank]:checked").data("color");

    let message = $("div#message").text(`Hello, ${rank} ${fname} ${lname}`);

    $("div#message").css("color", colors);



}
