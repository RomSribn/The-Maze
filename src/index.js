import "./style.css";
//import headerModule from "./header.js";
const log = txt => console.log(txt);


// headerModule();

var head = {
    glasses: 1
};

var table = {
    pen: 3
};

var bed = {
    sheet: 1,
    pillow: 2
};

var pockets = {
    money: 2000
};
/*
* Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму
* pockets -> bed -> table -> head.

То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.
* */
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

// log(pockets.pen);
// log(bed.glasses);
// log(table.money);

log(pockets.glasses);
// log(head.glasses);

const Person = function () {
    
};

log(Person.prototype)