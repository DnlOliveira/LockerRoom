import React from 'react';

import Header from './children/Header';
import Gallery from './children/Gallery';

class Main extends React.Component {

  render() {
    return(
      <div className="container">

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8" id="gallery" style={styles.gallery}>
            <Gallery />
          </div>
          <div className="col-md-2"></div>
        </div>

      </div>
    );
  }
}//class Main

const styles = {
  gallery: {
    borderStyle: 'solid',
    margin: '0px'
  }
}

module.exports = Main;
