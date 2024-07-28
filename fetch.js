const timezoneURL = 'http://worldtimeapi.org/api/timezone/Asia/Singapore';
const newsAPIkey = '2ebebdae3083441289f79a2d14ecc7e6';
const countryNewsURL = `https://newsapi.org/v2/top-headlines?country=sg&apiKey=${newsAPIkey}`;
const newsURL = `https://newsapi.org/v2/everything?q=n8n&from=2024-04-26&sortBy=publishedAt&apiKey=${newsAPIkey}`;

async function getNews() {
    const response = await fetch(newsURL);
    const data = await response.json();
    console.log(data);
}

const artistID = '06HL4z0CvFAxyc27GXpf02';
const spotifyClientID = 'f790a166473d45ce94baf0d602ba804a';
const spotifyKey = '7a9567d7604842fd8027acd323e488f1';
const redirect_uri = 'https://localhost:3000';
const spotifyURL = `https://api.spotify.com/v1/artists/${artistID}`;

async function getSpotify() {
    const request = new Request(spotifyURL, {
        headers: {
            Authorization: `Bearer 1234`
        }
    });
    try {
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            console.log('Success', data);
        } else {
            console.log('Success, but! \nServer Error:', data.error.message);
        }
    } catch (error) {
        console.log('Error:', error);
    }
}

getSpotify();

// TODO: first get all temperatures, and then sort them and return in order (highest first) before printing them

// const locations = {
//     chicago: {
//       url: "https://api.open-meteo.com/v1/forecast?latitude=41.8781&longitude=-87.6298&current_weather=true",
//       temp: 0,
//     },
//     edinburgh: {
//       url: "https://api.open-meteo.com/v1/forecast?latitude=55.9533&longitude=-3.1883&current_weather=true",
//       temp: 0,
//     },
//     berlin: {
//       url: "https://api.open-meteo.com/v1/forecast?latitude=52.5200&longitude=13.4050&current_weather=true",
//       temp: 0,
//     },
//   };

//   function getURLcontent(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => {
//           response.json().then((data) => {
//             resolve(data);
//           });
//         })
//         .catch((error) => {
//           reject(`Error fetching data from ${url}\n${error}`);
//         });
//     });
//   }

//   function assignTemp(data, location) {
//     return new Promise((resolve, reject) => {
//       locations[location].temp = data.current_weather.temperature;
//       resolve();
//       reject("Error assigning temperature");
//     });
//   }

//   function sortTemps() {
//     return Object.entries(locations).sort((a, b) => b[1].temp - a[1].temp);
//   }

//   const promises = Object.entries(locations).map(
//     ([location, locationDetails]) => {
//       return getURLcontent(locationDetails.url)
//         .then((data) => assignTemp(data, location))
//         .then(sortTemps);
//     }
//   );

//   Promise.all(promises)
//     .then(() => {
//       console.log(locations);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
