import React from 'react';
import Display from './grandchildren/Display';

import helpers from '../utils/helpers';


class Gallery extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      galleryImages: []
    };

  }//constructor

  componentDidMount() {
    helpers.getAllImages()
      .then( (response) => {

        var res = response.data;

        var allImages = [];

        res.forEach( (res) => {
          allImages.push(res);
        });//forEach
        // console.log(allImages);

        this.setState({
          galleryImages: allImages
        });//setState

        // console.log(this.state.galleryImages);

        this.refs.child.imageOnDisplay(allImages[0].img1);

      });
  }

  render() {
    var sneakers = this.state.galleryImages;
    var set1 = [];
    var set2 = [];

    //loop through & push images to arrays
    for (var i = 0; i < sneakers.length; i++) {
      if (i < 2) set1.push(sneakers[i]);
      else if (i >= 2 && i < 4) set2.push(sneakers[i]);
    }

    console.log(set1);
    console.log(set2);

    return(
      <div className="container">

        <div className="row" style={styles.gallery}>
          <div className="col-md-12">

          {this.state.galleryImages.map( (res, i) => {
            return (
              <div className="col-md-6" style={styles.thumbnail} key={i}>
                <a className="thumbnail" onClick={this.refs.child.updateImageOnDisplay}>
                  <img src={res.img1} id={i} name={res.name} style={styles.img} />
                </a>
              </div>
            );
          })}

          </div>
        </div>


        <div className="row" style={styles.display}>
          <div className="col-md-12">
            <Display ref='child' galleryImages={this.state.galleryImages} />
          </div>
        </div>

      </div>//container
    );
  }
}

const styles = {
  img: {
    margin: 0,
    width: '100%'
  },
  thumbnail: {
    margin: 'auto',
    width: '50%'
  },
  gallery: {
    margin: '50px',
    padding: '50px'
  },
  display: {
    width: '100%',
    margin: '5px'
  }
};

export default Gallery;
