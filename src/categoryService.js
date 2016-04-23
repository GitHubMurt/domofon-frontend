import Reqwest from 'reqwest';
import Constants from './constants.js';

function categoryService()
{
    var serviceMethod = 'categories';
    
    var service = {
        getCategory: getCategory,
        getCategories: getCategories,
        addCategory: addCategory
    };
    
    return service;
    
    function getCategories(callback) {
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
    
    function getCategory(id, callback) {
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
    
    function addCategory(category, callback){
        Reqwest({
            url: Constants.BACKEND_URL + serviceMethod,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain',
                'Authorization': 'Bearer ' + Constants.AUTHORIZATION_ID
            },
            type: 'json',
            data: JSON.stringify({
                category
                //name: 'Test',
                //description: 'Test',
                //isIndividual: false,
                //message: 'Test message'
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

export default categoryService();