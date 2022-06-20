import { GET_SONG } from "../queries/queries";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import LyricCreate from "./lyricCreate.component";
import LyricList from "./lyricList.component";

function SongDetail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_SONG, {
    variables: {id}
  });
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { song } = data

  return(
    <div className="container">
      <Link to="/">
        <h5>Back</h5>
      </Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate id={song.id} />
    </div>
  )
}

export default SongDetail;