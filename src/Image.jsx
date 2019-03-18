import React, { Component } from 'react';

class Image extends Component {
    render(){
        return(
            <div className="Img__container">
                <img src={this.props.src} alt={this.props.alt}/>
            </div>
        );
    }
}

export default Image;