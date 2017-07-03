import React from 'react';


class GalleryPic extends React.Component {
  constructor(props) {
    super(props);
  }

  selectArtist(event) {
    this.props.fetchGallery(event.target.innerText);
  }

  render() {
    return (
      <div className="col-xs-4 col-lg-3 gallery-pic">
        <img className="pic-part" src={pic.head.path} />
        <img className="pic-part" src={pic.torso.path} />
        <img className="pic-part" src={pic.legs.path} />
        <a href="#" onClick={this.selectArtist.bind(this)}>{pic.head.artist}</a>
        <a href="#" onClick={this.selectArtist.bind(this)}>{pic.torso.artist}</a>
        <a href="#" onClick={this.selectArtist.bind(this)}>{pic.legs.artist}</a>
      </div>
    );
  }
}
export default GalleryPic;
