import React from 'react';

import Header from './children/Header';
import Gallery from './children/Gallery';

class Main extends React.Component {

  render() {
    return(
      <div className="container">

        <div className="row">
          <div className="col-md-12" id="tabs">
            <ul className="nav nav-tabs">
              <li role="presentation" className="active"><a href="#">Home</a></li>
              <li role="presentation"><a href="#">My Locker</a></li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12" id="gallery">
            <Gallery />
          </div>
        </div>

      </div>
    );
  }
}//class Main

module.exports = Main;
