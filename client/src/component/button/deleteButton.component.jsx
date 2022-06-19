import { useMutation } from "@apollo/client";
import { DELETE_SONG, GET_SONGS } from "../../queries/queries";

function DeleteButton({ id }) {
  const [deleteSong, { data, loading, error }] = useMutation(DELETE_SONG, {
    refetchQueries: [
      {query: GET_SONGS}
    ],
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const onSongDelete = (id) => {
    console.log(id);
    deleteSong({variables: {id}})
  }

  return(
    <i
      className="material-icons right"
      style={{cursor: 'pointer'}}
      onClick={() => onSongDelete(id)}
    >
      delete
    </i>
  )
};

export default DeleteButton;