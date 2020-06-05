function Results(props) {
  return (
    <div className={props.columnWidth ? props.columnWidth : "col-md-3"}>
      <figure className="figure">
        {props.imageURL ? (
          <img
            src={props.imageURL}
            className="figure-img img-fluid rounded"
            alt={props.name}
            style={{ height: 200, width: 200 }}
          />
        ) : (
          ""
        )}
        <figcaption className="figure-caption">{props.name}</figcaption>
        <figcaption className="figure-caption">{props.children}</figcaption>
      </figure>
    </div>
  );
}

export default Results;
