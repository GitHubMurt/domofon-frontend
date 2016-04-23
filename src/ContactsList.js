import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import RaisedButton from 'material-ui/lib/raised-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContactsService from './contactsService.js';

const ContactsList = React.createClass({
    render: function () {
        var renderContact = function(object){
            return (object.deputy === undefined)? object.name :  <span style={ {color:'dimgrey'} } >{ object.name }</span>;
        };
        var renderDeputy = function(object){
            return (object.deputy === undefined)? "" : object.deputy.name + " " + object.deputy.phone;
        };
        var notifyContact = function(object){
            ContactsService.notifyContact(object);
        };
        var contactNodes = this.props.objects.map(function(object, i) {
            return <ListItem key={i}
                             leftAvatar={
                            <Avatar>
                                {object.name.substring(0,1)}
                            </Avatar>
                        }
            >
                {renderContact(object)}
                {"   "}
                {renderDeputy(object)}
                <RaisedButton label="Poinformuj" onClick={notifyContact.bind(this, object)} secondary={true} style={ {marginLeft: '10px', float: 'right'} }/>
            </ListItem>;
        });

        return (
            <List>
                {contactNodes}
            </List>
        );
    }
});

export default ContactsList