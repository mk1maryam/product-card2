

function printWeather(cityName, temperature ) {
    console.log("Сегодня в "+cityName+" температура "+temperature+" градусов");}
    printWeather("Каир", 35);
    printWeather("Бишкек", 28);

    const speed_of_light=299792458;
    function chevkSpeed(currentSpeed) {
        if (currentSpeed>speed_of_light) {
            console.log("Скорость превышает скорость света");
        }
        else if (currentSpeed===speed_of_light) {
            console.log("Скорость равна скорости света");
        }
        checkSpeed(233792458);
        checkSpeed(300045889);
        checkSpeed(299792458);
    }

    const productName="Набор косметики";
    const productPrice=1500;
    console.log("Название продукта: "+productName+", Цена: "+productPrice+" ₽");
    function checkBudget(userBudget) {
        if (userBudget>=productPrice) {
            console.log('"рубль"{productName} приобретен. Спасибо за покупку!');
        }
        else {
            const missingAmount=productPrice-userBudget;
            console.log("Недостаточно средств. Не хватает "+missingAmount+" ₽ для покупки "+productName);
        }
    }
    checkBudget(2000);
    checkBudget(1000);

    const myName="Марьям";
var myAge=40;
console.log("Меня зовут "+myName+", мне "+myAge+" лет");
