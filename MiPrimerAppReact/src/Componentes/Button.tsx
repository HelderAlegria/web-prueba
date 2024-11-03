// export default function button() {
//   return (
//     <button type="button" className="boton">
//       {" "}
//       BOTON{" "}
//     </button>
//   );
// }

type Props = {
  text: string;
};

function button({ text }: Props) {
  return (
    <button type="submit" className="btn btn-primary">
      {text}
    </button>
  );
}

export default button;
