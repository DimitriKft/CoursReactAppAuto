import React from 'react'; 

const Cars = ({children, color}) => {
    
    if(children){
    
        return (
            <div style={{backgroundColor : 'pink', width: '400px', padding: '10px', margin: '5px auto'}}>
                <p>Marque : {children}</p>
                <p>Couleur : {color ? color : "Néant"} </p>
            </div>
        )
    } else {
        return (
            <div style={{backgroundColor : 'pink', width: '400px', padding: '10px', margin: '5px auto'}}>
                <p>Pas de data</p>
            </div>
        )
    }



}

export default Cars;