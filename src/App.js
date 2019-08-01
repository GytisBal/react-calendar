import React, { Component } from "react";
import "./main.scss";
import logo from "./img/koralis.png";

class App extends Component {
  render() {
    return (
      <main className="mainLayout">
        <div className="calendar-wrapper">
          <div className="navigation-wrapper">
            <div className="logo">
              <img src={logo} alt="" className="image" />
            </div>
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
                <button className="event-button">+ Add event</button>
              </div>
            </div>
            <div className="calendar-box">
              <div className="calendar-navigation-row">
                <div className="calendar-navigation-row-icons-container">
                  <i className="fas fa-table" />
                  <i className="fas fa-bars" />
                </div>
                <div className="calendar-nvaigation-row-year-container">
                  <i
                    className="fas fa-chevron-left"
                    style={{ paddingRight: "4rem" }}
                  />
                  <h2 style={{ display: "inline" }}>May 2018</h2>
                  <i
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
                <tbody>
                  <tr>
                    <td scope="row">30</td>
                    <td>31</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td scope="row" className="holiday">
                      6<h2>Mother's Day</h2>
                    </td>
                    <td className="disabled">7</td>
                    <td>8</td>
                    <td>
                      9
                      <div className="task">
                        <h4 className="task-heading">
                          <span className="status green" />
                          Call with Sam
                        </h4>
                        <h4 className="time">
                          <i className="far fa-clock" /> 3:15 pm
                        </h4>
                      </div>
                    </td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td scope="row">13</td>
                    <td>14</td>
                    <td>
                      15
                      <div className="task">
                        <h4 className="task-heading">
                          <span className="status green" />
                          Design review
                        </h4>
                        <h4 className="time">
                          <i className="far fa-clock" /> 8:55 am
                        </h4>
                        <h4 className="task-heading">
                          <span className="status green" />
                          QA
                        </h4>
                        <h4 className="time">
                          <i className="far fa-clock" /> 4:10 pm
                        </h4>
                      </div>
                    </td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                  </tr>
                  <tr>
                    <td scope="row">21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td>
                      26
                      <div className="task">
                        <h4 className="task-heading">
                          <span className="status green" />
                          Call with Dave
                        </h4>
                        <h4 className="time">
                          <i className="far fa-clock" /> 1:30 pm
                        </h4>
                      </div>
                    </td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      28
                      <div className="task">
                        <h4 className="task-heading">
                          <span className="status green" />
                          Meet with Dave
                        </h4>
                        <h4 className="time">
                          <i className="far fa-clock" /> 5:00 pm
                        </h4>
                      </div>
                    </td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
          <div className="chatbox-body">
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
