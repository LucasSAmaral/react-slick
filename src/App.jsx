import React, { Component } from 'react';
import Slider from 'react-slick';
import Image1 from './img/foto1.jpg';
import Image2 from './img/foto2.jpg';
import Image3 from './img/foto3.jpg';
import Img from './Image';
import './App.scss';
import '../node_modules/slick-carousel/slick/slick.scss';
import '../node_modules/slick-carousel/slick/slick-theme.scss';

class App extends Component {

  constructor(){
    super();
    this.state = {
      imgs: [{
        src: Image1,
        alt: 'Foto 1'
      },
      {
        src: Image2,
        alt: 'Foto 2'
      },
      {
        src: Image3,
        alt: 'Foto 3'
      }]
    }
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="App">
          <h1>Carrossel React Slick</h1>

          <Slider {...settings}>
            {this.state.imgs.map((img) => {
              return <Img src={img.src} alt={img.alt} />
            })}
          </Slider>

      </div>
    );
  }
}

export default App;
