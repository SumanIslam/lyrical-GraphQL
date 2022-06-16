import { Routes, Route, Link } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css/dist/js/materialize.min.js';

import { useEffect } from "react";

import SongList from "./component/SongList.component";
import SongCreate from "./component/songCreate.component";

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  
  return (
    <Routes>
      <Route path="/" element={<SongList />} />
      <Route path="/song/create" element={<SongCreate />} />
    </Routes>
    
  );
}

export default App;
