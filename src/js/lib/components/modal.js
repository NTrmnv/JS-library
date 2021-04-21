import $ from "../core";

$.prototype.moveX = function (move) {
    for (let i = 0; i < this.length; i++) {
        if(!move){
            this[i].style.transform = '';
        } else {
            this[i].style.transform = `TranslateX(${move}px)`;
        }
    }
};

$.prototype.modal = function () {
    for(let i = 0; i < this.length; i++){
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            if(document.body.offsetHeight > document.documentElement.clientHeight){
                document.body.style.marginRight = `${calcScroll()}px`;
                $('.modal').moveX(-calcScroll()/2);
            }

            $(target).fadeIn(500);
            document.body.style.overflow = "hidden";
        });
    }

    const closeElems = document.querySelectorAll('[data-close]');
    closeElems.forEach((elem) => {
        $(elem).click (() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = "";
            document.body.style.marginRight = 0;
            $('.modal').moveX();
        });
    });

    $('.modal').click((e) => {
       if(e.target.classList.contains('modal')){
            $('.modal').fadeOut(500);
            document.body.style.overflow = "";
            document.body.style.marginRight = 0;
            $('.modal').moveX();
       } 
    });

    function calcScroll () {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
};

$('[data-toggle="modal"]').modal();