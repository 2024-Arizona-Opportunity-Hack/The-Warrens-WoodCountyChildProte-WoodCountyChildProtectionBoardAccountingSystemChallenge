import { Routes, Route } from "react-router-dom";

import ErrorComponent from "./constants/ErrorComponent"
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<ErrorComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
