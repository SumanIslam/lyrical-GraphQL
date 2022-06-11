import { gql, useQuery } from '@apollo/client';

const songList = gql`
  query getSongs {
    songs {
      title
    }
  }
`;

function SongList() {
  const { loading, error, data } = useQuery(songList);
  // console.log(data);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div>
      SongList
    </div>
  )
};

export default SongList;