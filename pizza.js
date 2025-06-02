// Async

// let pizza;
// function orderPizza(callback) {
//     console.log('1. Order Pizza');
//     setTimeout(() => {
//         pizza = '🍕';
//         callback(pizza);
//     }, 2000);
//     console.log('2. Pizza was ordered');
// }
// function pizzaReady(pizza) {
//     console.log(`3. ${pizza} is ready`);
//     console.log(`4. Eat the ${pizza}`);
// }
// orderPizza(pizzaReady);
// console.log('5. Call Friend');

function displayIcon(data) {
    if (data === 'sunny') console.log('☀️');
    if (data === 'rainy') console.log('🌧');
    if (data === 'cloudy') console.log('☁️');
    return data;
}
// function getWeather(callback) {
//     setTimeout(() => {
//         callback('cloudy');
//     }, 4500);
// }
// getWeather(displayIcon);

// Promises
function getWeatherPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.8) {
                resolve('sunny');
            }
            if (Math.random() > 0.6) {
                resolve('cloudy');
            }
            if (Math.random() > 0.4) {
                resolve('rainy');
            }
            reject('Error');
        }, 1000);
    });
}
function onSuccess(data) {
    console.log(`1st Param Success! ${data}`);
}
function onError(data) {
    console.log(`2nd Param Error! ${data}`);
}
// const promise = getWeatherPromise();
// promise.then(onSuccess, onError);
// promise.then(
//     (data) => {
//         console.log(`First Param: ${data}`);
//     },
//     (data) => {
//         console.log(`Second Param: ${data}`);
//     }
// );

getWeatherPromise().then(displayIcon).then(onSuccess, onError);
getWeatherPromise().then(displayIcon).then(onSuccess).catch(onError);

function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(
                (response) => {
                    return response.json();
                },
                (reject) => {
                    reject('Error');
                }
            )
            .then((data) => {
                resolve(data.properties.periods[0].detailedForecast);
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
    });
}

const location = 'https://api.weather.gov/gridpoints/OKX/35,35/forecast';

fetchData(location)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('All done');
    });
