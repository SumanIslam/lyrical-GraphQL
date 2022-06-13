import { Routes, Route, Link } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css/dist/js/materialize.min.js';

import { useEffect } from "react";

import SongList from "./component/SongList.component";

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  
  return (
    <Routes>
      <Route path="/" element={<SongList />} />
    </Routes>
    
  );
}

export default App;
