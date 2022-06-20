import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LYRIC_TO_SONG, GET_SONG } from "../queries/queries";

function LyricCreate({song: {id}}) {;
  const [content, addContent] = useState('');
  const [addLyric, { data, loading, error }] = useMutation(ADD_LYRIC_TO_SONG);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const changeLyric = (e) => {
    addContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addLyric({ variables: {
      content,
      songId: id
    }});

    addContent('');
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" style={{fontSize: '1.2rem'}}>Add a lyric</label>
        <input
          onChange={changeLyric}
          value={content}
        />
      </form>
    </div>
  )
};

export default LyricCreate;