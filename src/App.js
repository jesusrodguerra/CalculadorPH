import React, {Fragment, useState} from 'react';
import Formulario from './componentes/Formulario'
import Resultado from './componentes/Resultado'
import Header from './componentes/Header'
import Spinner from './componentes/Spinner'
import Mensaje from './componentes/Mensaje'

function App() {

  const [valor1, guardarValor1] = useState("");
  const [valor2, guardarValor2] = useState("");
  const [litros, guardarLitros] = useState("");
  const [resultado, guardarResultado] = useState("");
  const [cargando, guardarCargando] = useState(false);

  let componente;

  if(cargando){
    componente = <Spinner/>
  } else if(resultado === "") {
    componente = <Mensaje/>
  } else {
    componente = <Resultado resultado={resultado}/>
  }

  return (

    <Fragment>
      <Header/>
      <div className="container">
        <div className="row jumbotron">
          <div className="col-sm"> 
          
            <Formulario
              valor1={valor1}
              guardarValor1={guardarValor1}

              valor2={valor2}
              guardarValor2={guardarValor2}

              litros={litros}
              guardarLitros={guardarLitros}

              resultado={resultado}
              guardarResultado={guardarResultado}

              cargando={cargando}
              guardarCargando={guardarCargando}
            /> 
          
          </div>
          <div className="col-sm"> 
            <h2>Resultado</h2>
            {componente}
          
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
