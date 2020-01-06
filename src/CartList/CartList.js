import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class CartList extends Component {
  render(){
    //console.log(this.props);
    return(
      <div className="summary__option" >
        <div className="summary__option__label">{this.props.title}</div>
        <div className="summary__option__value">{this.props.item}</div>
          <div className="summary__option__cost">
          {USCurrencyFormat.format(this.props.cost)}
        </div>
    </div>
    );
  }
}

export default CartList;