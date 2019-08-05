import React, { Component } from "react";
import AddTaskForm from "./addTaskForm";
import NewTask from "./NewTask"

import dateFns from "date-fns";
import "./main.scss"


class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      addEvent: this.props.addEvent,
      addTask: false,
      changeButton: false,
      allEvents: [],
    }
  }

  //Initial values from Local Storage
  componentDidMount() {
    let allEvents = JSON.parse(localStorage.getItem('allEvents'));
    if(allEvents == null) allEvents = [];
    this.setState({addTask: true})
    this.setState({ allEvents:[...allEvents] });
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  onDateClick = (day) => {
    const dateFormat = "MMMMYYYYDD";
    const date = dateFns.format(day, dateFormat)

    if (!dateFns.isSameDay(day, this.state.selectedDate)) {
      this.props.closeEvent()
    }

    this.setState({
      selectedDate: day,
    })

    const findDate = this.findObjectByDate(this.state.allEvents, 'date', date);


    if (findDate !== null) {
      this.props.changeButton(true);
      this.setState({changeButton: true})
      }else{
        this.props.changeButton(false)
        this.setState({changeButton: false})
      }
  }

  // exit form
  cancelEvent = () => {
    this.props.closeEvent()
  }

  deleteEvent=(date)=>{
    const newArray = this.state.allEvents.filter((x) => {
      return x.date !== date
    })
    this.setState({
      allEvents: [...newArray]
    })
    localStorage.setItem("allEvents", JSON.stringify(newArray))
  }

  findObjectByDate=(array, key, value)=>{
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
  }

  addNewEvent = (eventName, eventTime, id, date) => {
    //change button from +Add event to Change event
    this.props.changeButton(true)
    // change buttons on addTaskForm from add event to change Event
    this.setState({changeButton: true})

    let allEvents = JSON.parse(localStorage.getItem("allEvents"));
    const findDate = this.findObjectByDate(this.state.allEvents, 'date', date);
   
    let myObj = {
      id,
      eventName,
      eventTime,
      date
    }

    if(allEvents == null){
        allEvents = [];
      }

    if (findDate !== null) {
      allEvents= allEvents.filter((x) => {
        return x.date !== date
      })
    }
    allEvents.push(myObj)
    localStorage.setItem("allEvents", JSON.stringify(allEvents))

    this.setState({
      allEvents
    })  
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";


    while (day <= endDate) {

      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;

        let addTaskForm;
        if (this.props.addEvent == true &&
          dateFns.isSameDay(day, selectedDate) == true) {
          addTaskForm = <AddTaskForm
            id={day}
            closeEvent={this.cancelEvent}
            addNewEvent={this.addNewEvent}
            changeButton={this.state.changeButton}
          />
        }

        let newTask;
        if (this.state.addTask == true) {
          this.state.allEvents.map((x) => {
            if (dateFns.isSameDay(day, x.id)) {
              return newTask = <NewTask
                eventName={x.eventName}
                eventTime={x.eventTime} 
                date={x.date}
                deleteEvent={this.deleteEvent}/>
            }
          })
        }

        days.push(
          <td
            className={`${
              !dateFns.isSameMonth(day, monthStart)
              ? "disabled"
              : dateFns.isSameDay(day, selectedDate) ? "highlight" : ""
              }`}

            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}>

            {formattedDate}
            {addTaskForm}
            {newTask}
          </td>
        );
        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <tr key={day}>
          {days}
        </tr>
      );

      days = [];
    }
    return <tbody className="body">{rows}</tbody>;
  }

  render() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="calendar-box">
        <div className="calendar-navigation-row">
          <div className="calendar-navigation-row-icons-container">
            <i className="fas fa-table" />
            <i className="fas fa-bars" />
          </div>
          <div className="calendar-nvaigation-row-year-container">
            <i onClick={this.prevMonth}
              className="fas fa-chevron-left"
              style={{ paddingRight: "4rem" }}
            />
            <h2 style={{ display: "inline-block", width: "20rem", textAlign: "center" }}>
              {dateFns.format(this.state.currentMonth, dateFormat)}</h2>
            <i onClick={this.nextMonth}
              className="fas fa-chevron-right"
              style={{ paddingLeft: "4rem" }}
            />
          </div>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Sunday</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
            </tr>
          </thead>
          {this.renderCells()}
        </table>
      </div>
    )
  }
}

export default Calendar