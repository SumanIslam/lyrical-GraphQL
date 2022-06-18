import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ADD_SONG = gql`
  mutation AddSong($title:String){
    addSong(title: $title) {
      title
    }
  }
`

function SongCreate() {
  const [title, setTitle] = useState('');
  const [addSong, { data, loading, error }] = useMutation(ADD_SONG);

  let navigate = useNavigate();

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const changeTitle = (e) => {
    setTitle(e.target.value);
  }

  return(
    <div className="container">
      <Link to="/">
        <h5>Back</h5>
      </Link>
      <h3>Create a new Song</h3>
      <form onSubmit={e => {
        e.preventDefault();
        addSong({ variables: {title: title}});
        setTitle('');
        navigate('/')
      }}>
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