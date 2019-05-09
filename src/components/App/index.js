import React, { Component } from 'react'
import dayjs from 'dayjs'

import './index.css'
import Hero from '../Hero'
import Filters from '../Filters'
import Cards from '../Cards'
import 'dayjs/locale/es'

dayjs.locale('es')
const API_URL = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica'

class App extends Component {
  constructor(){
    super()

    this.State = {
      date: '',
      hotels: [], 
      isLoading: false, 
    }
  }

  async componentDidMount() {
    try {
      this.setState({isLoading: true})

      const response = await fetch(API_URL)
      const hotels = await response.json()
      console.log('hotels:', hotels)

      this.setState({ hotels })

    } catch (error) {
      console.error('Error encontrado', error)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ date: value })
  }

  parseDate = timestamp => dayjs(timestamp).format('dddd[,] D [de] MMMM [de] YYYY')

  render() {
    const { isLoading, hotels, date } = this.state
    
    return (
      <div>
        <Hero date={date} handleChange={this.handleChange}/>
      
        {isLoading === true && <p>Cargando hoteles</p>}

        {hotels.length > 0 && (
          <ul>
            {hotels.map(hotel => (
              <li key={hotel.slug}>
                <p>Nombre: {hotel.name}</p>
                <p>Fecha disponble desde: {this.parseDate(hotel.availabilityFrom)}</p>
                <p>Fecha disponble hasta: {this.parseDate(hotel.availabilityTo)}</p>
                <hr />
              </li>
            ))}
          </ul>
        )}
        <Filters />
        <Cards  />
      </div>
      
    )
  }
}

export default App


// Paso a Paso

// Antes que cualquier cosa instalar dependencias y hacer los imports 

 // A. Crear una clase APP que herede las propiedades del componente de React y setear los estados iniciales
    // class App extends React.Component {
    //     constructor() {
    //         super()


    //     }
    // }

// B. Hacer un render de la APP seleccionando previamente el div con el id app
  // ReactDOM.render(<App />, document.querySelector('#root'))


//C. Construir una función asyn await utilizando componentDidMount() para fetchear los datos de la API y cambiar los estados
 

//D. Construir una función para inscrustar los elementos en el Virtual DOM
    // const appendElements = (hotels, emptyGrid) => {
    //     const grid = document.querySelector('.grid')


    // }

  //E. Tener una función que ejecute la logica principal
    // const main = async () => {
    //   const baseUrl = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica'

    //   // Parte 1 - Obtener elementos de la API y mostralos en el DOM
    //   const hotels = await getHotels(baseUrl)
    //   console.log('hotels:', hotels)
      
    //   const grid = document.querySelector('.grid')  
    //   const hotelsItems = hotels.map(hotel => CardItem(hotel))
    //   grid.innerHTML =  hotelsItems.join(' ')


    //   const form = document.querySelector('form')
    //   const inputHotel = document.querySelector('input')

    //   form.addEventListener('submit', function(event) {
    //       event.preventDefault()
    //       console.log('Formulario submiteado')
    //   })
      
      // Parte 2 - Hacer una query con los parametros de los filtros
  


          // 1. Obtener los valores filtrados
          // 2. Fetchear con los filtos establecitos 
          // 3. Mostrar en el DOM los valores de la query
  // }

  // main()

