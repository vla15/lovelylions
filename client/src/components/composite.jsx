import React from 'react';

class Composite extends React.Component {

  componentDidMount() {
    console.log('inside composite component: ', this.props.pic);
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    console.log(this.props.pic);
    var picObj = this.props.pic;
    var head = new Image(300, 150);
    var torso = new Image(300, 150);
    var legs = new Image(300, 150);
    head.src = picObj.head.path;
    head.onload = () => {
      context.drawImage(head, 0, 0, 300, 150);
      torso.src = picObj.torso.path;
      torso.onload = () => {
        context.drawImage(torso, 0, 150, 300, 150);
        legs.src = picObj.legs.path;
        legs.onload = () => {
          context.drawImage(legs, 0, 300, 300, 150);
        };
      };
    };
  }

  regenerate() {
    // currently passing in an object with a path property
    var pathValue = this.props.pic[this.props.userPart];
    var userImage = {}
    userImage[this.props.userPart] = pathValue;
    // need to pass in an object with a body part property that is an object with a path property
    this.props.generateImage(userImage);
  }

  saveImage() {
    this.props.saveImage(this.props.pic, this.props.userPart);
  }

  render(){
    return (
      <div className="composite">
        <canvas width="300px" height="450px">
        </canvas>
        <div className="button-cluster">
          <button onClick={this.regenerate.bind(this)}>regenerate</button>
          {this.props.login ? <button onClick={this.saveImage.bind(this)}>save</button> : ''}
        </div>
      </div>
    );
  }
}

export default Composite;
