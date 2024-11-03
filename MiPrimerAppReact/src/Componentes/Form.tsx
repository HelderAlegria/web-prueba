// import { useForm } from * "react-hook-form";

// function form() {
//   type Props = {};
//   interface Fcampo {
//     sNombre: string;
//     sApellido: string;
//     sEdad: number;
//   }
//   const { register } = useform<Fcampo>();

//   return (
//     <form>
//       <h1> Registro de datos</h1>
//       <div>
//         <label htmlFor="txtNombre"> Ingrese su Nombre </label>
//         <input className="form-control" type="text" {...register(sNombre)} />
//       </div>
//     </form>
//   );
// }

// export default form;

// import { useForm, SubmitHandler } from "react-hook-form";
// // import Button from "../button";

// function form() {
//   interface FCampos {
//     sNombre: string;
//     sApellido: string;
//     sEdad: number;
//   }
//   const {
//     register,
//     formState: { errors },
//   } = useForm<FCampos>();

//   return (
//     <form action="">
//       <h1>Registro de datos</h1>
//       <div>
//         <label htmlFor="txtNombre">Ingrese su Nombre</label>
//         <input
//           className="form-control"
//           type="text"
//           {...register("sNombre", {
//             required: true,
//             minLength: 2,
//             maxLength: 25,
//           })}
//         />
//         {errors.sNombre?.type === "required" && (
//           <span>Debe Ingresar un nombre valido</span>
//         )}
//       </div>
//       {/* <Button text="Enviar" /> */}
//     </form>
//   );
// }

// export default form;

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";

function Form() {
  interface FCampos {
    sNombre: string;
    sApellido: string;
    sEdad: number;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FCampos>();

  const onSubmit: SubmitHandler<FCampos> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-control">
      <h1>Registro de datos</h1>
      <div>
        <label htmlFor="txtNombre">Ingrese su Nombre</label>
        <input
          className="form-control"
          type="text"
          {...register("sNombre", {
            required: true,
            minLength: 2,
            maxLength: 25,
          })}
        />
        {errors.sNombre?.type === "required" && (
          <span>Debe Ingresar un nombre valido</span>
        )}
      </div>
      <Button text="Enviar" />
    </form>
  );
}

export default Form;
