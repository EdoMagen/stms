import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class Header extends Component {
  render() {
    return (
      <header className={`${styles}`}>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">
                Spotify Favorites
              </Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse" aria-expanded="true">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/home" activeClassName="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/list" activeClassName="active">
                    Pick Favorites
                  </Link>
                </li>
                <li>
                  <Link to="/listviewer" activeClassName="active">
                    View Favorites
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
