$(window).on('load',function(){
    $.ajax({
        url : "https://jsonplaceholder.typicode.com/users",//API URL 
        type: "GET", // GET OR POST,
        beforeSend : function () {
            // This function calls before ajax API Hits
            // Here we have to show our loader 
        },
        success: function(response, status) {
            // Once our API call send success 
            // this function gets called.
        },
        error: function(error, status) {
            // IF our API get any error
            // this function gets called.
        }
    })
});