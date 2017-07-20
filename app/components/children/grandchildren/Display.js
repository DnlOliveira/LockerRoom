import React from 'react';


class Display extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.updateImageOnDisplay = this.updateImageOnDisplay.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.state = {
      imageOnDisplay: "",
      otherImages: {}
    };

  }//constructor

  imageOnDisplay(e) {
    this.setState({
      imageOnDisplay: e,
      otherImages: {
        img1: this.props.galleryImages[0].img1,
        img2: this.props.galleryImages[0].img2,
        img3: this.props.galleryImages[0].img3,
        img4: this.props.galleryImages[0].img4
      }
    });
  }

  updateImageOnDisplay(e) {
    var i = e.target.id;

    var images = {
      img1: this.props.galleryImages[i].img1,
      img2: this.props.galleryImages[i].img2,
      img3: this.props.galleryImages[i].img3,
      img4: this.props.galleryImages[i].img4
    }

    this.setState( {
      imageOnDisplay: e.target.src,
      otherImages: images
    }, () => {
      // console.log(this.state.otherImages.img1);
    });
  }//updateImageOnDisplay

  handleOnClick(e) {
    this.setState({
      imageOnDisplay: e.target.src
    })
  }

  render() {
    return(
      <div className="row" id="display">

        <div className="col-md-10" id="main-display">
          <img src={this.state.imageOnDisplay} width='50%' />
        </div>

        <div className="col-md-12" id="sec-display">
          <img src={this.state.otherImages.img1} width='15%' onClick={this.handleOnClick} />
          <img src={this.state.otherImages.img2} width='15%' onClick={this.handleOnClick} />
          <img src={this.state.otherImages.img3} width='15%' onClick={this.handleOnClick} />
          <img src={this.state.otherImages.img4} width='15%' onClick={this.handleOnClick} />
        </div>

      </div>
    );
  }//render

}

export default Display;
