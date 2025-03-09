
function requestAPI(method ,resources ){

 let respuesta = my.request({

    url:`https://jsonplaceholder.typicode.com/${resources}`,
    method: method,
    /*
    data:{
      name:"",
      username:"",
      email:"",
      phone:"",

    },
    */
    dataType: 'json',

    sucess: function(res){
      console.log("Respuesta de la API",res);
      my.alert({content: 'success' })
    },
    fail: function(res){
      my.alert({content: 'fail'})
    },
    complete: function(res){
      my.hideLoading();
      my.alert({content: 'complete'})
    }

  })

  return respuesta

}

module.exports = { requestAPI }