import $ from "../core";

$.prototype.getAttribute = function (name) {
    for (let i = 0; i < this.length; i++){
        if(!this[i].getAttribute(name)){
            continue;
        }
        this[i].getAttribute(name);
    }
    return this;
};

$.prototype.removeAttribute = function (name) {
    for (let i = 0; i < this.length; i++){
        if(!this[i].getAttribute(name)){
            continue;
        }
        this[i].removeAttribute(name);
    }
    return this;
};

$.prototype.setAttribute = function (name) {
    for (let i = 0; i < this.length; i++){
        if(!this[i].getAttribute(name)){
            continue;
        }
        this[i].setAttribute(name);
    }
    return this;
};

$.prototype.toggleAttribute = function (name, value) {
    for (let i = 0; i < this.length; i++){
        if (this[i].hasAttribute(name)) {
            this[i].removeAttribute(name);
        } else {
            this[i].setAttribute(name, value);
        }
    }
    return this;
};