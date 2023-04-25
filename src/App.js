import {Routes, Route} from "react-router-dom"


//Page
import Home from "./pages/Home/Home";
import WeatherPage from "./pages/Weather/WeatherPage";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities/:id" element={<WeatherPage />} />
      </Routes>
    </div>
  );
}

export default App;
