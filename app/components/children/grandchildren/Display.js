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
      <div className="row">

        <div className="col-md-2">
          <img src={this.state.otherImages.img1} width='100' height='100' onClick={this.handleOnClick} /><br/>
          <img src={this.state.otherImages.img2} width='100' height='100' onClick={this.handleOnClick} /><br/>
          <img src={this.state.otherImages.img3} width='100' height='100' onClick={this.handleOnClick} /><br/>
          <img src={this.state.otherImages.img4} width='100' height='100' onClick={this.handleOnClick} />
        </div>

        <div className="col-md-10">
          <img src={this.state.imageOnDisplay} />
        </div>

      </div>
    );
  }//render

}

export default Display;
