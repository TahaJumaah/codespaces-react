function Card({ image, title, info }) {
  return (
    <div className="card" style={{ width: "35%", minWidth: "35%" }}>
      <img src="..." className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Card;
