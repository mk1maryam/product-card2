//Задание 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((number) => number >= 5);
console.log("Отфильтрованный массив чисел:", filteredNumbers);

//Задание 3
const movies = ["Титаник", "Аватар", "Начало", "Матрица", "Интерстеллар"];
const targetMovie = movies.includes("Начало");
const hasMovie = movies.includes("Начало");
console.log("список фильмов:", movies);
console.log(
  `есть ли ${targetMovie ? "фильм" : "нет фильма"} "Начало" в списке фильмов:`,
  hasMovie,
);

//Задание 4
const numbersForReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reverseArray(array) {
  return array.reverse();
}
console.log(reverseArray(numbersForReverse));
console.log(reverseArray(movies));

//Задание 6
import { socialComments } from "./comments.js";
console.log(socialComments);

//Задание 7
console.log("_ _ _ Задание 7: комментарии с почтой .com _ _ _");
const comComments = socialComments.filter((comment) =>
  comment.email.endsWith(".com"),
);
console.log("Комментарии с почтой .com:", comComments);

//Задание 8
console.log("_ _ _ Задание 8: изменение postId в зависимости от id _ _ _");
const updatedComments = socialComments.map((comment) => {
  return {
    ...comment,
    postId: comment.id <= 5 ? 2 : 1,
  };
});
console.log("Обновленные комментарии:", updatedComments);

//Задание 9
console.log("_ _ _ Задание 9: объекты только с id и именем _ _ _");
const shortComments = socialComments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});
console.log("Комментарии только с id и именем:", shortComments);

//Задание 10
console.log(
  "_ _ _ Задание 10: комментарии с проверкой длины тела (isInvalid) _ _ _",
);
const validatedComments = socialComments.map((comment) => {
  return {
    ...comment,
    isInvalid: comment.body.length < 180,
  };
});
console.log(
  "Комментарии с проверкой длины тела (isInvalid):",
  validatedComments,
);
//Задание 11
console.log("_ _ _ Задание 11: (.map) _ _ _");
const emailViaMap = socialComments.map((comment) => comment.email);
console.log(emailViaMap);

//Задание 12
console.log("_ _ _ Задание 12: (.toString()) _ _ _");
const emailsStringDefault = emailViaMap.toString();
console.log("emailsStringDefault:");
console.log(emailsStringDefault);

console.log("_ _ _ Задание 12: (.join()) _ _ _");
const emailsStringCustom = emailViaMap.join(", ");
console.log("emailsStringCustom:");
console.log(emailsStringCustom);
