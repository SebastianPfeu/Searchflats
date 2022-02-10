/* eslint-disable */
import React, { Component } from 'react';

class Flat extends Component {
  handleclick = () => {
    this.props.selectFlat(this.event.index);
  }

  render() {
    return (
      <div className={`card${this.props.selected ? " active" : ""}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageURL}')` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onclick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
