const cities = ['Москва', 'Нью Йорк', 'Токио', 'Париж']
const temps = [];

let list = document.getElementById('cityList');

for (city of cities){
    let temp = Number (prompt (`Введите температуру в городе ${city}:`));
    temps.push(temp);
    let newItem = document.createElement('li');
    newItem.textContent=`В городе ${city} сегодня: ${temp}`;
    list.append(newItem);
}

