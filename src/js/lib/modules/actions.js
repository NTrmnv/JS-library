import $ from "../core";

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++){
        if (content){
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

// получение 1 элемента со страницы
$.prototype.eq = function (i) {
    const swap = this[i];
    // нахождение всех элементов в this
    const objLength = Object.keys(this).length;

    for(let i = 0; i < objLength; i++){
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
};

// получение номера элемента по порядку
$.prototype.index = function () {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

// нахождение элементов по селектору
$.prototype.find = function (selector){
    let numberOfItems = 0,
        counter = 0;

    // поверхностная копия this
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++){
        const arr = copyObj[i].querySelectorAll(selector);
        if(arr.length == 0){
            continue;
        }

        for (let j = 0; j < arr.length; j++){
            // перезапись свойств в объекте
            // куда - что (каждый элемент по селектору)
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    // удаление неиспользованных элементов
        // нахождение всех элементов в this
    const objLength = Object.keys(this).length;
    for ( ; numberOfItems < objLength; numberOfItems++){
        delete this[numberOfItems];
    }

    // возвращение модифицированного объекта this
    return this;
};

// метод для определения ближайшего блока по заданному селектору
$.prototype.closest = function (selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++){
        this[i] = this[i].closest(selector);
        counter++;
    }

    // удаление неиспользованных элементов
        // нахождение всех элементов в this
        const objLength = Object.keys(this).length;
        for ( ; counter < objLength; counter++){
            delete this[counter];
        }
    
        // возвращение модифицированного объекта this
        return this;
};

// метод для получения соседних элементов, не включая сам элемент 
$.prototype.siblings = function (){
    let numberOfItems = 0,
        counter = 0;

    // поверхностная копия this
    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++){
        // получение всех потомков внутри родительского блока
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++){

            // исключение из выборки самого элемента
            if(copyObj[i] === arr[j]){
                continue;
            }

            // перезапись свойств в объекте
            // куда - что (каждый соседний элемент)
            this[counter] = arr[j];
            counter++;
        }

        // -1 - кроме выбранного элемента 
        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    // удаление неиспользованных элементов
        // нахождение всех элементов в this
    const objLength = Object.keys(this).length;
    for ( ; numberOfItems < objLength; numberOfItems++){
        delete this[numberOfItems];
    }

    // возвращение модифицированного объекта this
    return this;
};