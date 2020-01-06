import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Display extends Component {
render(){
  //console.log(this.props.items);
  const options = this.props.items.Display.map((item, index)=>
    {
      const itemHash = slugify(JSON.stringify(item));
      return(
        <div key={index}>
        <input 
          type='radio' 
          id={itemHash}
          className="feature__option"
          checked={item.name === this.props.selected.Display.name}
          onChange={e => this.props.handleUpdate('Display', item)}/>
        <label 
          htmlFor={itemHash} 
          className='feature__label' >
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
        </div>
      );
    })

  return(
    <fieldset className='feature'>
      <legend>
        <h3>Display</h3>
      </legend>
      <div className="feature__item">
        {options}
      </div>
    </fieldset>
  );
}
}

export default Display;