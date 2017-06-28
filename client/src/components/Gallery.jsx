import React from 'react';

import GalleryPic from './GalleryPic.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gallery">
        {this.props.pics.map((pic, idx) => <GalleryPic key={idx} pic={pic}/>)}
      </div>
    );
  }
}


export default Gallery;
