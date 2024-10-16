import React, {useState} from 'react'

export const PrimerComponente = () => {
    /*variables*/
    let nombre = "victor";
    let web = "victorroblesweb.es";

    

    let cursos =[
        "Master en JavaScript",
        "Master en PHP",
        "Master en React",
        "Master en CSS"
    ]; 

    const cambiarNombre =(nuevoNombre) => {
        nombre = nuevoNombre
    }

  return (
    <div>
        <h1>Mi primer componente </h1>
        <p> mi nomvre es: {nombre}</p>
        <p> mi web es: {web}</p>
        <button onClick={ e=> cambiarNombre("VICTOR ROBLES WEB")}>
            CambiarNombre
        </button>
        <h2>Cursos: </h2>
        <ul>
            {
                cursos.map((curso, indice) =>{
                    return( 
                    <li key={indice}>
                        {curso}
                    </li>);

                })
            }

        </ul>
    </div>
    
  )
}
