

const apikey = "db05dee8dc92ae439a451678efea5bc2"

let url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=[API key]&units=metric"

const getweather = async (city)=>{
	try{

		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
		const data = await response.json()
		console.log(data)
		let celcius = Math.trunc(data.main.temp) - 273;
		document.querySelector("#cityname").innerText = data.name
		document.querySelector('#temperature').innerText = celcius + "°C";
		document.querySelector('#humidity').innerText = data.main.humidity
		document.querySelector('#windspeed').innerText = data.wind.speed
		document.querySelector('#weather').innerText = data.weather[0].main
 		let image = document.getElementById('weatherimage')
		
		if(data.weather[0].main == "Clouds"){
			image.src = "https://static.vecteezy.com/system/resources/previews/012/066/505/original/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png"

		}
		else if(data.weather[0].main == "Haze"){
			image.src = "https://scx2.b-cdn.net/gfx/news/hires/2019/weatherforec.jpg"
		}
		else if(data.weather[0].main == "Mist"){
			image.src = "https://scx2.b-cdn.net/gfx/news/hires/2019/weatherforec.jpg"
		}
	}catch(error){
		console.log(error)
	}
}
let input = document.querySelector("#CityName")
let Search = document.querySelector("#searchButton")


Search.addEventListener('click', function(){
	let city = input.value.trim()
	if(city){
		let cardBody = document.querySelector(".card-body")
        cardBody.classList.toggle('hidden')
		getweather(city)
		
	}
	else{
		alert("Enter the city name before press!")
	}
	
})

