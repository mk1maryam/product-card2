function printWeather(cityName, temperature) {
  console.log(
    "Сегодня в " + cityName + " температура " + temperature + " градусов",
  );
}
printWeather("Каир", 35);
printWeather("Бишкек", 28);

const speed_of_light = 299792458;
function checkSpeed(Speed) {
  if (Speed > speed_of_light) {
    console.log("Скорость превышает скорость света");
  } else if (Speed < speed_of_light) {
    console.log("Световая скорость");
  } else {
    console.log("Скорость света");
  }
}
checkSpeed(233792458);
checkSpeed(300045889);
checkSpeed(299792458);

const productName = "Набор косметики";
const productPrice = 1500;

function buyProduct(Budget) {
  if (Budget >= productPrice) {
    console.log(`"${productName}" куплен, спасибо за покупку!`);
  } else {
    const difference = productPrice - Budget;
    console.log(
      `Вам не хватает средств для покупки ${productName}, ${difference} ₽, пополните баланс.`,
    );
  }
}
buyProduct(2000);
buyProduct(1000);
const budget = 2000;
if (budget >= productPrice) {
  console.log(`"${productName}" куплен, спасибо за покупку!`);
}
buyProduct(1000);

function printUserInfo(name, age, city) {
  console.log("Меня зовут " + name + ", мне " + age + " лет, я живу в " + city);
}

printUserInfo("Марьям", 40, "Бишкек");
