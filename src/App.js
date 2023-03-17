import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/register");
        }}>
        Home
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Testing />} />
      </Routes>
    </div>
  );
}

export default App;
