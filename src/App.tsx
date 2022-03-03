

import './App.css';
import { Header } from "./components/Header/Header"
import { Routes,Route } from "react-router-dom";
import {
  Home,
  Signup,
  Login,
  History
}
  from "./pages/index"
  import {ScrollToTop} from "./components/ScrollToTop";
  import { PrivateRoute } from "./PrivateRoute";


function App() {
  return (
    <div>
     <ScrollToTop />
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      </Routes>
      
    </div>
  );
}

export default App;
