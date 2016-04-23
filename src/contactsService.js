import Reqwest from 'reqwest';
import Constants from './constants.js';

function contactService()
{
    var serviceMethod = 'contacts';
    
    var service = {
        getContacts: getContacts,
        getContact: getContact,
        addContact: addContact,
        notifyContact: notifyContact
    };
    
    return service;
    
    function getContacts(callback) {
        Reqwest({
            url: Constants.BACKEND_URL + serviceMethod,
            method: 'get',
            error: function (err) {
                console.log(err);
            },
            success: function (data) {
                callback(data);
            }
        })
    }
    
    function getContact(id, callback) {
        Reqwest({
            url: Constants.BACKEND_URL + serviceMethod + '/' + id,
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
            url: Constants.BACKEND_URL + serviceMethod,
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

    function notifyContact (contact, callback) {
        Reqwest({
            url: Constants.BACKEND_URL + serviceMethod + "/" + contact.id + "/notify",
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            type: 'json',
            // data: JSON.stringify({
            //     contact
            // }),
            error: function (err) {
                console.log(err);
            },
            success: function (data) {
                if (callback)
                    callback(data);
            }
        });
    }
}

export default contactService();