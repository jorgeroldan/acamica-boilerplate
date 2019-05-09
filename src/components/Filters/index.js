import React, { Component } from 'react'

class Filters extends Component {

    
    render() {
        // const {dateFrom, dateTo, country, room, price} = this.state
        const { date, handleChange } = this.state
        return (
            <input type="date" value={date} onChange={handleChange} />
            
            /* <section className='section is-small'>
                <div className="container">
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                </div>
            </section> */
        )
    }
}

export default Filters