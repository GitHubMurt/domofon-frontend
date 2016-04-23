import React from 'react';
import Title from './Title.js';
import NameInput from './NameInput.js';
import CategoryButton from './CategoryButton.js';
import ContactsList from './ContactsList.js';
import CategoryService from './categoryService.js';
import ContactsService from './contactsService.js';


const Root = React.createClass({
  getInitialState: function () {
    return {name: 'world'};
  },
  componentDidMount: function() {
    CategoryService.getCategories(function (data) {
      this.setState({
          categoryName: data[0].name
        });
    }.bind(this));
  },
  setName: function (name) {
    this.setState({name});
  },
  render: function () {
    const contactObjects = [
      {name: 'Barbara Bara', deputy: undefined},
      {name: 'Jan Kowalski', deputy: {name: "Marcin", phone: "+48000111222"}}
    ];
    return (
      <div>
        <Title name={this.state.name} />        
        <NameInput initialName={this.state.name} onNameChanged={this.setName} />
        <CategoryButton initialName={this.state.name} />
        <ContactsList objects={contactObjects}/>
      </div>
    );
  }
}); 

export default Root;
