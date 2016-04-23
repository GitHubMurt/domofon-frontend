import React from 'react';
import Title from './Title.js';
import NameInput from './NameInput.js';
import CategoryButton from './CategoryButton.js';
<<<<<<< bc8167831ca1c3609645c1fce609546e7ed08911
import ContactsList from './ContactsList.js';
import CategoryService from './categoryService.js';
import ContactsService from './contactsService.js';


const Root = React.createClass({
  getInitialState: function () {
    return {name: 'world', contactObjects : [
      {name: 'Barbara Bara', deputy: undefined},
      {name: 'Jan Kowalski', deputy: {name: "Marcin", phone: "+48000111222"}}
    ]};
  },
  componentDidMount: function() {
    CategoryService.getCategories(function (data) {
      this.setState({
          categoryName: data[0].name
        });
    }.bind(this));

    ContactsService.getContacts(function (data) {
      this.setState({
        contactObjects: data
      });
    }.bind(this));
=======
import Categories from './Categories.js'

const Root = React.createClass({
  getInitialState: function () {
    return {name: 'world',
            categories:[ 
              {id:"1", name:"Kurier", isIndividual:"0"},
              {id:"2", name:"Placek", isIndividual:"0"},
              {id:"3", name:"Pan Precel", isIndividual:"0"},
              {id:"4", name:"Jabłka", isIndividual:"0"},
              {id:"5", name:"Pani Jadzia", isIndividual:"0"}
            ]
            };
>>>>>>> categories view added
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
<<<<<<< bc8167831ca1c3609645c1fce609546e7ed08911
        <ContactsList objects={this.state.contactObjects}/>
=======
        <Categories categoriesArray={this.state.categories}/>
>>>>>>> categories view added
      </div>
    );
  }
}); 

export default Root;
