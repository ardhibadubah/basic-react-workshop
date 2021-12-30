const ScorePlayer = (props) => {
  return(
    <>
      {/* SCORE PLAYER 2 - scorePositionLeft */
        props.scorePositionLeft &&
        <div className="mx-2">
          <span className="display-6"> {props.score} </span>
        </div>
      }

      <div className="d-flex flex-column mx-2">
        <img
          src={props.flagImageSrc}
          alt="bendera"
        />
        <h2> {props.playerName} </h2>
        <button className="btn btn-primary" onClick={props.handleChangeScore}>
          Tambah Score
        </button>
      </div>

      {/* SCORE PLAYER 1 - scorePositionRight */
        props.scorePositionRight &&
        <div className="mx-2">
          <span className="display-6"> {props.score} </span>
        </div>
      }
    </>
  )
}

export default ScorePlayer