import Reqwest from 'reqwest';
import Constants from './constants.js';

function categoryService()
{    
    var service = {
        getCategories: getCategories,
        addCategory: addCategory
    };
    
    return service;
    
    function getCategories(callback) {
        Reqwest({
            url: Constants.BACKEND_URL + 'categories',
            method: 'get',
            error: function (err) {
                console.log(err);
            },
            success: function (data) {
                console.log(Constants.BACKEND_URL + 'categories',);
                callback(data);
            }
        })
    }
    
    function addCategory(category, callback){
        Reqwest({
            url: Constants.BACKEND_URL + 'categories',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain',
                'Authorization': 'Bearer 3be4fc7f-4718-4b42-a644-eef79a1ff369'
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