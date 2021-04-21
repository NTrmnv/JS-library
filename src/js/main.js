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

$('.wrap').html(`
    <div class="dropdown">
        <buttons class="btn btn-primary dropdown-toggle" id="dropdown-menu-btn">Dropdown btn</buttons>
        <div class="dropdown-menu" data-toggle-id="dropdown-menu-btn">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action2</a>
            <a href="#" class="dropdown-item">Action3</a>
        </div>
    </div>
`);
$('.dropdown-toggle').dropdown();
