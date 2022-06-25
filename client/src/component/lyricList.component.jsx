import ThumbsUpButton from "./button/thumbsupButton.component";

function LyricList({lyrics}) {
  return(
    <ul className="collection">
      {
        lyrics.map(({id, content, likes}) => {
          return(
            <li
            key={id}
            className="collection-item"
            >
              {content}
              <div
              className="right"
              style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center'
              }}
              >
                <ThumbsUpButton id={id} likes={likes} />
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default LyricList;