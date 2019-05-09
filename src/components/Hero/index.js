import React, { Component } from 'react'

class Hero extends Component {

  render() {

    // const {dateFrom, dateTo} = this.state

    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
            desde el $`{}`<strong>ddd</strong> 
            hasta el $`{}`<strong>ddd</strong>
    
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
