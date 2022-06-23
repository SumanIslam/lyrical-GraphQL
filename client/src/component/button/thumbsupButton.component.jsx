function ThumbsUpButton({ id }) {
  const handleClick = (id) => {
    console.log(id);
  }

  return(
    <i
    className="material-icons right"
    style={{cursor: 'pointer'}}
    onClick={() => handleClick(id)}
    >
      thumb_up_alt
    </i>
  )
}

export default ThumbsUpButton;