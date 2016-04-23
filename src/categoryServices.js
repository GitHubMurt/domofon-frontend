import Reqwest from 'reqwest';

function categoryService()
{
    var service = {
        getCategory: getCategory,
        addCategory: addCategory
    };
    
    return service;
    
    function getCategory(callback) {
        Reqwest({
            url: 'http://localhost:8080/categories',
            method: 'get',
            success: function (data) {
                callback(data);
            }
        })
    }
    
    function addCategory(callback){
        Reqwest({
            url: 'http://localhost:8080/categories',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain',
                'Authorization': 'Bearer 3be4fc7f-4718-4b42-a644-eef79a1ff369' 
            },
            type: 'json',
            data: JSON.stringify({
                name:'Test',
                description:'Test',
                isIndividual:false,
                message:'Test message'
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