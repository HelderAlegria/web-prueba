// INTERFACE PARA MANEJO DE LOS PROPS
// interface CardProps {
//   body: string;
//   title: string;
//   text: string;
// }

export default function Card() {
  //  (props: CardProps) {
  // const { body } = props;
  // const { title } = props;
  // const { text } = props;

  return (
    <div className="card">
      <div className="card-body">
        {/* ESTO ES LO QUE SE AGREGA A LA FUNCION DE CARDBODY */}
        <h5 className="card-title">TARJETA</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        {/* ESTO ES LO QUE SE AGREGA A LA FUNCION DE CARDBODY */}
      </div>
    </div>
  );
}

// function CardBody(){
// return()
// }

// export default CardBody;

// export default Card;
