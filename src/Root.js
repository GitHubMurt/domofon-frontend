import React from 'react';
import Title from './Title.js';
import NameInput from './NameInput.js';
import CategoryButton from './CategoryButton.js';

const Root = React.createClass({
  getInitialState: function () {
    return {name: 'world'};
  },
  setName: function (name) {
    this.setState({name});
  },
  render: function () {
    return (
      <div>
        <Title name={this.state.name} />
        <NameInput initialName={this.state.name} onNameChanged={this.setName} />
        <CategoryButton initialName={this.state.name} />
      </div>
    );
  }
}); 

export default Root;
