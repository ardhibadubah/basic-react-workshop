const ScoreCard = (props) => {
  return (
    <div className="card bg-dark d-flex flex-row align-items-center justify-content-around p-5">
      <div className="d-flex flex-column mx-2">
        <img
          src="https://ssl.gstatic.com/onebox/media/sports/logos/kErkaIWGPh_VGrd4T6NwUA_96x96.png"
          alt="bendera"
        />
        <h2> - Indonesia - </h2>
        <button className="btn btn-primary" onClick={props.handleChangeScoreP1}>
          Tambah Score
        </button>
      </div>

      <div className="mx-2">
        <span className="display-6"> {props.scorePlayer1} </span>
      </div>

      <h2 className="mx-2"> - </h2>

      <div className="mx-2">
        <span className="display-6"> {props.scorePlayer2} </span>
      </div>

      <div className="d-flex flex-column mx-2">
        <img
          src="https://ssl.gstatic.com/onebox/media/sports/logos/aEBU_ri8U6F06oTqWmKY5g_96x96.png"
          alt="bendera"
        />
        <h2> - Thailand - </h2>
        <button className="btn btn-primary" onClick={props.handleChangeScoreP2}>
          Tambah Score
        </button>
      </div>
    </div>
  );
};

export default ScoreCard;
