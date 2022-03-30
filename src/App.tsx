

import './App.css';
import { Header } from "./components/Header/Header"
import { Routes,Route } from "react-router-dom";
import {
  Home,
  Signup,
  Login,
  History,
  LikedVideos,
  VideoDetails,
  PlaylistDetails,
  Playlists,
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
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/history" element={<History />} />
      <Route path="/liked" element={<LikedVideos/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route
          path="/playlist/:playlistId"
          element={<PlaylistDetails />}
        />

      </Routes>
      
    </div>
  );
}

export default App;
