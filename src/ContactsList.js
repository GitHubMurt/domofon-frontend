import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import RaisedButton from 'material-ui/lib/raised-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const ContactsList = React.createClass({
    render: function () {
        var renderContact = function(object){
            return (object.deputy === undefined)? object.name :  <span style={ {color:'dimgrey'} } >{ object.name }</span>;
        };
        var renderDeputy = function(object){
            return (object.deputy === undefined)? "" : object.deputy.name + " " + object.deputy.phone;
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
                <RaisedButton label="Poinformuj" secondary={true} style={ {marginLeft: '10px', float: 'right'} }/>
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