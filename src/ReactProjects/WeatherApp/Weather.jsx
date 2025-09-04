import { useEffect, useState } from "react";
import Search from "./Search";

export default function Weather() {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState(null)

  async function fetchWeatherData(param) {
    setLoading(true)
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f08158a48b6179a0462c87d75ed99c94`)

      const data = await response.json()

      console.log("data:", data)

      if (data) {
        setWeatherData(data)
        setLoading(false)
      }

    }catch(error) {
      setLoading(false)
      console.log(error)
    }

  }

  console.log(weatherData)


  function handleSearch() {
    fetchWeatherData(search)
  }

  useEffect(() => {
    fetchWeatherData("Arica")
  }, [])

  function getCurrentDate() {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="weather-card">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {
        loading ? <div>Loading...</div> :
        <div>
          <div className="city-name">
            <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{Math.round(weatherData?.main?.temp - 273.15)}°C</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
          </p>
          <div className="weather-info">
            <div>
              <p className="wind">Wind speed: {weatherData?.wind?.speed}</p>
            </div>
            <div>
              <p className="humidity">Humidity: {weatherData?.main?.humidity}%</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
