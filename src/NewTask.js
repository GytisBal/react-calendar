import React, { Component } from 'react'
import "./main.scss"

export default class NewTask extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    deleteEvent=()=>{
        const date = this.props.date
        this.props.deleteEvent(date)
    }
    render() {
        return (
            <div className="task">
            <i onClick={this.deleteEvent} className="far fa-window-close"></i>
            <h4 className="task-heading">
                <span className="status green"></span>
                  {this.props.eventName}</h4>
              <h4 className="time">
                <i className="far fa-clock"></i> {this.props.eventTime}
              </h4>
          </div>
        )
    }
}
