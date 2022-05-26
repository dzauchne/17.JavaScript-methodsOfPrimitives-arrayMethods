/*1) Напишите функцию isMozartHere(str), которая будет возвращать "true", если строка содержит подстроку "Mozart". Учтите что пользователь может случайно нажать на CapsLock или поставить случайный пробел в начале строки  (для этого преобразуйте строку в нужный вид, используя специальные методы)*/
let str = "isMozartHere";
substr = str.substring(2, 8);
console.log(substr);
result = str.trim().includes(substr);
console.log(result);

//2 способ через функцию, но в консоль выводится бред
let string = "isMozartHere"

function isMozartHere(str) {
    str = str.trim().toLowerCase();
    console.log(str);
    let index = str.indexOf("Mozart".toLowerCase());
    if (index == -1) {
        return false;
    } else if (index >= 0) {
        return true;
    } else {
        return "Что-то пошло не так";
    }
}

//3 способ - тоже не о чём 
function isMozartHere2(str) {
    str = str.trim().toLowerCase();
    return (str.includes("Mozart".toLowerCase()));
}
isMozartHere(string);
isMozartHere2(string);





/*2) Напишите функцию showUppercaseFirstLetter(str), возвращающую строку str с заглавным первым символом.*/
str = "john wants to master JS";
result = str[0].toUpperCase() + str.slice(1);
console.log(result);

//2 способ через функцию , но ничего вообще не выходит
str = "john wants to master JS";

function showUppercaseFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}
showUppercaseFirstLetter(str);




/*3) Создайте массив из 4 книг, выведите в консоль последний и предпоследний элементы, а также длину массива*/
let books = [
    "The Cider House Rules",
    "The Help",
    "Desert Flower",
    "Great Circle"
];
console.log(books.length);
console.log(books[books.length - 1]);
console.log(books[books.length - 2]);





/*4) let javaScriptTypes = ["number", "null", "undefined", "string"];
Дополнить массив недостающими типами данных*/
let javaScriptTypes = ["number", "null", "undefined", "string"];
result = javaScriptTypes.push(NaN);
result = javaScriptTypes.unshift(true);
result = javaScriptTypes.unshift(undefined);
result = javaScriptTypes.unshift(4);

console.log(javaScriptTypes);






/*5) Получите подстроку "451 градус по Фаренгейту" из строки "Роман '1984' наряду с такими произведениями, как 'Мы' Евгения Замятина (1920), 'О дивный новый мир' Олдоса Хаксли (1932) и '451 градус по Фаренгейту' Рэя Брэдбери (1953) считается одним из образцов антиутопии"*/

let romanText = "Роман '1984' наряду с такими произведениями, как 'Мы' Евгения Замятина (1920),'О дивный новый мир' Олдоса Хаксли(1932) и '451 градус по Фаренгейту' Рэя Брэдбери(1953) считается одним из образцов антиутопии ";
let index = romanText.indexOf("451 градус по Фаренгейту");
console.log(index);

substr = romanText.substring(index, index + 24);
console.log(substr);







/*6) Выведите в консоль случайное число в промежутке от 1 до 100*/
function randomInteger(min, max) {
    let rand = min - 1 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
alert(randomInteger(1, 100));
//2 способ 
console.log(Math.round(Math.random() * 100));






/*7)"Я учу JavaScript очень мало"
Замените "мало" в этой строке на "много"*/

let selfReflexion = ["Я",
    "учу", "JavaScript",
    "очень",
    "мало"
];
result = selfReflexion.pop("мало");
result = selfReflexion.push("много");

console.log(selfReflexion);

//2 способ 
selfReflexion = ["Я", "учу", "JavaScript", "очень", "мало"];
result = selfReflexion.splice(4, 4, "много");
console.log(selfReflexion);







/*8) Проверьте, включает ли в себя строка "Дорогой, а вдруг он потеряется?"
подстроку "вдруг", "рассвет", используя функцию, которая принимает подстроку в качестве аргумента.И если включает, вывести запись в консоль*/
let crucialQuestion = ["Дорогой", "а", "вдруг", "он", "потеряется", "?"];
result = crucialQuestion.includes("вдруг");
console.log(result);

result = crucialQuestion.includes("рассвет");
console.log(result);

result = crucialQuestion.splice(3, 3, "рассвет"); //c позиции 4 удалить 4тый
console.log(crucialQuestion);





/*9) Создать массив из 4 цветов После чего удалить из начала и конца по одному цвету и вместо них добавить другие*/
let colors = ["blue", "pink", "yellow", "violet"];
result = colors.unshift("black");
result = colors.pop("violet");
result = colors.shift("blue");
result = colors.push("red");
console.log(colors);