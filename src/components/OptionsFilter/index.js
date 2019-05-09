import React, { Component } from 'react'

class OptionsFilter extends Component {

    
    render() {
        // const {dateFrom, dateTo, country, room, price, handleChange} = this.state
        const {options, selected, icon} = this.state

        return (
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                    <select style={ {width: '100%'} }>
                        ...
                    </select>
                    </div>
                    <div className="icon is-small is-left">
                    <i className="fas"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default OptionsFilter