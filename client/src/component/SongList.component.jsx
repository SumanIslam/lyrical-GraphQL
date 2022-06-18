import { gql, useQuery } from '@apollo/client';

const songList = gql`
  query getSongs {
    songs {
      id
      title
    }
  }
`;

function SongList() {
  const { loading, error, data } = useQuery(songList);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className='collection'>
      {
        data.songs.map((song) => {
          return (
            <li key={song.id} className='collection-item' >
              {song.title}
            </li>
          )
        })
      }
    </div>
  )
};

export default SongList;