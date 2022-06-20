import { GET_SONG } from "../queries/queries";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import LyricCreate from "./lyricCreate.component";

function SongDetail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_SONG, {
    variables: {id}
  });
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return(
    <div className="container">
      <Link to="/">
        <h5>Back</h5>
      </Link>
      <h3>{data.song.title}</h3>
      <LyricCreate song={data.song} />
    </div>
  )
}

export default SongDetail;