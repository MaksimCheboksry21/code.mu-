;(function () {
    /** работа с массивами */
        // аналог метода map для перебора элементов в массиве.
    const mapArr = (arr) => arr.map(elem => console.log(elem));

    // Функция которая позволяет найти сумму массива.
    const getSumArr = (arr) => arr.reduce((sum, elem) => sum += checkElem(elem), 0);

    //Функция, которая занимается корректностью числа, а именно проверка на число или его отсутствие.
    const checkElem = (elem) => Number.isInteger(elem) ? elem : console.log(elem + ' не является числом');

    //Функция которая автоматически создает произвольный массив, параметрами имеет от куда начинать массив и где заканчивать.
    const setArr = (start, end) => {
        let arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }

    //Функция возвращает первый элемент массива.
    const firstEl = (arr) => arr.shift();

    //Функция возвращает последний элемент массива.
    const lastEl = (arr) => arr.pop();

    //Функция которая возвращает повторяющиеся элементы в массиве.
    const getDouble = (arr) => arr.filter((item, index) => arr.indexOf(item) !== index);

    //Усовершенственная функция на возвращение повторяющихся элементов в массиве, в основе лежит Set.
    const getCleanDBL = (arr) => {
        let filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
        return [...new Set(filtered)];
    }

    //Функция которая выдает четные числа из массива.
    const checkDigital = (arr) => arr.filter(elem => elem % 2 == 0);

    //Функция которая выдает нечетные числа из массива.
    const checkDigitalopp = (arr) => arr.filter(elem => !(elem % 2 == 0));

    //Функция которая преобразует многомерный массив в обычный.
    const changeMultiArr = (arr) => [].concat(...arr);

    //Функция которая преобразует объект в обычный массив.
    const changeObj = (obj) => [].concat(...obj);

    window.func = {changeObj};
})()