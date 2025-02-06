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

let max;
let min;

function findMaxMin(arr) {
    let i;
    max = arr[0];
    min = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i]
      }
    }
    
    return {max, min} ;
  }

findMaxMin(temps);

document.getElementById('minTemp').textContent = `Минимальная температура: ${min}`;
document.getElementById('maxTemp').textContent = `Максимальная температура: ${max}`;
