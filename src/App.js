import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Landing,
  Main,
  Missing,
  Register,
  VehicleBrands,
} from "./pages";
import PrivateRoute from "./helper/PrivateRoute";
import PublicRoutes from "./helper/PublicRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}>
          {/* PRIVATE */}
          <Route path='/dashboard' element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path='products' element={<VehicleBrands />} />
          </Route>
          {/* PUBLIC */}
          <Route path='/' element={<PublicRoutes />}>
            <Route path='/' element={<Landing />} />
            <Route path='register' element={<Register />} />
          </Route>
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
