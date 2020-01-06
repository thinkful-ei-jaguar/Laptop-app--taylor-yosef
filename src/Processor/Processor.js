import React, { Component } from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Processor extends Component {
render(){
  //console.log(this.props.items);
  const options = this.props.items.Processor.map((item, index)=>
    {
      const itemHash = slugify(JSON.stringify(item));
      return(
        <div key={index}>
        <input 
          type='radio' 
          id={itemHash}
          className="feature__option"
          checked={item.name === this.props.selected.Processor.name}
          onChange={e => this.props.handleUpdate('Processor', item)}
          />
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
        <h3>Processor</h3>
      </legend>
      <div className="feature__item">
        {options}
      </div>
    </fieldset>
  );
}
}

export default Processor;