import React from 'react';

const GalleryPic = (props) => (
  <div className="col-sm-6 col-lg-3 gallery-pic">
    <img className="pic-part" src={props.pic.head} />
    <img className="pic-part" src={props.pic.torso} />
    <img className="pic-part" src={props.pic.legs} />
    <h4>{props.pic.title}</h4>
    <p>{props.pic.artists.join(', ')}</p>
  </div>
);

export default GalleryPic;
