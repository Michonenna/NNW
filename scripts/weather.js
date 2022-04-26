// var button = document.querySelector('.button');
// var inputValue = document.querySelector('.inputValue');
// var cityName = document.querySelector('.cityName');
// var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// // var APIKEY = 'e1aba7edf2d330d555392403758b34a9';

// const api = {
//   key: "e1aba7edf2d330d555392403758b34a9",
//   baseUrl: "https://api.openweathermap.org/data/2.5/"
// }

// button.addEventListener('click',function(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=e1aba7edf2d330d555392403758b34a9')
// .then(response => response.json)
// .then(data => {
//     var cityNameValue = data['name'];
//     var tempValue = data['main']['temp'];
//     var descValue = data['weather'][0]['description'];

//     cityName.innerHTML= cityNameValue;    
//     temp.innerHTML= tempValue;
//     desc.innerHTML= descValue;

// })

// .catch(error => alert('Wrong city entered'))
// })

var inputValue = document.querySelector('.inputValue');
var cityName = document.querySelector('#nameTag');
var country = document.querySelector('.countryCode')
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
var button= document.querySelector('.button');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=e1aba7edf2d330d555392403758b34a9')
.then(response => response.json())
.then(data =>{
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var countryValue = data['sys']['country'];
  var descValue = data['weather'][0]['description'];

  cityName.innerHTML = nameValue+",";
  country.innerHTML = countryValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue + '&deg C';
  inputValue.value ="";

  console.log(data)
}
)

.catch(err => alert("Wrong city name!"));
});