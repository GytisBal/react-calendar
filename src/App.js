import React, { Component } from "react";
import Calendar from "./Calendar"
import MobileNavbar from "./mobileNavbar"
import "./main.scss";
import logo from "./img/koralis.png";

class App extends Component {
  constructor(props){
    super()
    this.state={
      addEvent: false,
      changeButton:false
    }
  }
handleClick=()=>{
  this.setState({addEvent: true})
}

closeEvent=()=>{
  this.setState({addEvent: false})
}
changeButton=(props)=>{
  if(props == true){
    this.setState({changeButton: true})
  }else{
    this.setState({changeButton: false})
  }
}
  render() {
    const buttonEvent = this.state.changeButton ? "Change event" : "+ Add event"
    return (
      <main className="mainLayout">
        <div className="calendar-wrapper">
          <div className="navigation-wrapper">
            <div className="logo">
              <img src={logo} alt="" className="image" />
            </div>
            {/* <MobileNavbar/> */}
            <div className="search-container">
              <form className="form-inline">
                <i className="fas fa-search" aria-hidden="true" />
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="General search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="navigation-container">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Storyline
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Calendar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Drive
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="icons">
              <i className="far fa-comment" />
              <i className="far fa-heart" />
              <i className="far fa-user" />
            </div>
          </div>
          <div className="calendar-container">
            <div className="calendar-navigation-container">
              <h1 className="calendar-heading">Calendar</h1>
              <div className="calendar-buttons">
                <button className="calendar-button">All</button>
                <button className="calendar-button">Important</button>
                <button className="calendar-button">Meets</button>
                <button className="calendar-button">Events</button>
              </div>
              <div className="event-buttons-container">
                <button 
                className="event-button" 
                onClick={this.handleClick}>{buttonEvent}</button>
              </div>
            </div>
            <Calendar 
            addEvent={this.state.addEvent} 
            closeEvent={this.closeEvent}
            changeButton={this.changeButton}/>
          </div>
        </div>
        <div className="chatbox-wrapper">
          <div className="chatbox-header">
            <div className="chatbox-mainUser">
              <div className="chatbox-mainUser-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  alt=""
                />
              </div>
              <div className="chatbox-mainUser-text">
                <h2 className="chatbox-mainUser-name">Darius Mikalauskas</h2>
                <h3 className="status-heading">
                  <span className="status red " />
                  Do not disturb
                </h3>
              </div>
            </div>
            </div>
            <div className="chatbox-search">
              <h2 className="chatbox-search-heading">Calendar activity</h2>
              <form className="form-inline">
                <i className="fas fa-search" aria-hidden="true" />
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search by person, date"
                  aria-label="Search"
                />
              </form>
            </div>
          <div className="chatbox-body">
            
            <div className="chatbox-user">
              <div className="chatbox-user-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  alt=""
                />
                <span className="status green " />
              </div>
              <div className="chatbox-user-text">
                <h2 className="chatbox-user-name">Eimantas Rudminas</h2>
                <h3 className="chatbox-user-comment">
                  Commented on "Calli with Sam" meet
                </h3>
                <h4 className="chatbox-user-time">
                  <i className="far fa-clock" /> May 4, Friday
                </h4>
              </div>
            </div>
            <div className="chatbox-user">
              <div className="chatbox-user-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  alt=""
                />
                <span className="status green " />
              </div>
              <div className="chatbox-user-text">
                <h2 className="chatbox-user-name">Simona Lubyte</h2>
                <h3 className="chatbox-user-comment">
                  Created a "New Front-End position cadidate" meet
                </h3>
                <h4 className="chatbox-user-time">
                  <i className="far fa-clock" /> May 4, Friday
                </h4>
              </div>
            </div>
            <h3 className="u-mt-2">Monday 7, 2018</h3>
            <div className="chatbox-user">
              <div className="chatbox-user-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  alt=""
                />
                <span className="status red " />
              </div>
              <div className="chatbox-user-text">
                <h2 className="chatbox-user-name">Simona Lubyte</h2>
                <h3 className="chatbox-user-comment">
                  Created a "New Front-End position cadidate" meet
                </h3>
                <h4 className="chatbox-user-time">
                  <i className="far fa-clock" /> May 4, Friday
                </h4>
              </div>
            </div>
            <div className="chatbox-user">
              <div className="chatbox-user-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  alt=""
                />
                <span className="status green " />
              </div>
              <div className="chatbox-user-text">
                <h2 className="chatbox-user-name">Simona Lubyte</h2>
                <h3 className="chatbox-user-comment">
                  Created a "New Front-End position cadidate" meet
                </h3>
                <h4 className="chatbox-user-time">
                  <i className="far fa-clock" /> May 4, Friday
                </h4>
              </div>
            </div>
            <div className="chatbox-user">
              <div className="chatbox-user-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  alt=""
                />
                <span className="status green " />
              </div>
              <div className="chatbox-user-text">
                <h2 className="chatbox-user-name">Simona Lubyte</h2>
                <h3 className="chatbox-user-comment">
                  Created a "New Front-End position cadidate" meet
                </h3>
                <h4 className="chatbox-user-time">
                  <i className="far fa-clock" /> May 4, Friday
                </h4>
              </div>
            </div>
            <div className="chatbox-user">
              <div className="chatbox-user-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  alt=""
                />
                <span className="status red " />
              </div>
              <div className="chatbox-user-text">
                <h2 className="chatbox-user-name">Simona Lubyte</h2>
                <h3 className="chatbox-user-comment">
                  Created a "New Front-End position cadidate" meet
                </h3>
                <h4 className="chatbox-user-time">
                  <i className="far fa-clock" /> May 4, Friday
                </h4>
              </div>
            </div>
            <div className="chatbox-user">
              <div className="chatbox-user-image">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                  alt=""
                />
                <span className="status green " />
              </div>
              <div className="chatbox-user-text">
                <h2 className="chatbox-user-name">Simona Lubyte</h2>
                <h3 className="chatbox-user-comment">
                  Created a "New Front-End position cadidate" meet
                </h3>
                <h4 className="chatbox-user-time">
                  <i className="far fa-clock" /> May 4, Friday
                </h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
