import "./lib/lib";
import $ from "./lib/lib";

$('#first').click(() => {
    $('div').eq(1).fadeOut(800);
});

$('[data-count="second"]').click(() => {
    $('div').eq(2).fadeOut(800);
});

$('button').eq(2).click(()=>{
    $('.w500').fadeOut(800);
});