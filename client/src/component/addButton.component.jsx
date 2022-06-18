import { Link } from 'react-router-dom'

function AddButton() {
  return(
    <Link
        to={"/song/create"}
        className="btn-floating btn-large red right"
      >
        <i className="material-icons">add</i>
      </Link>
  )
}

export default AddButton;