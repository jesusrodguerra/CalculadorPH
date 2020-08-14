import React from 'react';
import {CalcularpH} from '../Helper'

const Formulario = ({valor1, guardarValor1, valor2, guardarValor2, litros, guardarLitros, guardarResultado, guardarCargando}) => {

    const funcionBoton = (e) => {
        e.preventDefault()

        if(valor1 === "" || valor2 === ""){
            console.log('diligencia los valores')
        } else {

            guardarCargando(true)

            setTimeout( () => {
                const total = CalcularpH(valor1, valor2, litros)
                guardarResultado(total)
    
                // Deshabilita Spinner
                guardarCargando(false)
            }, 2000);

        }

    }

    return (  
        <div>
            <form onSubmit= {funcionBoton}>
                <div className="valores">
                    <label>Carbonatos</label>
                    <input type="float" className="form-control form-control" required onChange= {(e) => guardarValor1(parseFloat(e.target.value))}/>
                    <label>Bicarbonatos</label>
                    <input type="float" className="form-control form-control" required onChange= {(e) => guardarValor2(parseFloat(e.target.value))}></input>
                </div>
                
                <div className="selectLitros">
                    <label>Seleccion los litros</label>
                    <select name="lts" className="custom-select" onChange= {(e) => guardarLitros(parseInt(e.target.value))}>
                        <option value="">Litros a trabajar</option>
                        <option value="600">600 lts</option>
                        <option value="400">400 lts</option>
                        <option value="200">200 lts</option>
                        <option value="20">20 lts</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-dark">Calcular</button>
            </form>
        </div>
    );
}
 
export default Formulario;