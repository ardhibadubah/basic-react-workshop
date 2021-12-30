import ScorePlayer from "./ScorePlayer";

const ScoreCard = (props) => {
  return (
    <div className="card bg-dark d-flex flex-row align-items-center justify-content-around p-5">
      <ScorePlayer 
        playerName="Indonesia"
        flagImageSrc="https://ssl.gstatic.com/onebox/media/sports/logos/kErkaIWGPh_VGrd4T6NwUA_96x96.png"
        score={props.scorePlayer1}
        handleChangeScore={props.handleChangeScoreP1}
        scorePositionRight
      />

      <h2 className="mx-2"> - </h2>

      <ScorePlayer 
        playerName="Thailand"
        flagImageSrc="https://ssl.gstatic.com/onebox/media/sports/logos/aEBU_ri8U6F06oTqWmKY5g_96x96.png"
        score={props.scorePlayer2}
        handleChangeScore={props.handleChangeScoreP2}
        scorePositionLeft
      />
    </div>
  );
};

export default ScoreCard;
