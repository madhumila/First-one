import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from "./Component/Navbar";
import Feed from "./Component/Feed";
import SearchFeed from "./Component/SearchFeed";
import ChannelDetail from "./Component/ChannelDetail";
import VideoDetail from "./Component/VideoDetail";
function App() {
  return (
    <div>
      <Router>
        <Box sx={{ backgroundColor:"FFF" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/Channel/:id" element={<ChannelDetail />} />
            <Route path="/Search/:SearchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>

      </Router>
    </div>
  );
}

export default App;
