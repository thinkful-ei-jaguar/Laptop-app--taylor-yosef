import React, { Component } from 'react';
import CartList from '../CartList/CartList';

class Cart extends Component {
  render(){
    //This was to map through the store and render each cartlist component based on item selected...

    let parts = Object.entries(this.props.selected).map((part, index)=>
       <CartList key={index} title={part[0]} item={part[1].name} cost={part[1].cost} />
    )

    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    //console.log(Object.entries(this.props.selected));
    //console.log(this.props);

    return(
      <section className="main__summary">
        <h2>Your cart</h2>
        {parts}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;