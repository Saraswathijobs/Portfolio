var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description'); // Fixed variable name
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

var apiKey = "730e02b6b7986b709bf48925c55a92b5";

function conversion(val){
    return (val - 273).toFixed(2);
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apiKey)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description']; // Corrected variable name and accessing weather description
        var temperature = data['main']['temp'];
        var wndspd = data['wind']['speed'];

        city.innerHTML = `City: ${nameval}`;
        temp.innerHTML = `Temperature: ${conversion(temperature)} C`;
        description.innerHTML = `Conditions: ${descrip}`;
        wind.innerHTML = `Wind Speed: ${wndspd} km/h`;
    })
    .catch(err => alert('You entered the wrong city name'));
});
