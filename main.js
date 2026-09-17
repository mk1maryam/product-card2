const allCards=document.querySelectorAll(".card");
const firstCard=document.querySelector(".card");
const thirdCard=document.querySelectorAll(".card")[2];

const changeFirstCardColorButton=document.querySelector("#change-color-first-card");
const changeAllCardsColorButton=document.querySelector("#change-color-all-card");
const openGoogleButton=document.querySelector("#open-google");
const logMessageButton=document.querySelector("#log-message");
const changeThirdCardColorButton=document.querySelector("#change-third-card-color-button");

console.log("все карточки", allCards);
console.log("вторая карточка",allCards[1]);
console.log("третья карточка",allCards[2]);
console.log("первая карточка",firstCard);
console.log("кнопка",changeThirdCardColorButton);

changeFirstCardColorButton.addEventListener("click",()=>{
    console.log("клик на кнопку сработал");
    firstCard.style.backgroundColor="red";
})
changeAllCardsColorButton.addEventListener("click",()=>{
    console.log("клик на кнопку сработал");
    allCards.forEach(card => {
        card.style.backgroundColor="blue";
    });
})
openGoogleButton.addEventListener("click",()=>{
    window.open("https://www.google.com");
})
logMessageButton.addEventListener("click",()=>{
    console.log("вывод сообщения в консоль лог");
})
changeThirdCardColorButton.addEventListener("click",()=>{
    console.log("клик на кнопку сработал");
    thirdCard.style.backgroundColor="green";
})

