import { useState } from "react";
import { useMutation, } from "@apollo/client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ADD_SONG, GET_SONGS } from "../queries/queries";

function SongCreate() {
  const [title, setTitle] = useState('');
  const [addSong, { data, loading, error }] = useMutation(ADD_SONG, {
    refetchQueries: [
      {query: GET_SONGS}
    ],
  });

  let navigate = useNavigate();

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong({ variables: {title: title}});
    setTitle('');
    navigate('/', { replace: true });
  }

  return(
    <div className="container">
      <Link to="/">
        <h5>Back</h5>
      </Link>
      <h3>Create a new Song</h3>
      <form onSubmit={handleSubmit}>
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