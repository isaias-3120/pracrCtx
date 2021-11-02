import React, {createContext, useState} from 'react'

export const LibrosContext = createContext();

const LibrosProvider = (props) =>{
    const [catalogo, setcatalogo] = useState([
        {codigo:1,titulo:"Programación", idioma:'ESP', desactivado:false},
        {codigo:2,titulo:"Aprende Python", idioma:'ESP',desactivado:false},
        {codigo:3,titulo:"Precálculo", idioma:'ESP',desactivado:false},
        {codigo:4,titulo:"Ingenieria De Software", idioma:'ESP',desactivado:false}
    ]);
    
    const[wishList, setwishList] = useState([]);
    
    const agregar =(libro)=>{
        
        let temp = catalogo;
        let encontrar = temp.findIndex(e=>e.codigo===libro.codigo)
        temp[encontrar].desactivado = true;
        let agregar;
        agregar = [...wishList, libro];
        agregar= agregar.sort((a,b)=>a.codigo>b.codigo && 1 || -1)
        /*
            agregar.sort(function (a, b) {
            return a.localeCompare(b);
          });
        */
        setcatalogo(temp);
        setwishList(agregar);
    }

    const eliminar = (libro)=>{
        let temp = catalogo;
        let encontrar = temp.findIndex(e=>e.codigo===libro.codigo)
        temp[encontrar].desactivado = false;
        let agregar;
        agregar = wishList.filter((e)=>e.codigo!==libro.codigo)
        setwishList(agregar);
        setcatalogo(temp);
    }

    return(
        <LibrosContext.Provider
            value={{
                catalogo,
                wishList,
                agregar,
                eliminar
            }}>
                {props.children}
        </LibrosContext.Provider>
    );
    

}

export default LibrosProvider;