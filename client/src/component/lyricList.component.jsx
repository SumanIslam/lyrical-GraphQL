import ThumbsUpButton from "./button/thumbsupButton.component";

function LyricList({lyrics}) {
  return(
    <ul className="collection">
      {
        lyrics.map(({id, content}) => {
          return(
            <li
            key={id}
            className="collection-item"
            >
              {content}
              <ThumbsUpButton id={id} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default LyricList;