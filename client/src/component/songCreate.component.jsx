import { useState } from "react";

function SongCreate() {
  const [title, setTitle] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }
  return(
    <div className="container">
      <h3>Create a new Song</h3>
      <form>
        <label htmlFor="">Song Title: </label>
        <input
          onChange={changeTitle}
          value={title}
        />
      </form>
    </div>
  )
}

export default SongCreate;