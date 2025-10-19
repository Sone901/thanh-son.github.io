/* ===== KHỞI TẠO GOOGLE MAP ===== */
// SỬA TỌA ĐỘ VỊ TRÍ TẠI ĐÂY (latitude, longitude)
function initMap() {
  const myLocation = { lat: 21.0285, lng: 105.8542 } // Hà Nội

  const map = new window.google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLocation,
    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
      },
    ],
  })

  // SỬA TÊN VÀ THÔNG TIN MARKER TẠI ĐÂY
  const marker = new window.google.maps.Marker({
    position: myLocation,
    map: map,
    title: "Vị trí của tôi",
    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  })

  const infoWindow = new window.google.maps.InfoWindow({
    content: '<div style="color: #333;"><strong>Nguyễn Văn A</strong><br>Hà Nội, Việt Nam</div>',
  })

  marker.addListener("click", () => {
    infoWindow.open(map, marker)
  })
}

/* ===== LẤY THÔNG TIN THỜI TIẾT TỪ OPEN-METEO API ===== */
// SỬA TỌA ĐỘ THỜI TIẾT TẠI ĐÂY (latitude, longitude)
async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=21.0285&longitude=105.8542&current=temperature_2m,weather_code,wind_speed_10m&timezone=Asia/Ho_Chi_Minh",
    )
    const data = await response.json()
    const current = data.current

    // THÊM/SỬA MÔ TẢ THỜI TIẾT TẠI ĐÂY
    const weatherDescriptions = {
      0: "☀️ Trời Quang",
      1: "🌤️ Hầu Như Quang",
      2: "⛅ Có Mây",
      3: "☁️ Mây Che Phủ",
      45: "🌫️ Sương Mù",
      48: "🌫️ Sương Mù Lạnh",
      51: "🌧️ Mưa Nhẹ",
      61: "🌧️ Mưa",
      80: "🌧️ Mưa Rào",
      95: "⛈️ Bão Tuyết",
    }

    const weatherDesc = weatherDescriptions[current.weather_code] || "🌤️ Không xác định"
    const temp = current.temperature_2m
    const wind = current.wind_speed_10m

    document.getElementById("weather").innerHTML = `
            <div>${weatherDesc}</div>
            <div>Nhiệt độ: <strong>${temp}°C</strong></div>
            <div>Tốc độ gió: <strong>${wind} km/h</strong></div>
        `
  } catch (error) {
    console.error("Lỗi khi lấy thông tin thời tiết:", error)
    document.getElementById("weather").innerHTML = "Không thể tải thông tin thời tiết"
  }
}

/* ===== GỌI HÀM KHI TRANG TẢI ===== */
window.addEventListener("load", () => {
  getWeather()
})
