import React from 'react'
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {LibrosContext} from '../Context/LibrosContext'
import {useContext} from 'react';

const Libros = () =>{
    const {catalogo, agregar} = useContext(LibrosContext);
    return(
        <div className ="LibrosLista">
          <h1>Libros disponibles</h1>
          <Table striped bordered className="Tabla">
            <thead>
              <tr>
                <th>Coudigo</th>
                <th>Titulo</th>
                <th>Idioma</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                catalogo.map((e,index)=>
                  <tr key={index}>
                    <td>{e.codigo}</td>
                    <td>{e.titulo}</td>
                    <td>{e.idioma}</td>
                    <td><Button disabled={e.desactivado} onClick={()=>agregar(e)} variant="dark">Agregar</Button></td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </div>

    );
    
}

export default Libros;