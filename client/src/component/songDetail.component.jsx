import { GET_SONG } from "../queries/queries";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

function SongDetail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_SONG, {
    variables: {id}
  });
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return(
    <div className="container">
      <Link to="/">
        <h5>Back</h5>
      </Link>
      <h3>{data.song.title}</h3>
    </div>
  )
}

export default SongDetail;