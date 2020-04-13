import React, {Fragment, useState} from 'react';

const Pregunta = () => {

    //State de cantidad de presupuesto
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, actualizarError] = useState(false);

    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //Submit para definicr el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
        //Validar
        console.log(cantidad)
        if (cantidad < 1 || isNaN(cantidad)){
            actualizarError(true);
            return;
        }

        //Si se pasa la validacion
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     ); 
}
 
export default Pregunta;