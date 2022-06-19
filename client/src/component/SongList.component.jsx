import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import DeleteButton from './button/deleteButton.component';
import { GET_SONGS } from '../queries/queries';

function SongList() {
  const { loading, error, data } = useQuery(GET_SONGS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className='collection'>
      {
        data.songs.map(({ id, title }) => {
          return (
            <li
              key={id} className='collection-item'
            >
              <Link to={`/songs/${id}`}>
                {title}
              </Link>
              <DeleteButton id={id} />
            </li>
          )
        })
      }
    </div>
  )
};

export default SongList;