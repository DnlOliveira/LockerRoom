import React from 'react';

import Header from './children/Header';
import Gallery from './children/Gallery';

class Main extends React.Component {

  render() {
    return(
      <div className="container">

        <div className="row">
          <div className="col-md-12" id="header">
            <Header />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12" id="shelf">
            <Gallery />
          </div>
        </div>

      </div>
    );
  }
}//class Main

module.exports = Main;
