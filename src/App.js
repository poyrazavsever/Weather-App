import axios from "axios";
import { useState } from "react";

//Page
import Home from "./pages/Home/Home";

function App() {

  const [weather, setWeather] = useState();

  const getWeatherData = async (lat, lon) => {
      try{
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ee842d38462534a74ced2a9a88bf2a37`)
        setWeather(data)
      } catch {
        console.log("Veri alınırken bir hata oluştu")
      }
      
  }

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
