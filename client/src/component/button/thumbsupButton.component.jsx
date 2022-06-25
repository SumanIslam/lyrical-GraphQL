import { useMutation } from "@apollo/client";
import { LIKE_LYRIC } from "../../queries/queries";

function ThumbsUpButton({ id, likes }) {
  const [likeLyric, { data, loading, error }] = useMutation(LIKE_LYRIC);

  if (loading) return '';
  if (error) return `Submission error! ${error.message}`;

  const handleClick = (id) => {
    likeLyric({variables: {id}})
  }

  return(
    <div style={{width: '50px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <i
        className="material-icons"
        style={{cursor: 'pointer',marginTop: '-2px'}}
        onClick={() => handleClick(id)}
        >
          thumb_up_alt
      </i>
      <span>{likes}</span>
    </div>
  )
}

export default ThumbsUpButton;