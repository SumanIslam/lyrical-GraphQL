import { useQuery } from '@apollo/client';
import { GET_SONGS } from '../queries/queries';

function SongList() {
  const { loading, error, data } = useQuery(GET_SONGS);
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