import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, Missing, Register } from "./pages";
import { Navigation } from "./components/atoms";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route index element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </Router>
  );
}

export default App;
