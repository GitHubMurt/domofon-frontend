import Reqwest from 'reqwest';
import Constants from './constants.js';

function contactService()
{
    var service = {
        getContacts: getContacts,
        addContact: addContact
    };
    
    return service;
    
    function getContacts(callback) {
        Reqwest({
            url: Constants.BACKEND_URL + 'contacts',
            method: 'get',
            error: function (err) {
                console.log(err);
            },
            success: function (data) {
                callback(data);
            }
        })
    }
    
    function addContact (contact, callback) {
        Reqwest({
            url: Constants.BACKEND_URL + 'contacts',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            type: 'json',
            data: JSON.stringify({
                contact
                //name:"Test",
                //category:"Test",
                //company:"Test",
                //notifyEmail: "test@gmail.com",
                //phone: "48744811002",
                //adminEmail: "test@gmail.com",
                //fromDate: "2016-04-23",
                //tillDate: "2016-04-23"
            }),
            error: function (err) {
                console.log(err);
            },
            success: function (data) {        
                callback(data);
            }
        });
    }
}

export default contactService();