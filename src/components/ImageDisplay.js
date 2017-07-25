import React, { Component } from 'react';

class ImageDisplay extends Component {

  render() {
    let allImages = this.props.images

    return (
      <div className='roverPics'>
      {allImages.map((pic)=> {
        return (
          <div key={pic.id}>
            <li><img src={pic.img_src} /></li>
          </div>
        )
      })}

      </div>
    )
  }

}

export default ImageDisplay;
