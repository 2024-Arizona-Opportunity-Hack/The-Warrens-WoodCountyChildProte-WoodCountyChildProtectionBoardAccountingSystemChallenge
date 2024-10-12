// App.js
import { Routes, Route } from "react-router-dom";
import ErrorComponent from "./constants/ErrorComponent";
import Navbar from "./components/navbar/Navbar";
import CSVUploader from "./components/CSVUploader";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<CSVUploader />} />
        <Route path="/*" element={<ErrorComponent />} />
      </Routes>
    </div>
  );
}

export default App;
