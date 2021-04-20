const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if(!selector){
        return this; // {}
    }

    if(selector.tagName){
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

// в прототип объекта (11) записываем прототип самой функции
$.prototype.init.prototype = $.prototype;
window.$ = $;

export default $;