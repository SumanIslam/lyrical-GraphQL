import { useMutation } from "@apollo/client";
import { LIKE_LYRIC } from "../../queries/queries";

function ThumbsUpButton({ id }) {
  const [likeLyric, { data, loading, error }] = useMutation(LIKE_LYRIC);

  if (loading) return '';
  if (error) return `Submission error! ${error.message}`;

  const handleClick = (id) => {
    console.log(id);
    likeLyric({variables: {id}})
  }

  return(
    <i
    className="material-icons right"
    style={{cursor: 'pointer',marginTop: '-2px'}}
    onClick={() => handleClick(id)}
    >
      thumb_up_alt
    </i>
  )
}

export default ThumbsUpButton;