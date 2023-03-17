import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Testing />} />
      </Routes>
    </div>
  );
}

export default App;
