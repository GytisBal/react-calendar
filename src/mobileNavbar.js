import React, {Component} from 'react'



class mobileNavigation extends Component{
    render() {
      return (
  
        <nav className="navbar navbar-light amber lighten-4 mb-4">
          {/* Navbar brand */}
          <a className="navbar-brand" href="#">Navbar</a>
          {/* Collapse button */}
          <button className="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20" aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
            <div className="animated-icon1"><span /><span /><span /></div>
          </button>
          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent20">
            {/* Links */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            {/* Links */}
          </div>
          {/* Collapsible content */}
        </nav>
      );
    }
  };

  export default mobileNavigation