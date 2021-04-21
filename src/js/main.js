import "./lib/lib";
import $ from "./lib/lib";

$('#first').click(() => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(()=>{
    $('.w500').fadeToggle(800);
});