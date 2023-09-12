function getWeather(apiKey, zip, callback) {
  const apiKey = apiKey
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => {
      callback(json)
    })
    .catch(err => console.log(err.message))
}

export default getWeather;