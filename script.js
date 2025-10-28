/* ===== GET WEATHER INFORMATION FROM OPEN-METEO API ===== */
async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=10.7769&longitude=106.7009&current=temperature_2m,weather_code,wind_speed_10m&timezone=Asia/Ho_Chi_Minh",
    )
    const data = await response.json()
    const current = data.current

    const weatherDescriptions = {
      0: "☀️ Clear Sky",
      1: "🌤️ Mostly Clear",
      2: "⛅ Partly Cloudy",
      3: "☁️ Overcast",
      45: "🌫️ Foggy",
      48: "🌫️ Depositing Rime Fog",
      51: "🌧️ Light Drizzle",
      61: "🌧️ Rain",
      80: "🌧️ Rain Showers",
      95: "⛈️ Thunderstorm",
    }

    const weatherDesc = weatherDescriptions[current.weather_code] || "🌤️ Unknown"
    const temp = current.temperature_2m
    const wind = current.wind_speed_10m

    document.getElementById("weather").innerHTML = `
      <div>${weatherDesc}</div>
      <div>Temperature: <strong>${temp}°C</strong></div>
      <div>Wind Speed: <strong>${wind} km/h</strong></div>
    `
  } catch (error) {
    console.error("Error fetching weather:", error)
    document.getElementById("weather").innerHTML = "❌ Unable to load weather information"
  }
}

/* ===== MOUSE TRACKING FOR SOCIAL CARDS ===== */
const cards = document.querySelectorAll(".card")

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  })
})

/* ===== CALL FUNCTIONS WHEN PAGE LOADS ===== */
window.addEventListener("load", () => {
  getWeather()
})
