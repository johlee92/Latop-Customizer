import React from 'react';
import './App.css';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
  
class Options extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        const options = this.props.selections.map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(this.props.feature)}
                checked={item.name === this.props.mainCart.selected[this.props.feature].name}
                onChange={e => this.props.handleUpdate(this.props.feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name}
                ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          );
        });

      return (
        <div>
          {options}
        </div>
      )
    }
  }
  
  export default Options;