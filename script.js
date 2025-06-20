 // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY

 let targetLocation = "Lucknow";
 let p4 = document.getElementsByClassName('p4')[0];
 let p2 = document.getElementsByClassName('p2')[0];
 let p3 = document.getElementsByClassName('p3')[0];
 let p5 = document.getElementsByClassName('p5')[0];
 let p6 = document.getElementsByClassName('p6')[0];
 let p7 = document.getElementsByClassName('p7')[0];
 let country = document.getElementsByTagName('header')[0];
 let form = document.querySelector('form');
 let input = document.getElementsByClassName('input')[0];

 async function fetchApi(targetLocation) {
   let url = `http://api.weatherapi.com/v1/current.json?key=1c7470eb60334137a3c184245251906&q=${targetLocation}&aqi=yes`;


   const response = await fetch(url);
   const data = await response.json();
   console.log(data);

   let locationName = data.location.name;
   let time = data.location.localtime;
   let temp = data.current.temp_c;
   let humidity = data.current.humidity;
   let region = data.location.region;
   let wind = data.current.wind_kph;
   let precipitation = data.current.precip_in;
   let countryName = data.location.country;

   p4.innerText = `${locationName},${region}`;
   p2.innerText = time;
   p3.innerText = `${temp}°C`;
   p5.innerText = `Precipitation : ${precipitation}in`
   p6.innerText = `Humidity : ${humidity}`;
   p7.innerText = `Wind : ${wind}kph`;
   country.innerText = countryName;

}
function searchForLocation(e){
   e.preventDefault();
   targetLocation = input.value;
   fetchApi(targetLocation)
}

form.addEventListener('submit', searchForLocation);

 fetchApi(targetLocation);

 
