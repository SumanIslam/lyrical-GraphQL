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
    <SongList />
  );
}

export default App;
