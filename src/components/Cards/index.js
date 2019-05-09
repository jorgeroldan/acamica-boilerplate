import React, { Component } from 'react'


class Cards extends Component {
render() {

    const {photo, name, description, city, country, price, rooms} = this.state

    return (    
            `<article class="card">
                        <div class="head">
                            <img src=${photo} alt="image">
                        </div>
                        <div class="body">
                            <h2>Nombre: ${name}</h2>
                            <h3>Descripción: ${description}</h3>
                            <h4>Ciudad: ${city}</h4>
                            <h4>País: ${country}</h4>
                            <h4>Precio: ${price}</h4>
                            <h4>Habitaciones: ${rooms}</h4>
                        </div>
                    </article>
            `
    )
}


}

export default Cards

