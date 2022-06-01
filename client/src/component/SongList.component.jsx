import gql from 'graphql-tag';

function SongList() {
  return (
    <div>
      SongList
    </div>
  )
};

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default SongList;