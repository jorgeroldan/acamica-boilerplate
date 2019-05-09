import React,  { Component } from 'react'

class DateFilter extends Component{
    render(){
        const {date, icon} = this.props

        return (
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" value={date} />
                    <span className="icon is-small is-left">
                    <i className="fas" value={icon}></i>
                    </span>
                </div>
            </div>
        )
    }
}

export default DateFilter