import getData from "./app.js";

getData(1)
.then((data) => console.log(data))
.catch((e) => console.log("İşlem yapılırken hata oluştu: " + e));
