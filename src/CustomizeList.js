import React from 'react';
import './App.css';
import Features from './Features';

class CustomizeList extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {  
      return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
              mainCart={this.props.mainCart}
              features={this.props.features}
              handleUpdate={this.props.handleUpdate}
              handleCurrency={this.props.handleCurrency}
            />
        </form>
      );
    }
  }
  
  export default CustomizeList;