import React from 'react';
import './App.css';
import Options from './Options';

class Features extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <Options 
              mainCart={this.props.mainCart}
              selections={this.props.features[feature]} 
              feature={feature}
              handleUpdate={this.props.handleUpdate}
              handleCurrency={this.props.handleCurrency}
            />
          </fieldset>
        );
      });

      return (
        <div>
          {features}
        </div>
      )
    }
  }
  
  export default Features;