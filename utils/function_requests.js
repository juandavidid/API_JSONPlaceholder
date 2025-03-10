


/**
 * Realiza una solicitud a la API usando my.request en Alipay Mini program
 * @param {string} method - Metodo HTP de la solicitud (GET, POST PUT, DELETE)
 * @param {string} resources - Recurso o endpoint de la API
 * @returns {object} - Retorna la respuesta de la API
 * @example
 * llamar funcion -->  >> requestAPI('GET','users' )
 * Respuesta      -->  >> { data: Array(10) ,  status: 200, headers: {...}, statudCode: 200 ...}
 * 
 */
function requestAPI(method ,resources ){


  return new Promise((resolve, reject)=>{

    my.showLoading({ content: 'Cargando...' });

    my.request({
      url: `https://jsonplaceholder.typicode.com/${resources}`,
      method: method,
      dataType: 'json',

      // Mensaje Existo de la API
      success: function (res) {
        console.info('RESPUESTA API',res)
        resolve(res);  // ✅ Retorna la respuesta correctamente
      },
      // Fallo de Respuesta API
      fail: function (res) {
        console.error('[API Fail]', res); // Registra errores en consola
        reject(res);
      },
      complete: function (res) {
        my.hideLoading();
        //my.alert({ content: 'EXITO' });
      }
      
    });
  })
}

module.exports = { requestAPI }