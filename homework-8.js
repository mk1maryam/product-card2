// Задание 3
const userInfo = {
  name: "Марьям",
  age: 40,
  country: "Кыргызстан",
  city: "Бишкек",
  email: "mkmk@example.com",
};
function showUserInfo(UserInfo, email) {
  console.log(UserInfo[email]);
}
showUserInfo(userInfo, "email");

// Задание 4
const infoCar = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Синий",
  transmission: "Автоматическая",
};

carOwner = {
  name: "Марьям",
  age: 40,
  country: "Кыргызстан",
  city: "Бишкек",
  email: "mkmk@example.com",
};
console.log(carOwner);

// Задание 5
function checkMaxSpeed(InfoCar) {
  if ("MaxSpeed" in InfoCar) {
    return;
  } else {
    InfoCar.MaxSpeed = 220;
  }
}
function showInfoCar(InfoCar, color) {
  console.log(InfoCar[color]);
}
showInfoCar(infoCar, "color");

// Задание 6
function showProperty(object, property) {
  console.log(object[property]);
}
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Синий",
  transmission: "Автоматическая",
};
showProperty(car, "model");
showProperty(car, "year");
showProperty(car, "transmission");
showProperty(car, "brand");

// Задание 7
const animals = ["Собака", "Кошка", "Лошадь", "Корова", "Баран"];
function showAnimals(Animals) {
  console.log(Animals);
}
showAnimals(animals);

// Задание 8
const infoBooks = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    genre: "Роман",
  },
  {
    title: "Белый пароход",
    author: "Чингиз Айтматов",
    year: 1970,
    genre: "Повесть",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "Роман",
  },
  {
    title: "Петровы в гриппе и вокруг него",
    author: "Алексей Сальников",
    year: 2016,
    genre: "Роман",
  },
];
const allBooks = infoBooks.concat(infoBooks);
console.log(allBooks);
function addBooks(allBooks) {
  const isRareAllBooks = (allBooks = allBooks.map((book) => {
    if (book.year < 2010) {
      book.isRare = true;
    } else {
      book.isRare = false;
    }
    return book;
  }));
  return isRareAllBooks;
}

// Задание 9
function showInfoBooks(infoBooks, isRare) {
  const filteredBooks = infoBooks.filter((book) => book.isRare === isRare);
  console.log(filteredBooks);
}
function addIsRare(books) {
  return books.map((book) => {
    book.isRare = book.year > 2010;
    return book;
  });
}
const books = [
  { title: "Война и мир", author: "Лев Толстой", year: 1869, genre: "Роман" },
  {
    title: "Белый пароход",
    author: "Чингиз Айтматов",
    year: 1970,
    genre: "Повесть",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "Роман",
  },
  {
    title: "Петровы в гриппе и вокруг него",
    author: "Алексей Сальников",
    year: 2016,
    genre: "Роман",
  },
];
const newBooks = addIsRare(books);
console.log(newBooks);
