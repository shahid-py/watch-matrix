

import './App.css';
import { Header } from "./components/Header/Header"
import { Routes,Route } from "react-router-dom";
import {
  Home }
  from "./pages/index"
  import {ScrollToTop} from "./components/ScrollToTop"

function App() {
  return (
    <div>
     <ScrollToTop />
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
