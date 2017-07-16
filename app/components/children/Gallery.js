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

  // handleClick(event) {
  //   this.refs.child.updateImageOnDisplay(event.target.src);
  // }

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
      <div className="container" id="gallery">

        <div className="row">

          {this.state.galleryImages.map( (res, i) => {
            return (
              <div className="col-md-3" id="images" key={i}>
                <h5>{res.name}</h5>
                <a className="thumbnail" onClick={this.refs.child.updateImageOnDisplay}>
                  <img src={res.img1} id={i} />
                </a>
              </div>
            );
          })}

        </div>


        <div className="row">
          <div className="col-md-12">
            <Display ref='child' galleryImages={this.state.galleryImages}/>
          </div>
        </div>

      </div>//container
    );
  }
}

export default Gallery;
