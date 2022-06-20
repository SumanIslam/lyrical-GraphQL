function LyricList(props) {
  console.log(props);
  return(
    <ul className="collection">
      {
        props.lyrics.map(({id, content}) => {
          return(
            <li
            key={id}
            className="collection-item"
            >
              {content}
            </li>
          )
        })
      }
    </ul>
  )
}

export default LyricList;