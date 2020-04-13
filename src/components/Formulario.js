import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    const [error, actualizarError] = useState(false);

    //Agregar gasto
    const agregarGasto = e => {

        e.preventDefault();
        // Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            actualizarError(true);
            return;
        }
        actualizarError(false);

        // Construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        // Pasar al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el form
        guardarNombre("");
        guardarCantidad(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error? <Error mensaje="Presupuesto incorrecto"/> : null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
            
        </form>
     );
}
 
export default Formulario;