import Home from "./pages/Home";
import MainTinder from "./pages/MainTinder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/start"} element={<MainTinder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
