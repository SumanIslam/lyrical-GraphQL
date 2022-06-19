import { useQuery } from '@apollo/client';
import { GET_SONGS } from '../queries/queries';

import DeleteButton from './button/deleteButton.component';

function SongList() {
  const { loading, error, data } = useQuery(GET_SONGS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className='collection'>
      {
        data.songs.map(({ id, title }) => {
          return (
            <li key={id} className='collection-item' >
              {title}
              <DeleteButton id={id} />
            </li>
          )
        })
      }
    </div>
  )
};

export default SongList;