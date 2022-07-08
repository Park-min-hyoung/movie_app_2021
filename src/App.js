// App.js는 router를 render 하는 역할
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<h1>Hello</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
