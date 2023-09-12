export async function getWeatherByZip(apiKey, zip, units = 'imperial') {
  const path = `zip=${zip}&appid=${apiKey}&units=${units}`;
  return fetchAndProcessWeatherData(path);
}

export async function getWeatherByCity(apiKey, city, state, country, units = 'imperial') {
  let path = `q=${city}`;
  if (state) {
    path += `,${state}`;
  }
  if (country) {
    path += `,${country}`;
  }
  path += `&appid=${apiKey}&units=${units}`;
  return fetchAndProcessWeatherData(path);
}

export async function getWeatherByGeo(apiKey, lat, lon, units = 'imperial') {
  const path = `lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  return fetchAndProcessWeatherData(path);
}

async function fetchAndProcessWeatherData(pathEnd) {
  let path = 'https://api.openweathermap.org/data/2.5/weather?'
  path += pathEnd
  const res = await fetch(path);
  const json = await res.json();
  const { main, weather } = json;
  const { temp, pressure, humidity, temp_min, temp_max } = main;
  const { description, icon } = weather[0];

  return { temp, pressure, humidity, temp_min, temp_max, description, icon };
}