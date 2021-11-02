import React from 'react'
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {LibrosContext} from '../Context/LibrosContext'
import {useContext} from 'react';

const Lista = () =>{
    const {wishList, eliminar} = useContext(LibrosContext);
    return(
        <div className ="LibrosWish">
            <h1>Libros que quiero</h1>
            {
                
                wishList.length===0
                ?
                <h4>No hay nada en tu lista</h4>
                :   
                <Table striped bordered className="Tabla">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Titulo</th>
                            <th>Idioma</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishList.map((e,index)=>
                            <tr key={index}>
                                <td>{e.codigo}</td>
                                <td>{e.titulo}</td>
                                <td>{e.idioma}</td>
                                <td><Button  onClick={()=>eliminar(e)} variant="dark">Eliminar</Button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>
            
            }
        </div>

    );
    
}

export default Lista;