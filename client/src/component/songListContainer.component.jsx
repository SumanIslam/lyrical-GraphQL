import SongList from "./SongList.component";
import AddButton from "./addButton.component";

function SongListContainer() {
  return(
    <div className='container'>
      <SongList />
      <AddButton />
    </div>
  )
}

export default SongListContainer;