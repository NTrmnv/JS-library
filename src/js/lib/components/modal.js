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

$.prototype.modal = function (created) {
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

        const closeElems = document.querySelectorAll(`${target} [data-close]`);
        closeElems.forEach((elem) => {
            $(elem).click (() => {
                $(target).fadeOut(500);
                document.body.style.overflow = "";
                document.body.style.marginRight = 0;
                $('.modal').moveX();
                if(created){
                    document.querySelector(target).remove();
                }
            });
        });

        $(target).click((e) => {
            if(e.target.classList.contains('modal')){
                $(target).fadeOut(500);
                document.body.style.overflow = "";
                document.body.style.marginRight = 0;
                $('.modal').moveX();
                if(created){
                    document.querySelector(target).remove();
                }
            } 
        });
    }

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

// dynamic
$.prototype.createModal = function ({text, btns} = {}) {
    for (let i = 0; i < this.length; i++){
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        const buttons = [];
        for (let j = 0; j < btns.count; j++){
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];
            if (btns.settings[j][2]){
                btn.setAttribute('data-close', 'true');
            } if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function'){
                btn.addEventListener('click', btns.settings[j][3]);
            }
            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">${text.title}</div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};