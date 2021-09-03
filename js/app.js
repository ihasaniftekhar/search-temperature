// Trying to add the function with the 'Enter Key'
document.getElementById('city-name').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      getData();
      console.log(e.key);
    }
});

const getData = () =>{
    const Api_key = `6b30faccf384ce1557aed56309d5b15e`;
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${Api_key}`;
    fetch(url).then(res => res.json()).then(data => mainFunc(data));
}

const mainFunc = data =>{
    console.log(data);
    const icon = data.weather[0].icon;
    // Changing the icon
    const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
    const iconDiv = document.getElementById('weather-icon');
    iconDiv.setAttribute('src',`${iconUrl}`);

    // showing the City Name
    const city = document.getElementById('location');
    city.innerText = data.name;

    // showing the Temperature
    const temp = document.getElementById('temp');
    temp.innerHTML = `<span>${data.main.temp}&deg;C </span> `;

    // showing the weather
    const weather = document.getElementById('weather');
    weather.innerText = data.weather[0].main;
}