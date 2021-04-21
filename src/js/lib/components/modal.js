import $ from "../core";

$.prototype.modal = function () {
    let scroll = calcScroll();
    for(let i = 0; i < this.length; i++){
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = "hidden";
        });
    }

    const closeElems = document.querySelectorAll('[data-close]');
    closeElems.forEach((elem) => {
        $(elem).click (() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = "";
        });
    });

    $('.modal').click((e) => {
       if(e.target.classList.contains('modal')){
            $('.modal').fadeOut(500);
            document.body.style.overflow = "";
       } 
    });
};

$('[data-toggle="modal"]').modal();