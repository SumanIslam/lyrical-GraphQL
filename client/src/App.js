import { Routes, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css/dist/js/materialize.min.js';

import "material-icons/iconfont/material-icons.css";

import { useEffect } from "react";

import SongListContainer from "./component/songListContainer.component";
import SongCreate from "./component/songCreate.component";

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  
  return (
		<Routes>
			<Route path="/" element={<SongListContainer />} />
			<Route path="/song/create" element={<SongCreate />} />
		</Routes>
	);
}

export default App;
