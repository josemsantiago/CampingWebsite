console.log('javascript connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
	interval: 2000,
	pause: false,
});
const carouselPause = document.getElementById('carouselPause');
carouselPause.addEventListener('click', function () {
	console.log('pausing the carousel');
	carousel.pause();
});
const carouselPlay = document.getElementById('carouselPlay');
carouselPlay.addEventListener('click', function () {
	console.log('cycle the carousel');
	carousel.cycle();
});

function displayWeather(weatherData) {
	
	const temperature = weatherData.main.temp;
	const description = weatherData.weather[0].description;
	const iconCode = weatherData.weather[0].icon;
	const iconElement = document.createElement('img');
	iconElement.src = `https://openweathermap.org/img/w/${iconCode}.png`;
	const iconContainer = document.getElementById('weather-icon');
	iconContainer.innerHTML = '';
	iconContainer.appendChild(iconElement);
	const temperatureElement = document.getElementById('weather-temp');
	temperatureElement.textContent = `${temperature}\u00B0F`;
	const descriptionElement = document.getElementById('weather-description');
	descriptionElement.textContent = description;
}

async function fetchWeather() {
	try {
		const apiKey = process.env.OPEN_WEATHER_API_KEY;
		const city = 'San Francisco';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Request failed with status: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
        displayWeather(data);
	} catch (error) {
		console.error('Error:', error.message);
	}

    
}


fetchWeather();
