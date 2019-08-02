import React, {Component} from "react"
import dateFns from "date-fns";
import "./main.scss"
import { whileStatement } from "@babel/types";

class Calendar extends Component{
    constructor(props){
        super(props)
        this.state={
            currentMonth: new Date(),
            selectedDate: new Date(),
            addEvent: this.props.addEvent,
            formattedDate: 0,
        }
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

      onDateClick = (day)=>{
        const dateFormat = "D";
          this.setState({
              selectedDate: day,
              formattedDate: dateFns.format(day, dateFormat),
              addEvent: false,
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
            let testas;
            if(this.props.addEvent == true && this.state.formattedDate == formattedDate){
                testas = "labas"
            }
            days.push(
              <td
                className={`${
                  !dateFns.isSameMonth(day, monthStart)
                    ? "disabled"
                    : dateFns.isSameDay(day, selectedDate) ? "highlight" : ""
                } ` }
                key={day}
                onClick={()=>this.onDateClick(dateFns.parse(cloneDay))}
              >
                {formattedDate}
                {testas}       
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

    render(){
        const dateFormat = "MMMM YYYY";
        console.log(this.state.addEvent)
          
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
                  <h2 style={{ display: "inline-block", width:"20rem", textAlign:"center" }}>{dateFns.format(this.state.currentMonth, dateFormat)}</h2>
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