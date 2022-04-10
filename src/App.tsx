

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
  import { PrivateRoute } from './PrivateRoute';
  import {ScrollToTop} from "./components/ScrollToTop";


function App() {
  return (
    <div>
     <ScrollToTop />
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
      <PrivateRoute path="/playlists" element={<Playlists />} />
      <PrivateRoute path="/history" element={<History />} />
      <PrivateRoute path="/liked" element={<LikedVideos/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <PrivateRoute path="/video/:videoId" element={<VideoDetails />} />
        <PrivateRoute
          path="/playlist/:playlistId"
          element={<PlaylistDetails />}
        />

      </Routes>
      
    </div>
  );
}

export default App;
