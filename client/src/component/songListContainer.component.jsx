import SongList from "./SongList.component";
import AddButton from "./button/addButton.component";

function SongListContainer() {
  return(
    <div className='container'>
      <SongList />
      <AddButton />
    </div>
  )
}

export default SongListContainer;