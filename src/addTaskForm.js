import React, {Component} from 'react'
import dateFns from "date-fns";
import "./main.scss"

class addTaskForm extends Component{
    constructor(props){
        super(props)
        this.state={
            eventName: "",
            eventTime: "09:00"
        }
    }

    handleSubmit=(evt)=>{
        evt.preventDefault();
        const {eventName, eventTime} = this.state
        const id = this.props.id
        const dateFormat = "MMMMYYYYDD";
        const date = dateFns.format(id, dateFormat)
        this.props.addNewEvent(eventName, eventTime, id, date)
        this.props.closeEvent()
    }
    handleChange=(evt)=>{
        this.setState({[evt.target.name]: evt.target.value})
    }
    closeEvent =()=>{
        this.props.closeEvent()
    }
    render(){
        const props = this.props.changeButton
        let button = "Add";
        let heading= "Add task"
        if(props == true){
            button = "change"
            heading = "Change event"
        }

        return(
            <div className={`form-container`}>
            <h3 className="form-header"> {heading}
            <i onClick={this.closeEvent} className="far fa-window-close"></i>
            </h3>
            <form onSubmit={this.handleSubmit}> 
              <input
              name="eventName"
              value={this.state.eventName}
              placeholder="Event name" 
              type="text" 
              autoComplete="off"
              maxLength={20}
              onChange={this.handleChange}
              required /> 
              <input 
              name="eventTime"
              value={this.state.eventTime}
              type="time" 
              placeholder="HH:MM"
              pattern="[0-2]?\d:[0-5]\d"
              onChange={this.handleChange}
              required  />
              <button>{button}</button>
            </form>
          </div>)
    }
}


export default addTaskForm